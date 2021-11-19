import { copy } from "https://deno.land/std@0.111.0/streams/conversion.ts";

const source = await Deno.open("copy/hoge.js");
const destination = await Deno.create("copy/fuga.js");
const bytesCopied2 = await copy(source, destination);

