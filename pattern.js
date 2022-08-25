let num = 1;
for (let i = 1; i <= 4; i++) {
  for (let j = 1; j <= i; j++) {
    document.write(`${num}      `);
    num++;
  }
  document.write("<br/><br/>");
}
