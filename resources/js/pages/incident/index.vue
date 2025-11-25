<script setup>
definePage({
  meta: {
    action: "read",
    subject: "incident",
  },
})

import { $api } from "@/utils/api"
import { onMounted, reactive, watch, watchEffect } from "vue"

const searchQuery = ref(null)
const loadings = ref([])
const itemsPerPage = ref(8)
const page = ref(1)
const selectedItemId = ref(0)
const isActionDialogVisible = ref(false)
const actionTitle = ref("")
const actionText = ref("")
const actionButtonText = ref("")
const actionFunction = ref()
const actionComment = ref("")
const commentPresence = ref(false)
const isSnackbarScrollReverseVisible = ref(false)
const snackbarMessage = ref("")
const snackbarColor = ref("success")
const deleteLoadings = ref({})
const incidentData = useCookie("incidentData")

const headers = [
  {
    title: "Titre",
    key: "title",
  },
  {
    title: "Date de l'incident",
    key: "occurred_at_fr",
  },
  {
    title: "Localisation",
    key: "location.name",
  },

  {
    key: "actions",
    title: "Actions",
    align: "end",
  },
]

// Configuration de la vue avec structure générique
const viewData = reactive({
  filter: {
    title: "Filtres",
  },
  data: {
    title: {
      singular: "Incident",
      plural: "Incidents",
    },
    actions: {
      singular: "l'incident",
      plural: "les incidents",
    },
    rule: {
      name: "incident",
    },
    link: {
      base: "incident",
    },
    api: {
      endPoint: "incident",
      data: null,
      query: {
        // status: 'awaiting_support',
        // type: 'it',
        // with_initiator: 'true',
        // with_incident_service: 'true',
        // order_order_by_desc: 'created_at'
      },
    },
  },
})

// Configuration des filtres dynamiques
const filterDataArray = reactive([
  {
    view: {
      cols: {
        col: 6,
        sm: 6,
      },
      name: {
        itemTitle: "full_name",
        itemValue: "id",
      },
    },
    base: {
      name: "Agent",
      data_source: "api",
      api_endpoint: "user",
      query: { paginate: "false", profile: "agent" },
    },
    filter: {
      key: "user_id",
      value: null,
    },
    api: {
      datac: [
      ],
    },
  },{
    view: {
      cols: {
        col: 6,
        sm: 6,
      },
      name: {
        itemTitle: "name",
        itemValue: "id",
      },
    },
    base: {
      name: "Localisation",
      data_source: "api",
      api_endpoint: "location",
      query: { paginate: "false" },
    },
    filter: {
      key: "location_id",
      value: null,
    },
    api: {
      datac: [
      ],
    },
  },
])

const moreQuery = {
  'with_location': 'true',
}

for (let index = 0; index < filterDataArray.length; index++) {
  if (filterDataArray[index]["base"]["data_source"] === "api") {
    const { data, execute } = await useApi(
      createUrl(`/${filterDataArray[index]["base"]["api_endpoint"]}`, {
        query: filterDataArray[index]["base"]["query"],
      }),
    )

    filterDataArray[index].api.data = data
    filterDataArray[index].api.execute = execute
    filterDataArray[index].api.datac = filterDataArray[index].api.data.data
    moreQuery[filterDataArray[index]["filter"]["key"]] =
			filterDataArray[index]["filter"]["value"]
  }
}

// Nouvelle structure pour les données des services de incident
const itemListData = ref({ data: [], total: 0, lastPage: 1 })

const fetchItemList = async (idList = []) => {
  idList.forEach(id => {
    loadings.value[id] = true
  })
  try {
    const { data } = await useApi(
      createUrl(viewData.data.api.endPoint, {
        query: {
          search: searchQuery.value,
          page: page.value,
          ...viewData.data.api.query,
          ...moreQuery,
        },
      }),
    )

    itemListData.value = data.value
  } finally {
    idList.forEach(id => {
      loadings.value[id] = false
    })
  }
}

const itemList = computed(() => itemListData.value.data)
const totalTransfer = computed(() => itemListData.value.total)
const lastPage = computed(() => itemListData.value.lastPage)

const updateOptions = options => {
  page.value = options.page
}

