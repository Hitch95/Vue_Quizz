export function shuffleArray(array: string[]) {
  if (!array) {
    throw new Error('shuffleArray requires a non-null array argument')
  }
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
  return array
}
