<!-- eslint-disable camelcase, vue/no-v-html -->
<script setup>
definePage({
  meta: {
    action: 'create',
    subject: 'incident',
  },
})

import FieldRenderer from "@/components/dialogs/FieldRenderer.vue"
import { computed, nextTick, reactive, ref } from 'vue'

const router = useRouter()

const functionData = {
  api: {
    endpoint: 'incident',
    method: 'POST',
  },
  back_route_name: 'incident',
}

// Configuration des messages de succès/erreur
const successMessages = {
  create: 'créé avec succès',
  update: 'modifié avec succès',
  delete: 'supprimé avec succès',
}

// Configuration des messages d'erreur personnalisés
const errorMessages = {
  upload: {
    network: "Erreur de connexion lors de l'upload",
    size: "Fichier trop volumineux",
    format: "Format de fichier non supporté",
  },
  validation: {
    required: "Ce champ est obligatoire",
    file: "Veuillez sélectionner un fichier valide",
  },
}

// Configuration des endpoints d'API
const apiConfig = {
  endpoints: {
    upload: `/${functionData.api.endpoint}/upload-chunk`,
    merge: `/${functionData.api.endpoint}/merge-chunks`,
    create: `/${functionData.api.endpoint}`,
  },
  methods: {
    upload: 'POST',
    merge: 'POST', 
    create: functionData.api.method,
  },
}

// Configuration des uploads selon le type
const uploadConfig = {
  audio: { chunkSize: 2 * 1024 * 1024, concurrency: 10 },
  video: { chunkSize: 8 * 1024 * 1024, concurrency: 20 },
}

// Configuration des colonnes dynamiques
const getDynamicCols = (field, context) => {
  const baseCols = { cols: 12, sm: 12, md: 12, lg: 12 }
  
  if (field.value_key === 'file' && context.type === 'video') {
    return { ...baseCols, md: 6, lg: 6 }
  }
  
  if (field.value_key === 'cover_path' && context.type === 'video') {
    return { ...baseCols, md: 6, lg: 6 }
  }
  
  return baseCols
}

// Gestion des erreurs plus granulaire
const getFieldSpecificErrors = (field, errors) => {
  if (field.type === 'file' && errors[field.value_key]) {
    return errors[field.value_key].map(error => {
      if (error.includes('size')) return errorMessages.upload.size
      if (error.includes('format') || error.includes('extension')) return errorMessages.upload.format

      return error
    })
  }

  return errors[field.value_key]
}

const viewData = reactive({
  name: 'Incident',
  back_name: 'un',
  second_back_name: 'incident',
  api: {
    is_loading: false,
  },
})

// Variables pour la barre de progression
const uploadProgress = reactive({
  isUploading: false,
  progress: 0,
  currentChunk: 0,
  totalChunks: 0,
  fileName: '',
})

const fieldDataList = reactive([
  {
    type: 'text',
    label: 'titre',
    value_key: 'title',
    default_value: 'incendie',
    errors: null,
    required: true,
    cols: { cols: 12, sm: 6, md: 6, lg: 6 },
  },{
    type: 'lov',
    label: 'Localisation',
    default_value: null,
    value_key: 'location_id',
    errors: null,
    required: true,
    cols: { cols: 12, sm: 6, md: 6, lg: 6 },
    data: {
      list: {
        id: 'id',
        name: 'name',
        source: 'api',
        api: {
          endpoint: 'location',
          query: {},
          execute: null,
          data: null,
        },
        items: [],
        multiple: false,
      },
    },
  },
  {
    type: 'text',
    label: 'Personnes impliquées',
    value_key: 'people_involved',
    default_value: null,
    errors: null,
    required: false,
    cols: { cols: 12, sm: 12, md: 12, lg: 12 },
  },
  {
    type: 'date',
    label: 'Date de l\'incident',
    value_key: 'occurred_at',
    default_value: null,
    errors: null,
    required: true,
    cols: { cols: 12, sm: 12, md: 12, lg: 12 },
  },
  
  {
    type: 'textarea',
    label: 'Description',
    value_key: 'description',
    errors: null,
    required: true,
    default_value: 'test',
    cols: { cols: 12, sm: 12, md: 12, lg: 12 },
  },
  {
    type: 'textarea',
    label: 'Actions prises',
    value_key: 'actions_taken',
    errors: null,
    required: false,
    default_value: 'test',
    cols: { cols: 12, sm: 12, md: 12, lg: 12 },
  },
]) 

const fieldValueList = reactive(
  fieldDataList.reduce((acc, field) => {
    if ('default_value' in field) {
      acc[field.value_key] = field.default_value ?? null
    } else {
      acc[field.value_key] = null
    }
    
    return acc
  }, {}),
)

for (let index = 0; index < fieldDataList.length; index++) {
  if (fieldDataList[index].type === "lov" && fieldDataList[index].data.list.source === "api") {
    const { data, execute } = await useApi(createUrl(`/${fieldDataList[index].data.list.api.endpoint}`, {
      query: fieldDataList[index].data.list.api.query,
    }))

    fieldDataList[index].data.list.api.data = data
    fieldDataList[index].data.list.api.execute = execute
    fieldDataList[index].data.list.items = fieldDataList[index].data.list.api.data.data
  }
}


