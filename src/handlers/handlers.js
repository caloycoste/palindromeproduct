export const getHighestPalindrome = (palindromes) => {
  let answers = palindromes.map(el => el.product)
  let answer = Math.max(...answers)
  let values = palindromes.find(el => el.product === answer)
  return { answer, values }
}

export const isPalindrome = (product) => {
  let isPalindrome
  if (product.toString() === product.toString().split('').reverse().join(''))
    isPalindrome = true
  else isPalindrome = false
  return isPalindrome
}