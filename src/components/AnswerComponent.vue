<template>
  <label :for="id" :class="classes" class="cursor-pointer">
    <input
      :id="id"
      type="radio"
      name="answer"
      v-model="model"
      :value="value"
      :disabled="disabled"
    />
    {{ value }}
  </label>
</template>

<script setup lang="ts">
import { computed, defineProps, defineModel } from 'vue'

const props = defineProps<{
  id: string
  disabled: boolean
  value: string
  correctAnswer: string
}>()

const model = defineModel<string>()

const classes = computed<Record<string, boolean>>(() => ({
  disabled: props.disabled,
  right: props.disabled && props.value === props.correctAnswer,
  wrong:
    props.disabled &&
    props.value !== props.correctAnswer &&
    model.value === props.value,
}))
</script>

<style>
.disabled {
  opacity: 0.5;
}
.right {
  opacity: 1;
  color: green;
}
.wrong {
  opacity: 1;
  color: red;
}
</style>