const apiDelete = async id => {
  deleteLoadings.value[id] = true
  try {
    const response = await $api(`${viewData.data.api.endPoint}/${id}`, {
      method: "DELETE",
    })

    if (response.status == 200) {
      isSnackbarScrollReverseVisible.value = true
      snackbarColor.value = "success"
      snackbarMessage.value = `${viewData.data.title.singular} supprimé avec succès`
    } else {
      snackbarColor.value = "error"
      isSnackbarScrollReverseVisible.value = true
      snackbarMessage.value = ""
      for (const key in response.errors) {
        response.errors[key].forEach(message => {
          snackbarMessage.value += "" + message + "<br>"
        })
      }
    }
  } catch (error) {
    snackbarColor.value = "error"
    isSnackbarScrollReverseVisible.value = true
    snackbarMessage.value = "Erreur lors de la suppression"
  } finally {
    deleteLoadings.value[id] = false
    await fetchItemList()
  }
}

const downloadPdf = async id => {
  const loadingId = `pdf-${id}`
  loadings.value[loadingId] = true
  try {
    const response = await fetch(`${import.meta.env.VITE_API_BASE_URL || '/api'}/pdf/${viewData.data.api.endPoint}/${id}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${useCookie('accessToken').value}`,
        'Accept': 'application/pdf',
      },
    })

    if (!response.ok) {
      throw new Error('Erreur lors du téléchargement du PDF')
    }

    const blob = await response.blob()
    const url = window.URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = `incident-${id}.pdf`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    window.URL.revokeObjectURL(url)

    isSnackbarScrollReverseVisible.value = true
    snackbarColor.value = "success"
    snackbarMessage.value = "Rapport PDF téléchargé avec succès"
  } catch (error) {
    snackbarColor.value = "error"
    isSnackbarScrollReverseVisible.value = true
    snackbarMessage.value = "Erreur lors du téléchargement du PDF"
    console.error('Erreur lors du téléchargement:', error)
  } finally {
    loadings.value[loadingId] = false
  }
}

// Lifecycle hooks et watchers
onMounted(() => {
  fetchItemList([4])
})

watch([searchQuery, page], async () => {
  await fetchItemList([4])
})

watchEffect(async () => {
  filterDataArray.forEach(filterData => {
    moreQuery[filterData.filter.key] = filterData.filter.value
  })
  await fetchItemList([4])
})
</script>

