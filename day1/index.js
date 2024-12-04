import fs from "fs";

fs.readFile("numbers.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }

  const dataLines = data.split("\n");
  const firstLine = dataLines[0];
  const [batch1, batch2] = firstLine.split(/\s{2,}/);
  const leftArray = batch1.split("").sort((a, b) => a - b);
  const rightArray = batch2.split("").sort((a, b) => a - b);
  //TODO: Compare each digit in the arrays after sorting to discover the differences between them and keeping track of the difference total.
});
