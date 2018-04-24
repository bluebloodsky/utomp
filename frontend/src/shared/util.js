export const getRandomInt = (start, end) => {
  return start + Math.floor(Math.random() * (end - start))
}
export const getRandomFloat = (start, end, fixed = 2) => {
  return (start + Math.random() * (end - start)).toFixed(fixed)
}
