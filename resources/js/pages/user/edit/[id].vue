<!-- eslint-disable vue/no-v-html, camelcase -->
<script setup>
definePage({
  meta: {
    action: 'update',
    subject: 'ticket-service',
  },
})

import { reactive, ref, nextTick, computed } from 'vue'
import FieldRenderer from '@/components/dialogs/FieldRenderer.vue'

const router = useRouter()
const route = useRoute("ticket-service-edit-id")

const currentItemFech = reactive({
  api: {
    endPoint: 'ticket-service',
    itemName: 'TicketService',
    query: { with_users: 'true' },
  },
})

const viewData = reactive({
  name: 'Service de ticket',
  backName: 'un',
  secondBackName: 'le',
  backRoute: {
    name: 'Services de ticket',
    endPoint: 'ticket-service',
  },
  api: {
    isLoading: false,
  },
})

const {
  data: currentItemData,
} = await useApi(createUrl(`/${currentItemFech.api.endPoint}/${route.params.id}`, {
  query: currentItemFech.api.query,
}))

const currentItem = ref(currentItemData.value.data[currentItemFech.api.itemName])

const functionData = {
  api: {
    endpoint: 'ticket-service',
    method: 'PUT',
  },
  backRouteName: 'ticket-service',
}

function resetErrors() {
  fieldDataList.forEach(item => {
    item.errors = null
  })
}

const fieldDataList = reactive([
  {
    type: 'text',
    label: 'Nom',
    valueKey: 'name',
    errors: null,
    required: true,
    cols: { cols: 12, sm: 6, md: 6, lg: 6 },
    data: {
      list: {
        id: 'id',
        name: 'name',
        source: 'array',
        api: {
          endpoint: "",
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
    type: 'lov',
    label: 'Type',
    valueKey: 'type',
    errors: null,
    required: true,
    cols: { cols: 12, sm: 6, md: 6, lg: 6 },
    data: {
      list: {
        id: 'id',
        name: 'name',
        source: 'array',
        api: {
          endpoint: null,
          query: {},
          execute: null,
          data: null,
        },
        items: [{ id: 'it', name: 'It' }, { id: 'ops', name: 'Opérations' }],
        multiple: false,
      },
    },
  },
  {
    type: 'lov',
    label: 'Utilisateurs',
    valueKey: 'users',
    errors: null,
    required: false,
    cols: { cols: 12, sm: 12, md: 12, lg: 12 },
    data: {
      list: {
        id: 'id',
        name: 'name',
        source: 'api',
        api: {
          endpoint: 'user',
          query: { paginate: 'false' },
          execute: null,
          data: null,
        },
        items: [],
        multiple: true,
      },
    },
  },
])

// const fieldValueList = reactive(
//   fieldDataList.reduce((acc, field) => {
//     acc[field.value_key] = null
//     return acc
//   }, {})
// )

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

// Normaliser la valeur initiale des utilisateurs pour VAutocomplete (tableau d'IDs)
if (currentItem.value && Array.isArray(currentItem.value.users)) {
  currentItem.value.users = currentItem.value.users.map(user => typeof user === 'object' && user !== null ? user.id : user)
}

const refForm = ref()

const onSubmit = () => {
  refForm.value?.validate().then(async ({ valid }) => {
    viewData.api.isLoading = true
    if (valid) {
      resetErrors()

      const res = await $api(`/${functionData.api.endpoint}/${route.params.id}`, {
        method: functionData.api.method,
        body: currentItem.value,
      })

      if (res?.status == 200) {
        snackbarMessage.value = `${viewData.name} modifié avec succès`
        snackbarCollor.value = 'success'
        isSnackbarScrollReverseVisible.value = true
        router.push({ name: functionData.backRouteName })
      } else if (res?.errors) {
        fieldDataList.forEach(item => {
          if (res.errors[item.valueKey]) {
            item.errors = res.errors[item.valueKey]
          }
        })
        snackbarMessage.value = ''
        for (const key in res.errors) {
          if (res.errors[key]) {
            res.errors[key].forEach(message => {
              snackbarMessage.value += `${key}: ${message}<br>`
            })
          }
        }
        snackbarCollor.value = 'error'
        isSnackbarScrollReverseVisible.value = !!snackbarMessage.value
      } else {
        snackbarMessage.value = res?.message ?? 'Une erreur inconnue est survenue.'
        snackbarCollor.value = 'error'
        isSnackbarScrollReverseVisible.value = true
      }
      nextTick(() => {
        refForm.value?.resetValidation()
      })
    }
    viewData.api.isLoading = false
  })
}

const isSnackbarScrollReverseVisible = ref(false)
const snackbarMessage = ref("")
const snackbarCollor = ref("success")
</script>

<template>
  <div>
    <div class="d-flex flex-wrap justify-start justify-sm-space-between gap-y-4 gap-x-6 mb-6">
      <div class="d-flex flex-column justify-center">
        <h4 class="text-h4 font-weight-medium">
          Modifier {{ viewData.backName }} {{ viewData.name }}
        </h4>
      </div>
    </div>
    <VForm
      ref="refForm"
      @submit.prevent="onSubmit"
    >
      <VRow>
        <VCol cols="11">
          <VBtn
            prepend-icon="tabler-arrow-narrow-left"
            :to="{name: viewData.backRoute.endPoint}"
          >
            {{ viewData.backRoute.name }}
          </VBtn>
        </VCol>
      </VRow>
      <VRow>
        <VCol md="12">
          <!-- 👉 PV Information -->
          <VCard
            class="mb-6"
            :title="`Informations sur ${viewData.secondBackName} ${viewData.name}`"
          >
            <VCardText>
              <VRow>
                <VCol
                  v-for="field in fieldDataList"
                  :key="field.valueKey"
                  :cols="field.cols.cols??12"
                  :sm="field.cols.sm??12"
                  :md="field.cols.md??12"
                  :lg="field.cols.lg??12"
                >
                  <FieldRenderer
                    v-model="currentItem[field.valueKey]"
                    :field="field"
                  />
                </VCol>
              </VRow>
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
                class="me-3"
                :loading="viewData.api.isLoading"
                :disabled="viewData.api.isLoading"
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
				color: #fff !important
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
