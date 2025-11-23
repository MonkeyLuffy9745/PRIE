<!-- eslint-disable camelcase -->
<script setup>
definePage({
  meta: {
    action: 'read',
    subject: 'incident',
  },
})

const router = useRouter()
const route = useRoute('incident-id')

const {
  data: itemData,
} = await useApi(createUrl(`/incident/${route.params.id}`, {
  query: {
    with_location: 'true',
    with_user: 'true',
  },
}))

if (itemData.value.status !== 200) {
  router.push({ name: 'incident' })
}

// Propriétés calculées pour simplifier l'accès aux données
const item = computed(() => itemData.value.data.Incident)

const itemDetails = computed(() => [
  { title: 'Titre', value: item.value?.title },
  { title: 'Date de l\'incident', value: item.value?.occurred_at_fr },
  { title: 'Localisation', value: item.value?.location?.name },
  { title: 'Description', value: item.value?.description },
  { title: 'Personnes impliquées', value: item.value?.people_involved },
  { title: 'Actions prises', value: item.value?.actions_taken },
  { title: 'Utilisateur', value: item.value?.user?.full_name },
])

const backRoute = 'incident'
</script>

<template>
  <section v-if="itemData">
    <VRow>
      <VCol cols="12">
        <VCard>
          <VCardText class="d-flex flex-wrap justify-space-between flex-column flex-sm-row text-lg">
            <VCol cols="10">
              <VBtn :to="{ name: backRoute }">
                <VIcon
                  start
                  icon="tabler-arrow-left"
                />
                Liste des incidents
              </VBtn>
            </VCol>
            <VCol
              cols="2"
              class="text-right"
            >
              <VBtn
                :to="{ name: 'incident-edit-id', params: { id: route.params.id } }"
                color="primary"
              >
                Modifier
                <VIcon
                  end
                  icon="tabler-edit"
                />
              </VBtn>
            </VCol>

            <VCol cols="12">
              <h2>Détails:</h2>
            </VCol>
            <VCol cols="12">
              <VTable class="text-no-wrap">
                <tbody>
                  <tr
                    v-for="(detail, index) in itemDetails"
                    :key="index"
                  >
                    <td colspan="5">
                      {{ detail.title }}
                    </td>
                    <td colspan="1">
                      {{ detail.value ?? '-' }}
                    </td>
                  </tr>
                </tbody>
              </VTable>
            </VCol>

          </VCardText>
        </VCard>
      </VCol>
    </VRow>
  </section>
  <section v-else>
    <VCard>
      <VCardText>
        Chargement...
      </VCardText>
    </VCard>
  </section>
</template>

<style lang="scss">
.media-player {
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 10%);
}

@media (max-width: 768px) {
  .media-player {
    block-size: auto !important;
    max-inline-size: 100% !important;
  }
}
</style>


