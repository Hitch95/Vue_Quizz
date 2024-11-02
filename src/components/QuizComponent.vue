<template>
  <div>
    <h3 class="mb-4 font-semibold text-indigo-300">{{ quiz.title }}</h3>
    <ProgressComponent :value="step" :max="quiz.questions.length - 1" />
    <QuestionComponent
      v-if="state === 'question'"
      :question="question"
      :index="step.valueOf()"
      @answer="event => addAnswer(event, event.index)"
    />
    <RecapComponent v-if="state === 'result'" :answers="answers" :quiz="quiz" />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import type { Quiz } from '../App.vue'
import ProgressComponent from './ProgressComponent.vue'
import QuestionComponent from './QuestionComponent.vue'
import RecapComponent from './RecapComponent.vue'

const props = defineProps({
  quiz: {
    type: Object as () => Quiz,
    required: true,
  },
})

const step = ref(0)
const state = ref('question')
const question = computed(() => props.quiz.questions[step.value])
const answers = ref<string[]>([])

const addAnswer = (answer: string, index: number) => {
  answers.value.push(answer)
  console.log('index:', index)
  if (index === props.quiz.questions.length) {
    console.log('if condition index:', index)
    state.value = 'recap'
  } else {
    console.log('else condition index:', index)
    step.value++
    if (step.value >= props.quiz.questions.length - 1) {
      state.value = 'result'
    }
  }
}
</script>
