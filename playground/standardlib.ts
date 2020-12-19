export {};
// import { v4 } from "https://deno.land/std@0.81.0/uuid/mod.ts";

// const uid = v4.generate();
// console.log(uid);

// import { serve } from "https://deno.land/std@0.81.0/http/server.ts";
// const server = serve({ port: 3000 });
// console.log(`listening for requests on port 3000`);

// for await (const req of server) {
//   console.log("request made");
//   const url = req.url;
//   req.respond({
//     body: `hello bros, you aadad ${url}`,
//   });
// }

import {
  camelCase,
  paramCase,
  pascalCase,
  snakeCase,
} from "https://deno.land/x/case/mod.ts";

const text = "hello from the other side";

const camel = camelCase(text);
const param = paramCase(text);
const pascal = pascalCase(text);
const snake = snakeCase(text);

console.log(camel, param, pascal, snake);
