<template>
  <h3>Recap</h3>
  <p>{{ hasWon ? quiz?.success_message : quiz?.failure_message }}</p>
  <p>Score : {{ score }} / {{ quiz?.questions.length }}</p>
</template>

<script setup lang="ts">
import { onMounted, computed } from 'vue'

const props = defineProps({
  quiz: Object,
  answers: Array,
})

const score = computed(() => {
  return props.quiz?.questions.reduce((acc, question, key) => {
    const isCorrect = question.correct_answer === props.answers?.[key]
    if (isCorrect) {
      return acc + 1
    }
    return acc
  }, 0)
})
const hasWon = computed(() => score.value >= props.quiz?.minimum_score)
</script>
