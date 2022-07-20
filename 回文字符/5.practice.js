const longest = (str) => {
  let res = ''
  for (let i = 0; i < str.length; i++) {
    const l1 = find(str, i, i)
    const l2 = find(str, i, i + 1)
    if (l1.length > res.length) res = l1
    if (l2.length > res.length) res = l2
  }

  return res
}

const find = (str, left, right) => {
  while (left >= 0 && right < str.length && str[left] === str[right]) {
    left--
    right++
  }
  return str.slice(left + 1, right)
}

// console.log(find('zxccxzc', 2, 3))
console.log(longest('babad'))