import { describe, expect, it, vi, beforeEach } from 'vitest'
import { mount, flushPromises } from '@vue/test-utils'
import App from './App.vue'
import QuizComponent from './components/QuizComponent.vue'

// Create a jsdom environment for the tests
import { JSDOM } from 'jsdom'
const dom = new JSDOM(`<!DOCTYPE html><html><body></body></html>`)
document = dom.window.document
window = dom.window

describe('App.vue', () => {
  beforeEach(() => {
    vi.resetAllMocks()
  })

  it('renders quiz component when data is fetched successfully', async () => {
    const quizData = {
      title: 'Sample Quiz',
      minimum_score: 4,
      success_message: 'Félicitations! Vous êtes un véritable cinéphile!',
      failure_message:
        'Dommage! Vous devriez regarder plus de films et séries.',
      questions: [
        {
          question: 'Quelle série met en scène le personnage de Walter White?',
          choices: [
            'Breaking Bad',
            'Stranger Things',
            'Game of Thrones',
            'The Walking Dead',
          ],
          correct_answer: 'Breaking Bad',
        },
      ],
    }

    // Mock the fetch function to return a successful response
    vi.stubGlobal('fetch', () =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(quizData),
      }),
    )

    const wrapper = mount(App)
    await flushPromises() // Wait for all promises to resolve

    expect(wrapper.findComponent(QuizComponent).exists()).toBe(true)
  })

  it('renders error message when fetching data fails', async () => {
    // Mock the fetch function to return an error
    vi.stubGlobal('fetch', () =>
      Promise.reject(new Error('Error while fetching data')),
    )

    const wrapper = mount(App)
    await flushPromises() // Wait for all promises to resolve

    // Force a re-render
    await wrapper.vm.$nextTick()

    // Check if the error message is rendered
    const errorMessage = wrapper.find('[data-test="error-message"]')
    expect(errorMessage.exists()).toBe(true)
    expect(errorMessage.text()).toContain('Impossible de charger le quizz')
  })
})
