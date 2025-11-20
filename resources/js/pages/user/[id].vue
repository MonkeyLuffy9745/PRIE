<!-- eslint-disable camelcase -->
<script setup>
definePage({
  meta: {
    action: 'read',
    subject: 'ticket-service',
  },
})

const router = useRouter()
const route = useRoute('ticket-service-id')

const {
  data: itemData,
} = await useApi(createUrl(`/ticket-service/${route.params.id}`, {
  query: {
    with_users: 'true',

    // with_tickets: 'false', // activer si besoin côté UI
  },
}))

if (itemData.value.status !== 200) {
  router.push({ name: 'ticket-service' })
}

// Propriétés calculées pour simplifier l'accès aux données
const item = computed(() => itemData.value.data.TicketService)

const users = computed(() => item.value?.users ?? [])
const hasUsers = computed(() => Array.isArray(users.value) && users.value.length > 0)

const itemDetails = computed(() => [
  { title: 'Nom', value: item.value?.name },
  { title: 'Type', value: item.value?.type_fr },
  { title: 'Membres', value: hasUsers.value ? users.value.length : 0 },
])

const backRoute = 'ticket-service'
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
                Liste des services de ticket
              </VBtn>
            </VCol>
            <VCol
              cols="2"
              class="text-right"
            >
              <VBtn
                :to="{ name: 'ticket-service-edit-id', params: { id: route.params.id } }"
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

            <VCol
              v-if="hasUsers"
              cols="12"
            >
              <h2>Membres :</h2>
              <br>
              <div class="d-flex flex-wrap gap-2">
                <VChip
                  v-for="u in users"
                  :key="u.id"
                  class="ma-1"
                  color="primary"
                  label
                  variant="tonal"
                >
                  {{ u.name ?? ('#' + u.id) }}
                </VChip>
              </div>
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


