import React from "react";

//Componet wicth render logic for Algorithms

const Logic = props => {
  const mainLogic = type => {
    const fizzBuzz = () => {
      // Numbers need to be  divisible with 3 => Fizz
      // Numbers need to be  divisible with 5 => Buzz
      // Numbers need to be  divisible with 3 and 5 => FizzBuzz
      // set first rule
      const ruleFirst = 3;
      // set second  rule
      const ruleSecond = 5;
      for (let i = 1; i <= 100; i++) {
        i % ruleFirst === 0 && i % ruleSecond === 0
          ? console.log("%cFizz Buzz", "background: #ff0000; color: #fff")
          : i % ruleFirst === 0
          ? console.log("%cFizz", "background: #1414F5; color: #fff")
          : i % ruleSecond === 0
          ? console.log("%cBuzz", "background: #00ff00; color: #fff")
          : console.log(i);
      }
    };

    // Linear Time Complexity O(n)
    const harmlessRansom = (noteText, magazineText) => {
      // A function with 2 function parameter witch
      // need to find the word form a parameter to create a note, defiden from another parameter.

      const noteArr = noteText.split(" ");
      const magazineArr = magazineText.split(" ");
      const magazineObj = {};

      magazineArr.forEach(word => {
        if (!magazineObj[word]) magazineObj[word] = 0;
        magazineObj[word]++;
      });

      var noteIsPossible = true;
      noteArr.forEach(word => {
        if (magazineObj[word]) {
          magazineObj[word]--;
          if (magazineObj[word] < 0) noteIsPossible = false;
        } else noteIsPossible = false;
      });

      return console.log(noteIsPossible);
    };

    const isPalindrome = string => {
      //A palindrome is a word, number, phrase, or other sequence of
      //characters which reads the same backward as forward, such as
      //madam or racecar

      string = string.toLowerCase();
      const charactersArr = string.split("");
      const validCharacters = "abcdefghijklmnopqrstuvwxyz".split("");

      var lettersArr = [];
      charactersArr.forEach(char => {
        if (validCharacters.indexOf(char) > -1) lettersArr.push(char);
      });

      var palindrome = true;
      if (lettersArr.join("") === lettersArr.reverse().join(""));
      else palindrome = false;

      return console.log(palindrome);
    };

    const caesarCipher = (str, num) => {
      //In cryptography, a Caesar cipher, also known as Caesar's cipher,
      //the shift cipher, Caesar's code or Caesar shift, is one of the simplest
      //and most widely known encryption techniques.
      num = num % 26;
      const lowerCaseString = str.toLowerCase();
      const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
      let newString = "";

      for (let i = 0; i < lowerCaseString.length; i++) {
        // Split the str in letter to be able to shift the letter with a new letter
        const currentLetter = lowerCaseString[i];
        if (currentLetter === " ") {
          newString += currentLetter;
          continue;
        }

        const currentIndex = alphabet.indexOf(currentLetter);
        let newIndex = currentIndex + num;
        if (newIndex > 25) newIndex = newIndex - 26;
        if (newIndex < 0) newIndex = 26 + newIndex;
        if (str[i] === str[i].toUpperCase()) {
          newString += alphabet[newIndex].toLocaleUpperCase();
        } else {
          newString += alphabet[newIndex];
        }
      }
      console.log(`Intial message: ${str}`);
      console.log(`New cipher message: ${newString}`);
    };

    const reverseWords = string => {
      const wordsArr = string.split(" ");
      const reversedWordsArr = [];

      wordsArr.forEach(word => {
        let reversedWord = "";

        for (let i = word.length - 1; i >= 0; i--) {
          reversedWord += word[i];
        }
        reversedWordsArr.push(reversedWord);
      });

      return console.log(reversedWordsArr.join(" "));
    };

    const reverseArrayInPlace = arr => {
      for (let i = 0; i < arr.length / 2; i++) {
        let tempVar = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = tempVar;
      }
      return console.log(arr);
    };

    const twoSum = (numArray, sum) => {
      // Returns ever pair of numbers from 'numArray'
      //that adds up to the 'sum'
      var pairs = [];
      var hashtable = [];
      for (var i = 0; i < numArray.length; i++) {
        var currNum = numArray[i];
        var counterpart = sum - currNum;
        if (hashtable.indexOf(counterpart) !== -1) {
          pairs.push([currNum, counterpart]);
        }
        hashtable.push(currNum);
      }
      console.log(pairs);
    };

    // don't run more than 30 it's in O(n^2).
    //will crash the browser
    const fibonacci = position => {
      if (position < 3) return 1;
      else return fibonacci(position - 1) + fibonacci(position - 2);
    };

    // Runtime: 0(n) - linear
    const fibMemo = (index, cache) => {
      cache = cache || [];
      if (cache[index]) return cache[index];
      else {
        if (index < 3) return 1;
        else {
          cache[index] = fibMemo(index - 1, cache) + fibMemo(index - 2, cache);
        }
      }
      return cache[index];
    };

    switch (type) {
      case "fizzBuzz":
        fizzBuzz();
        break;
      case "harmlessRansom":
        harmlessRansom("rex cel nemilos", "rex cel rau nemilos");
        break;
      case "palindrome":
        isPalindrome("racecar");
        break;
      case "caesarcipher":
        caesarCipher("CelNemilos", 5);
        break;
      case "reversewords":
        reverseWords("This is a reverse word");
        break;
      case "reversearray":
        reverseArrayInPlace([1, 2, 3, 4, 5]);
        break;
      case "twosum":
        twoSum([1, 6, 4, 5, 3, 3, 2, 0, 7], 7);
        break;
      case "fibonacci":
        console.log(fibonacci(12));
        break;
      case "fibmemo":
        console.log(fibMemo(5));
        break;
      default:
        console.log("Error");
    }
  };

  const content = props.show ? (
    <div>
      <h3>Logic for {`${props.name} please open the console`}</h3>
      {mainLogic(props.typeSelected)}
    </div>
  ) : null;

  return <div>{content}</div>;
};

export default Logic;
