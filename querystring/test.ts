import { parse } from "https://deno.land/std@0.115.1/node/querystring.ts";
import { assertEquals } from "https://deno.land/std@0.115.1/testing/asserts.ts";

Deno.test({
  name: "parse",
  fn() {
    assertEquals(parse("a=hello&b=5&c=true&d=foo&d=bar"), {
      a: "hello",
      b: "5",
      c: "true",
      d: ["foo", "bar"],
    });
  },
});
