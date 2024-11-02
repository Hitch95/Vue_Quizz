<template>
  <h3>Recap</h3>
  <p>{{ hasWon ? quiz?.success_message : quiz?.failure_message }}</p>
  <p>Score : {{ score }} / {{ quiz?.questions.length }}</p>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { Quiz } from '../App.vue'

const props = defineProps({
  quiz: Object as () => Quiz,
  answers: Array,
})

// By adding the null (!) verification operator we're telling TypeScript
// that we're sure these values are defined and that we want to use them without verification.
const score = computed(() => {
  return props.quiz?.questions.reduce(
    (acc: number, question: unknown, key: number) => {
      const isCorrect =
        (question as { correct_answer: string }).correct_answer! ===
        props.answers?.[key]
      if (isCorrect) {
        return acc + 1
      }
      return acc
    },
    0,
  )
})
const hasWon = computed(() => score.value! >= props.quiz!.minimum_score!)
</script>
