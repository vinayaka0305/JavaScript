function generateOrder() {
  let count = 0;
  function fun() {
    count++;
    return `total order = ${count}`;
  }
  return fun;
}
const res = generateOrder();
console.log(res())
console.log(res())
console.log(res())


