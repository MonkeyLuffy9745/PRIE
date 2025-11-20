<script setup>
import { computed } from 'vue'

// Props
const props = defineProps({
  field: {
    type: Object,
    required: true,
  },
  modelValue: {
    type: [String, Number, Boolean, Array, Object],
    default: null,
  },
  validationRules: {
    type: Array,
    default: () => [],
  },

  // Nouveau prop pour le contexte (ex: type de fichier)
  context: {
    type: Object,
    default: () => ({}),
  },
})

// Emits
const emit = defineEmits(['update:modelValue'])

// Computed pour gérer le v-model
const modelValue = computed({
  get: () => props.modelValue,
  set: value => emit('update:modelValue', value),
})

// Validations spécifiques selon le type de fichier
const videoFileValidator = value => {
  if (!value || !value[0]) return true
  const videoExtensions = ['.mp4', '.avi', '.mov', '.wmv', '.webm']
  const fileName = value[0].name || ''
  const hasValidExtension = videoExtensions.some(ext => fileName.toLowerCase().endsWith(ext))
  
  return hasValidExtension || 'Format vidéo non supporté'
}

const audioFileValidator = value => {
  if (!value || !value[0]) return true
  const audioExtensions = ['.mp3', '.wav', '.m4a', '.aac']
  const fileName = value[0].name || ''
  const hasValidExtension = audioExtensions.some(ext => fileName.toLowerCase().endsWith(ext))

  return hasValidExtension || 'Format audio non supporté'
}

const coverImageValidator = value => {
  if (!value || !value[0]) return true
  const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.bmp']
  const fileName = value[0].name || ''
  const hasValidExtension = imageExtensions.some(ext => fileName.toLowerCase().endsWith(ext))
  
  return hasValidExtension || 'Format d\'image non supporté pour la couverture'
}

// Fonction pour obtenir les règles de validation dynamiques
const getDynamicValidationRules = () => {
  const baseRules = props.field.required ? [requiredValidator] : []

  // Validation spécifique pour les fichiers
  if (props.field.value_key === 'file' && props.context.type === 'video') {
    return [...baseRules, videoFileValidator]
  }
  
  if (props.field.value_key === 'file' && props.context.type === 'audio') {
    return [...baseRules, audioFileValidator]
  }
  
  if (props.field.value_key === 'cover_path' && props.context.type === 'video') {
    return [...baseRules, coverImageValidator]
  }
  
  return baseRules
}

// Règles de validation finales (prop + dynamiques)
const finalValidationRules = computed(() => {
  const dynamicRules = getDynamicValidationRules()
  
  return [...props.validationRules, ...dynamicRules]
})
</script>

<template>
  <div>
    <!-- Champs texte, nombre, email -->
    <div
      v-if="
        field.type === 'text' ||
          field.type === 'number' ||
          field.type === 'email'
      "
    >
      <VTextField
        v-model="modelValue"
        :type="field.type"
        :error-messages="field.errors"
        :label="field.label"
        :rules="finalValidationRules"
      />
    </div>

    <!-- Champ textarea -->
    <div v-if="field.type === 'textarea'">
      <VTextarea
        v-model="modelValue"
        :error-messages="field.errors"
        :label="field.label"
        :rules="finalValidationRules"
      />
    </div>

    <!-- Champ Tiptap Editor -->
    <div v-if="field.type === 'tiptap'">
      <TiptapEditor
        v-model="modelValue"
        class="border rounded basic-editor"
        :error-messages="field.errors"
        rows="20"
        :label="field.label"
        :rules="finalValidationRules"
        :placeholder="field.label"
      />
    </div>

    <!-- Champ date -->
    <div v-if="field.type === 'date'">
      <AppDateTimePicker
        v-model="modelValue"
        :error-messages="field.errors"
        :label="field.label"
        :config="{
          dateFormat: 'd/m/Y',
          locale: French,
        }"
        :rules="finalValidationRules"
      />
    </div>

    <!-- Champ LOV (List of Values) -->
    <div v-if="field.type === 'lov'">
      <VAutocomplete
        v-model="modelValue"
        :error-messages="field.errors"
        :items="field.data.list.items"
        :item-title="field.data.list.name ?? 'name'"
        :item-value="field.data.list.id ?? 'id'"
        :label="field.label"
        :rules="finalValidationRules"
        :multiple="field.data.list.multiple ?? false"
      />
    </div>

    <!-- Champ boolean (switch) -->
    <div v-if="field.type === 'boolean'">
      <VSwitch
        v-model="modelValue"
        :label="field.label"
        :error-messages="field.errors"
        :true-value="1"
        :false-value="0"
        :rules="finalValidationRules"
      />
    </div>

    <!-- Champ fichier -->
    <div v-if="field.type === 'file'">
      <VFileInput
        v-model="modelValue"
        :label="field.label"
        :error-messages="field.errors"
        :rules="finalValidationRules"
      />
    </div>
  </div>
</template>