function slugifyFileName(name) {
  const parts = name.split(".")
  const ext = parts.pop() // extension
  const base = parts.join(".")

  return (
    base
      .toLowerCase()
      .normalize("NFD") // supprime accents
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-") // remplace espaces & caractères spéciaux
      .replace(/^-+|-+$/g, "") // trim les -
    + "." + ext.toLowerCase()
  )
}

const uploadFileInChunks = async file => {
  // Configuration dynamique selon le type
  const currentType = fieldValueList.type || 'video'
  const config = uploadConfig[currentType] || uploadConfig.video
  const chunkSize = config.chunkSize
  const concurrency = config.concurrency
  const safeFileName = slugifyFileName(file.name)

  const totalChunks = Math.ceil(file.size / chunkSize)

  // Initialiser la progression
  uploadProgress.isUploading = true
  uploadProgress.progress = 0
  uploadProgress.currentChunk = 0
  uploadProgress.totalChunks = totalChunks
  uploadProgress.fileName = file.name

  const uploadChunk = async (chunk, index) => {
    const formData = new FormData()

    formData.append("file", chunk)
    formData.append("index", index)
    formData.append("filename", safeFileName)

    await $api(apiConfig.endpoints.upload, {
      method: apiConfig.methods.upload,
      body: formData,
    })

    // Mettre à jour la progression
    uploadProgress.currentChunk++
    uploadProgress.progress = Math.round((uploadProgress.currentChunk / totalChunks) * 100)
  }

  let index = 0
  while (index < totalChunks) {
    const batch = []
    for (let i = 0; i < concurrency && index < totalChunks; i++, index++) {
      const start = index * chunkSize
      const chunk = file.slice(start, start + chunkSize)

      batch.push(uploadChunk(chunk, index))
    }

    // attend que le batch soit fini avant d'envoyer les suivants
    await Promise.all(batch)
  }

  // Fusion finale
  const res = await $api(apiConfig.endpoints.merge, {
    method: apiConfig.methods.merge,
    body: { filename: safeFileName },
  })

  // Finaliser la progression
  uploadProgress.isUploading = false
  uploadProgress.progress = 100

  return res.file_path
}

function resetErrors() {
  fieldDataList.forEach(item => {
    item.errors = null
  })
}

function resetUploadProgress() {
  uploadProgress.isUploading = false
  uploadProgress.progress = 0
  uploadProgress.currentChunk = 0
  uploadProgress.totalChunks = 0
  uploadProgress.fileName = ''
}

const fileToBase64 = file => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader()

    // Si file est déjà un objet File (pas un événement)
    if (file instanceof File) {
      fileReader.readAsDataURL(file)
      fileReader.onload = () => {
        if (typeof fileReader.result === 'string') {
          resolve(fileReader.result)
        } else {
          reject(new Error('Erreur lors de la conversion du fichier'))
        }
      }
      fileReader.onerror = () => {
        reject(new Error('Erreur lors de la lecture du fichier'))
      }
    } else {
      // Si c'est un événement avec target.files
      const { files } = file.target || {}
      if (files && files.length) {
        fileReader.readAsDataURL(files[0])
        fileReader.onload = () => {
          if (typeof fileReader.result === 'string') {
            resolve(fileReader.result)
          } else {
            reject(new Error('Erreur lors de la conversion du fichier'))
          }
        }
        fileReader.onerror = () => {
          reject(new Error('Erreur lors de la lecture du fichier'))
        }
      } else {
        reject(new Error('Aucun fichier sélectionné'))
      }
    }
  })
}

const refForm = ref()

const onSubmit = () => {
  refForm.value?.validate().then(async ({ valid }) => {
    viewData.api.is_loading = true
    if (valid) {
      try {
        const payload = { ...fieldValueList }

        resetErrors()

        const res = await $api(apiConfig.endpoints.create, {
          method: apiConfig.methods.create,
          body: payload,
        })

        if (res?.status == 201) {
          snackbarMessage.value = `${viewData.name} ${successMessages.create}`
          snackbarCollor.value = "success"
          isSnackbarScrollReverseVisible.value = true
          router.push({ name: functionData.back_route_name })
        } else if (res?.errors) {
          // erreurs de validation
          for (const field of fieldDataList) {
            if (res.errors[field.value_key]) {
              field.errors = getFieldSpecificErrors(field, res.errors)
            }
          }

          // erreurs globales restantes
          snackbarMessage.value = ""
          for (const key in res.errors) {
            if (res.errors[key]) {
              snackbarMessage.value += `${res.errors[key]}`
              
            }
          }
          snackbarCollor.value = "error"
          isSnackbarScrollReverseVisible.value = !!snackbarMessage.value
        } else {
          // cas non prévu
          snackbarMessage.value = res?.message ?? "Une erreur inconnue est survenue."
          snackbarCollor.value = "error"
          isSnackbarScrollReverseVisible.value = true
        }
      } catch (error) {
        // erreur serveur / réseau
        resetErrors()
        resetUploadProgress()
        snackbarMessage.value = error.message ?? errorMessages.upload.network
        snackbarCollor.value = "error"
        isSnackbarScrollReverseVisible.value = true
      }
      nextTick(() => {
        refForm.value?.resetValidation()
      })
    }
    viewData.api.is_loading = false
  })
}

