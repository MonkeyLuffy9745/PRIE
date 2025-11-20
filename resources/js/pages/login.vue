<!-- ❗Errors in the form are set on line 60 -->
<script setup>
import { useGenerateImageVariant } from '@core/composable/useGenerateImageVariant'
import authV2LoginIllustrationBorderedDark from '@images/pages/auth-v2-login-illustration-bordered-dark.png'
import authV2LoginIllustrationBorderedLight from '@images/pages/auth-v2-login-illustration-bordered-light.png'
import authV2LoginIllustrationDark from '@images/pages/auth-v2-login-illustration-dark.png'
import authV2LoginIllustrationLight from '@images/pages/auth-v2-login-illustration-light.png'
import authV2MaskDark from '@images/pages/misc-mask-dark.png'
import authV2MaskLight from '@images/pages/misc-mask-light.png'
import { VNodeRenderer } from '@layouts/components/VNodeRenderer'
import { themeConfig } from '@themeConfig'
import { VForm } from 'vuetify/components/VForm'

const authThemeImg = useGenerateImageVariant(authV2LoginIllustrationLight, authV2LoginIllustrationDark, authV2LoginIllustrationBorderedLight, authV2LoginIllustrationBorderedDark, true)
const authThemeMask = useGenerateImageVariant(authV2MaskLight, authV2MaskDark)
const isLoading = ref(false)

definePage({
  meta: {
    layout: 'blank',
    unauthenticatedOnly: true,
  },
})

const isPasswordVisible = ref(false)
const route = useRoute()
const router = useRouter()
const ability = useAbility()

const errors = ref({
  email: undefined,
  password: undefined,
})

const refVForm = ref()

const credentials = ref({
  email: 'test@example.com',
  password: 'password',
})

const login = async () => {
  isLoading.value = true // commencer le loader
  try {
    const res = await $api('/auth/login', {
      method: 'POST',
      body: {
        email: credentials.value.email,
        password: credentials.value.password,
      },
      onResponseError({ response }) {
        errors.value = response._data.errors
      },
    })

    errors.value.email = undefined;
    errors.value.password = undefined;

    if (res.status == 200) {
      const { userToken, user } = res.data
      console.log(user)
      useCookie('userAbilityRules').value = user.ability_rules
      ability.update(user.ability_rules)

      useCookie('userData').value = {
        "id": user.id,
        "fullName": user.name,
        "username": user.name,
        "avatar": "/images/avatars/avatar-1.png",
        "email": user.email,
        "role": user.profile,
        "role_fr": user.profile_fr,
        "flexcube_user_id": user.flexcube_user_id,
        "climbing_level": user.climbing_level,
      }
      useCookie('accessToken').value = userToken
      await nextTick(() => {
        router.replace(route.query.to ? String(route.query.to) : '/')
      })
    } else {
      if (res.status != 200) {
        if (res.errors.email) {
          errors.value.email = res.errors.email[0]
        } else if (res.errors.password) {
          errors.value.password = res.errors.password[0]
        } else {
          isSnackbarScrollReverseVisible.value = true
          snackbarMessage.value = ""
          for (const key in res.errors) {
            if (key != "sub_code") {
              res.errors[key].forEach(message => {
                snackbarMessage.value += message + "\n";
              })
            }
          }
        }
      }
    }

  } catch (err) {
    isLoading.value = false // arrêter le loader
    console.error(err)
  }
  isLoading.value = false // arrêter le loader
}

const onSubmit = () => {
  refVForm.value?.validate().then(({ valid: isValid }) => {
    if (isValid)
      login()
  })
}
const isSnackbarScrollReverseVisible = ref(false)
const snackbarMessage = ref("")
</script>

<template>
  <VRow no-gutters class="auth-wrapper bg-surface">
    <VCol lg="8" class="d-none d-lg-flex">
      <div class="position-relative bg-background rounded-lg w-100 ma-8 me-0">
        <div class="d-flex align-center justify-center w-100 h-100">
          <VImg max-width="505" :src="authThemeImg" class="auth-illustration mt-16 mb-2" />
        </div>

        <VImg :src="authThemeMask" class="auth-footer-mask" />
      </div>
    </VCol>

    <VCol cols="12" lg="4" class="auth-card-v2 d-flex align-center justify-center">
      <VCard flat :max-width="500" class="mt-12 mt-sm-0 pa-4">
        <VCardText>
          <VNodeRenderer :nodes="themeConfig.app.logo" class="mb-6" />

          <h4 class="text-h4 mb-1">
            Bienvenue sur <span class="text-capitalize"> {{ themeConfig.app.title }} </span>! 👋🏻
          </h4>
          <p class="mb-0">
            Veuillez vous connecter
          </p>
        </VCardText>
        <VCardText>
          <VForm ref="refVForm" @submit.prevent="onSubmit">
            <VRow>
              <!-- email -->
              <VCol cols="12">
                <AppTextField v-model="credentials.email" label="Email" placeholder="johndoe@email.com" type="email"
                  autofocus :rules="[requiredValidator, emailValidator]" :error-messages="errors.email" />
              </VCol>

              <!-- password -->
              <VCol cols="12">
                <AppTextField v-model="credentials.password" label="Mot de passe" placeholder="············"
                  :rules="[requiredValidator]" :type="isPasswordVisible ? 'text' : 'password'"
                  :error-messages="errors.password"
                  :append-inner-icon="isPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'"
                  @click:append-inner="isPasswordVisible = !isPasswordVisible" class="mb-8" />

                <VBtn block type="submit" :loading="isLoading" :disabled="isLoading">Connexion</VBtn>
              </VCol>
            </VRow>
          </VForm>
        </VCardText>
      </VCard>
    </VCol>
  </VRow>
  <VSnackbar v-model="isSnackbarScrollReverseVisible" transition="scroll-y-reverse-transition" location="bottom end"
    color="error">
    {{ snackbarMessage }}
  </VSnackbar>
</template>

<style lang="scss">
@use "@core-scss/template/pages/page-auth.scss";
</style>
