const numberNames = {
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
  10: "ten",
  11: "eleven",
  12: "twelve",
  13: "thirteen",
  14: "fourteen",
  15: "fifteen",
  16: "sixteen",
  17: "seventeen",
  18: "eighteen",
  19: "nineteen",
  20: "twenty",
  30: "thirty",
  40: "fourty",
  50: "fifty",
  60: "sixty",
  70: "seventy",
  80: "eighty",
  90: "ninety",
};

const numbertowords = (number) => {
  if (number <= 20) {
    return numberNames[number];
  }
  if (number < 100) {
    const tens = Math.floor(number / 10);
    const ones = number % 10;
    return `${numberNames[tens * 10]}${
      ones > 0 ? "-" + numberNames[ones] : ""
    }`;
  }
  if (number < 1000) {
    const hundreds = Math.floor(number / 100);
    const tens = number % 100;
    return `${numberNames[hundreds]} hundred ${tens > 0 ? "and" : " "} ${
      numbertowords(tens) ? numbertowords(tens) : ""
    }`;
  }
  if (number < 1000000) {
    const thousands = Math.floor(number / 1000);
    const hundreds = number % 1000;

    return `${numbertowords(thousands)} thousand${
      hundreds > 0 ? (hundreds > 99 ? "," : " and") : ""
    } ${hundreds > 0 ? numbertowords(hundreds) : ""}`;
  }
  if (number == 1000000) {
    const millions = Math.floor(number / 1000000);
    const thousands = number % 1000000;
    return `${numbertowords(millions)} million `;
  }
};

const start = 1;
const end = 1000000;
if (process.argv.length == 2) {
  const start = 1;
  const end = 1000000;
  for (let i = start; i < end + 1; i++) {
    console.log(numbertowords(i));
  }
}
if (process.argv.length == 3) {
  console.log(
    "Usage node numbertowords.js <start> <end> or node numbertowords.js"
  );
}

if (process.argv.length == 4) {
  const start = parseInt(process.argv[2]);
  const end = parseInt(process.argv[3]);
  for (let i = start; i < end + 1; i++) {
    console.log(numbertowords(i));
  }
}
