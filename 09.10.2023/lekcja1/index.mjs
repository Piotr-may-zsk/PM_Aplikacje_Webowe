import { Readable, pipeline } from "stream";
import fs from "fs";

async function* generate() {
  for (let i = 0; i < 20; i++) {
    yield (Math.floor(Math.random() * (2137 - -420)) + -420).toString() + "\n";
  }
}

const readable = Readable.from(generate());
const writable = fs.createWriteStream(`random-${Date.now()}.txt`);

//wersja 1
// readable.on("data", (chunk) => {
//   writable.write(chunk);
// });

// wersja 2
pipeline(readable, writable, (err) => {
  if (err) {
    console.log("error");
  } else {
    console.log("succeded");
  }
});
