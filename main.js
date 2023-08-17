const button = document.querySelector("button");
button.addEventListener("click", () => {
  console.log("Helloworld");
});
//1
let array = ["Mango", "Poly", "Ajax"];
const logIteams = (array) => {
  for (const key in array) {
    let iterator = array[key];
    console.log(`${+key + 1}-${iterator}`);
  }
};
//4
logIteams(array);
function findLongestWord(string) {
  const words = string.split(" ");
  let longestWord = "";

  for (const word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }

  return longestWord;
}

function formatString(string) {
  if (string.length <= 40) {
    return string;
  } else {
    return string.slice(0, 40) + "...";
  }
}
const inputString =
  "jgkjk,jhczjkhzchjcxjkczxbxzzxjkhjzcxhjzcxhjczxhjcxhzjhjczhkzcxhjczxhjkzhcxhczxczxk";
const longestWord = findLongestWord(inputString);
const formattedString = formatString(inputString);

console.log(longestWord);
console.log(formattedString);

//2
const calculateEngravingPrice = function (message, pricePerWord) {
  return message.split(" ").length * pricePerWord;
};

console.log(calculateEngravingPrice("Hello how are you?", 250));
//6
let input;
const numbers = [];
let sum = 0;

do {
  input = prompt();

  if (input === "" || isNaN(input)) {
    alert("It is not number try one more time");
  }

  numbers.push(+input);
} while (input !== null);

for (const value of numbers) {
  sum = sum + value;
}

alert(`Sum equals ${sum}`);
console.log(numbers);
`Sum equals ${sum}`;
//5
function checkForSpam(message) {
  const lowerCaseMessage = message.toLowerCase();
  return lowerCaseMessage.includes("spam") || lowerCaseMessage.includes("sale");
}
message1 = " hi it is spam";
message2 = " hi i am Sofiia";
console.log(checkForSpam(message1));
console.log(checkForSpam(message2));
function findLongestWorld(string) {
  const words = string.split(" ");
  let longestWord = "";

  for (const word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }

  return longestWord;
}
const inptString = "mbkjhkjgkjgkgij klkll";
const lngstWord = findLongestWord(inptString);
console.log(longestWord);
