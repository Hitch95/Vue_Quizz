<template>
  <div>
    <h3 class="mb-4 font-semibold text-indigo-300">{{ quiz.title }}</h3>
    <ProgressComponent :value="step" :max="quiz.questions.length - 1" />
    <QuestionComponent
      :question="question"
      v-if="state === 'question'"
      @answer="addAnswer"
    />
    <RecapComponent v-if="state === 'result'" :answers="answers" :quiz="quiz" />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import ProgressComponent from './ProgressComponent.vue'
import QuestionComponent from './QuestionComponent.vue'
import RecapComponent from './RecapComponent.vue'

const props = defineProps({
  quiz: {
    type: Object,
    required: true,
  },
})

const step = ref(0)
const question = computed(() => {
  const currentQuestion = props.quiz.questions[step.value]
  return currentQuestion
})
const state = ref('question')
const answers = ref(props.quiz.questions.map(() => null))

const addAnswer = (answer: string, index: number) => {
  answers.value[index] = answer
  if (index === props.quiz.questions.length - 1) {
    state.value = 'recap'
  } else {
    step.value++
  }
}
</script>
