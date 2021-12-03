import { assertEquals } from "https://deno.land/std@0.115.1/testing/asserts.ts";

Deno.test({
  name: "first test",
  fn() {
    assertEquals(1, 1);
    assertEquals(2, 2);
  },
});
