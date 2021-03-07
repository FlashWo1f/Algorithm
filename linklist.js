let data = Array(10)
let next = Array(10)

function add(index, p, val) {
  next[p] = next[index]
  next[index] = p
  data[p] = val
  return
}

function main() {
  let head = 3
  // head
  data[3] = 0
  add(3, 5, 1)
  add(5, 2, 2)
  add(2, 7, 3)
  add(7, 9, 100)
  add(5, 1, 111)
  let p = head
  while(p) {
    console.log(`${data[p]}->`)
    p = next[p]
  }
}
main()