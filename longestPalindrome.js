const longestPalindrome = (str) => {
  if (!str || str.length > 1000) return ""
  let result = ''
  let longestLength = 0
  for (let index = 0; index < str.length; index++) {
    let even = expandFromCenter(str, index, index)
    let odd = expandFromCenter(str, index, index + 1)

    let value = even.length > odd.length ? even : odd
    if(value.length > longestLength) {
      longestLength = value.length
      result = value;
    }
  }
  console.log(result)
  return result
}

const expandFromCenter = (str, left, right) => {
  while(left >= 0 && right < str.length && str[left] === str[right]) {
    left--
    right++
  }
  return str.slice(left + 1,right)
}

longestPalindrome("cbbd")