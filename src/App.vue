<template>
  <div v-if="state === 'error'">
    <p data-test="error-message">Impossible de charger le quizz</p>
  </div>

  <div :aria-busy="state === 'loading'">
    <QuizComponent :quiz="computedQuiz" v-if="computedQuiz" />
  </div>
</template>

<script lang="ts">
import { ref, onMounted, computed } from 'vue'
import QuizComponent from './components/QuizComponent.vue'

interface Quiz {
  title: string
  minimum_score: number
  success_message: string
  failure_message: string
  questions: Array<{
    question: string
    choices: string[]
    correct_answer: string
  }>
}

export default {
  components: { QuizComponent },

  setup() {
    const quiz = ref<Quiz | null>(null)
    const state = ref<'loading' | 'error' | 'idle'>('loading')

    const computedQuiz = computed(() => quiz.value)

    onMounted(async () => {
      try {
        const response = await fetch('./quizz.json')
        if (!response.ok) {
          throw new Error('Error while fetching data')
        }
        const data = await response.json()
        quiz.value = data
        state.value = 'idle'
      } catch (error) {
        console.error('Error:', error)
        state.value = 'error'
      }
    })

    return { quiz, state, computedQuiz }
  },
}
</script>
