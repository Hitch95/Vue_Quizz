<template>
  <div class="question">
    <h3 v-if="question">{{ question.question }}</h3>
    <h3 v-else>Error: question not found</h3>
    <hr />
    <ul>
      <li v-for="(choice, index) in randomChoices" :key="choice">
        <AnswerComponent
          :id="`answer-${index}`"
          :value="choice"
          :disabled="hasAnswer"
          v-model="answer"
          :correctAnswer="question.correct_answer"
        />
      </li>
    </ul>
    <button
      class="py-2.5 px-6 text-sm max-h-max bg-indigo-500 text-white rounded-full cursor-pointer font-medium text-center shadow-xs transition-all duration-500 hover:bg-indigo-700 mt-7"
      :disabled="!hasAnswer"
      @click="
        (() => {
          emits('answer', answer)
          answer = ''
        })()
      "
    >
      Question suivante
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps, ref } from 'vue'
import { shuffleArray } from '@/functions/Array'
import AnswerComponent from './AnswerComponent.vue'

interface Question {
  question: string
  choices: string[]
  correct_answer: string
}

const props = defineProps({
  question: {
    type: Object as () => Question,
    required: true,
  },
})

const answer = ref('')
const emits = defineEmits(['answer'])
const hasAnswer = computed(() => answer.value !== '')
const randomChoices = computed(() => {
  if (!props.question) {
    return []
  }
  console.log('props.question.choices:', props.question.choices)
  if (!props.question.choices) {
    return []
  }
  return shuffleArray(props.question.choices)
})
</script>
