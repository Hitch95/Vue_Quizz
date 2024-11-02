<template>
  <h3 class="mb-4 font-semibold">Recap</h3>
  <p>{{ hasWon ? quiz.success_message : quiz.failure_message }}</p>
  <p>Score : {{ score }} / {{ quiz.questions.length }}</p>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { Quiz } from '../App.vue'

const props = defineProps({
  quiz: {
    type: Object as () => Quiz,
    required: true,
  },
  answers: {
    type: Array as () => string[],
    required: true,
  },
})

const score = computed(() => {
  return props.quiz.questions.reduce(
    (acc: number, question: { correct_answer: string }, key: number) => {
      const isCorrect = question.correct_answer === props.answers[key]
      if (isCorrect) {
        return acc + 1
      }
      return acc
    },
    0,
  )
})

const hasWon = computed(() => score.value >= props.quiz.minimum_score)
</script>
