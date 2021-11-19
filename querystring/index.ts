import { parse } from "https://deno.land/std@0.115.1/node/querystring.ts"

const res = parse("a=hello&b=5&c=true&d=foo&d=bar");
console.log(res);