<template>
  <div>
    <!-- 👉 widgets -->
    <VCard class="mb-6">
      <VCardText>
        <VRow>
          <VCardText>
            <h2>Liste des {{ viewData.data.title.plural }}</h2>
          </VCardText>
        </VRow>
      </VCardText>
    </VCard>

    <VCard
      :title="viewData.filter.title"
      class="mb-6"
    >
      <VCardText>
        <VRow>
          <VCol
            v-for="filterData in filterDataArray"
            :key="filterData.filter.key"
            :cols="filterData.view.cols.col"
            :sm="filterData.view.cols.sm ?? 6"
          >
            <AppAutocomplete
              v-model="filterData.filter.value"
              :placeholder="filterData.base.name"
              :item-title="filterData.view.name.itemTitle ?? 'name'"
              :item-value="filterData.view.name.itemValue ?? 'id'"
              :items="filterData.api.datac"
              clearable
              clear-icon="tabler-x"
            />
          </VCol>
        </VRow>

        <VDivider class="my-4" />
      </VCardText>
      <div class="d-flex flex-wrap gap-4 mx-5">
        <div class="flex-grow-1">
          <AppTextField
            v-model="searchQuery"
            placeholder="Rechercher"
          />
        </div>

        <div class="d-flex gap-4">
          <VBtn
            v-if="$can('create', viewData.data.rule.name)"
            color="primary"
            prepend-icon="tabler-plus"
            :to="{ name: `${viewData.data.link.base}-add` }"
          >
            Nouveau
          </VBtn>
          <VBtn
            :loading="loadings[3]"
            :disabled="loadings[3]"
            prepend-icon="tabler-refresh"
            @click="fetchItemList([3, 4])"
          >
            Recharger
            <template #loader>
              <span class="custom-loader">
                <VIcon icon="tabler-refresh" />
              </span>
            </template>
          </VBtn>
        </div>
      </div>

      <VDivider class="mt-4" />

      <!-- 👉 Datatable  -->
      <VDataTableServer
        v-model:items-per-page="itemsPerPage"
        v-model:page="page"
        :loading="loadings[4]"
        :headers="headers"
        :items="itemList"
        :items-length="totalTransfer"
        class="text-no-wrap"
        loading-text="En cours de chargement"
        @update:options="updateOptions" 
      >
        <template #item.actions="{ item }">
          <div class="text-end">
            <div>
              <IconBtn
                v-if="$can('read', 'incident')"
                :to="{
                  name: `${viewData.data.link.base}-id`,
                  params: { id: item.id },
                }"
              >
                <VTooltip
                  activator="parent"
                  transition="scroll-x-transition"
                  location="top"
                >
                  Details
                </VTooltip>
                <VIcon icon="tabler-eye" />
              </IconBtn>


              <IconBtn
                v-if="$can('download', 'incident')"
                :loading="loadings[`pdf-${item.id}`]"
                :disabled="loadings[`pdf-${item.id}`]"
                @click="downloadPdf(item.id)"
              >
                <VTooltip
                  activator="parent"
                  transition="scroll-x-transition"
                  location="top"
                >
                  Télécharger
                </VTooltip>
                <VIcon icon="tabler-download" />
              </IconBtn>



              <IconBtn
                v-if="$can('edit', 'incident')"
                :to="{
                  name: `${viewData.data.link.base}-edit-id`,
                  params: { id: item.id },
                }"
              >
                <VTooltip
                  activator="parent"
                  transition="scroll-x-transition"
                  location="top"
                >
                  Modifier
                </VTooltip>
                <VIcon icon="tabler-edit" />
              </IconBtn>
              <IconBtn
                v-if="$can('delete', 'incident')"
                :loading="deleteLoadings[item.id]"
                :disabled="deleteLoadings[item.id]"
                @click="
                  selectedItemId = item.id;
                  actionTitle = `Supprimer ${viewData.data.actions.singular}`;
                  actionText = `Voulez vous vraiment supprimer ${viewData.data.actions.singular}?`;
                  actionFunction = apiDelete;
                  actionButtonText = 'Supprimer';
                  commentPresence = false;
                  isActionDialogVisible = true;
                "
              >
                <VIcon
                  icon="tabler-trash"
                  color="error"
                />
                <VTooltip
                  activator="parent"
                  transition="scroll-x-transition"
                  location="bottom"
                >
                  Supprimer
                </VTooltip>
              </IconBtn>
            </div>
          </div>
        </template>

        <template #bottom>
          <VDivider />

          <div class="d-flex align-center justify-space-between flex-wrap gap-3 pa-5 pt-3">
            <p class="text-sm text-medium-emphasis mb-0">
              {{ paginationMeta({ page, itemsPerPage }, totalTransfer) }}
            </p>

            <VPagination
              v-model="page"
              :length="lastPage"
              :total-visible="
                $vuetify.display.xs ? 1 : Math.min(lastPage, 5)
              "
            >
              <template #prev="slotProps">
                <VBtn
                  variant="tonal"
                  color="default"
                  v-bind="slotProps"
                  :icon="false"
                >
                  <VIcon
                    start
                    icon="tabler-arrow-left"
                  />
                  Précedent
                </VBtn>
              </template>

              <template #next="slotProps">
                <VBtn
                  variant="tonal"
                  color="default"
                  v-bind="slotProps"
                  :icon="false"
                >
                  Suivant
                  <VIcon
                    end
                    icon="tabler-arrow-right"
                  />
                </VBtn>
              </template>
            </VPagination>
          </div>
        </template>
      </VDataTableServer>
    </VCard>

    <VDialog
      v-model="isActionDialogVisible"
      class="v-dialog-sm"
    >
      <!-- Dialog close btn -->
      <DialogCloseBtn @click="isActionDialogVisible = !isActionDialogVisible" />

      <!-- Dialog De suppression -->
      <VCard :title="actionTitle">
        <VCardText>
          {{ actionText }}

          <AppTextarea
            v-if="commentPresence"
            v-model="actionComment"
            class="mt-3"
            label="Commentaire"
            placeholder="Ex: RAS"
          />
        </VCardText>

        <VCardText class="d-flex justify-end gap-3 flex-wrap">
          <VBtn
            color="secondary"
            variant="tonal"
            @click="isActionDialogVisible = false"
          >
            Retour
          </VBtn>
          <VBtn
            @click="
              actionFunction(selectedItemId);
              isActionDialogVisible = false;
            "
          >
            {{ actionButtonText }}
          </VBtn>
        </VCardText>
      </VCard>
    </VDialog>

    <VSnackbar
      v-model="isSnackbarScrollReverseVisible"
      transition="scale-transition"
      location="top end"
      :color="snackbarColor"
    >
      <div v-text="snackbarMessage" />
    </VSnackbar>
  </div>
</template>

<style lang="scss" scoped>
.custom-loader {
  display: flex;
  animation: loader 1s infinite;
}

@keyframes loader {
  from {
    transform: rotate(0);
  }

  to {
    transform: rotate(360deg);
  }
}

.full-width-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  block-size: 100%;
  inline-size: 100%;
}
</style>
