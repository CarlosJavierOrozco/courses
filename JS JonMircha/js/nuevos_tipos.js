
const set1 = new Set([1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9])
const set2 = new Set()
set2.add(1)
set2.add(1)
set2.add(2)
set2.add(2)
console.log(set1)
console.log(set2)

console.log("inicio del for of")

for (item of set1){
  console.info(item)
}

console.log("inicio del foreach")

set1.forEach(item => console.log(item))

let arr = Array.from(set1)

console.log(arr[4])

set1.delete(2)

set1.has(5) // => true

set1.clear() // limpia todo el set.