const isSnackbarScrollReverseVisible = ref(false)
const snackbarMessage = ref("")
const snackbarCollor = ref("success")

// Computed property pour filtrer les champs actifs
const activeFields = computed(() => {
  return fieldDataList.filter(field => !field.active || field.active())
})
</script>

<template>
  <div>
    <div class="d-flex flex-wrap justify-start justify-sm-space-between gap-y-4 gap-x-6 mb-6">
      <div class="d-flex flex-column justify-center">
        <h4 class="text-h4 font-weight-medium">
          Ajouter {{ viewData.back_name }} {{ viewData.name }}
        </h4>
      </div>
    </div>
    <VForm
      ref="refForm"
      @submit.prevent="onSubmit"
    >
      <VRow>
        <VCol md="12">
          <!-- 👉 PV Information -->
          <VCard
            class="mb-6"
            :title="`Informations sur ${viewData.second_back_name} ${viewData.name}`"
          >
            <VCardText>
              <VRow>
                <VCol
                  v-for="field in activeFields"
                  :key="field.value_key"
                  :cols="(field.getCols ? field.getCols() : field.cols).cols ?? 12"
                  :sm="(field.getCols ? field.getCols() : field.cols).sm ?? 12"
                  :md="(field.getCols ? field.getCols() : field.cols).md ?? 12"
                  :lg="(field.getCols ? field.getCols() : field.cols).lg ?? 12"
                >
                  <FieldRenderer
                    v-model="fieldValueList[field.value_key]"
                    :field="field"
                    :context="{ type: fieldValueList.type }"
                  />
                </VCol>
              </VRow>
            </VCardText>
          </VCard>
        </VCol>

        <!-- Barre de progression pour l'upload -->
        <VCol
          v-if="uploadProgress.isUploading"
          cols="12"
        >
          <VCard>
            <VCardText>
              <div class="d-flex justify-space-between align-center mb-2">
                <span class="text-sm text-medium-emphasis">
                  <VIcon
                    icon="tabler-upload"
                    class="me-2"
                  />
                  Upload en cours: {{ uploadProgress.fileName }}
                </span>
                <span class="text-sm text-medium-emphasis">
                  {{ uploadProgress.currentChunk }}/{{ uploadProgress.totalChunks }} chunks
                </span>
              </div>
              <VProgressLinear
                :model-value="uploadProgress.progress"
                color="primary"
                height="8"
                rounded
                striped
              />
              <div class="text-center mt-1">
                <span class="text-sm text-medium-emphasis">
                  {{ uploadProgress.progress }}%
                </span>
              </div>
            </VCardText>
          </VCard>
        </VCol>

        <VCol cols="12">
          <div class="d-flex flex-wrap justify-start justify-sm-space-between gap-y-4 gap-x-6 mb-6">
            <div class="d-flex flex-column justify-center" />
            <div class="d-flex gap-4 align-center flex-wrap">
              <VBtn
                type="reset"
                variant="tonal"
                color="primary"
              >
                <VIcon
                  start
                  icon="tabler-circle-minus"
                />
                Effacer
              </VBtn>
              <VBtn
                type="submit"
                :loading="viewData.api.is_loading"
                :disabled="viewData.api.is_loading"
                class="me-3"
              >
                Enregistrer
                <VIcon
                  end
                  icon="tabler-checkbox"
                />
              </VBtn>
            </div>
          </div>
        </VCol>
      </VRow>
    </VForm>

    <VSnackbar
      v-model="isSnackbarScrollReverseVisible"
      transition="scale-transition"
      location="top end"
      :color="snackbarCollor"
    >
      <!-- eslint-disable-next-line vue/no-v-html -->
      <div v-html="snackbarMessage" />
    </VSnackbar>
  </div>
</template>

<style lang="scss" scoped>
.drop-zone {
  border: 2px dashed rgba(var(--v-theme-on-surface), 0.12);
  border-radius: 6px;
}
</style>

<style lang="scss">
.inventory-card {
  .v-radio-group,
  .v-checkbox {
    .v-selection-control {
      align-items: start !important;

      .v-selection-control__wrapper {
        margin-block-start: -0.375rem !important;
      }
    }

    .v-label.custom-input {
      border: none !important;
    }
  }

  .v-tabs.v-tabs-pill {
    .v-slide-group-item--active.v-tab--selected.text-primary {
      h6 {
        color: #fff !important;
      }
    }
  }
}

.ProseMirror {
  p {
    margin-block-end: 0;
  }

  padding: 0.5rem;
  outline: none;

  p.is-editor-empty:first-child::before {
    block-size: 0;
    color: #adb5bd;
    content: attr(data-placeholder);
    float: inline-start;
    pointer-events: none;
  }
}
</style>
