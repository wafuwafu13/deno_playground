const obj = { a: 1, b: [2] };
const res = Deno.inspect(
  obj,
  {
    compact: true,
  }
)

console.log(res);
