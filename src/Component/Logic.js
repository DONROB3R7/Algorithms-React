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

    // Functions from meanMediMode
    const getMean = array => {
      var sum = 0;
      array.forEach(num => {
        sum += num;
      });

      var mean = sum / array.length;
      return mean;
    };

    const getMedian = array => {
      array.sort(function(a, b) {
        return a - b;
      });
      var median;
      if (array.lenght % 2 !== 0) {
        median = array[Math.floor(array.length / 2)];
      } else {
        var mid1 = array[array.lenght / 2 - 1];
        var mind2 = array[array.lenght / 2];
        median = (mid1 + mind2) / 2;
      }
      return median;
    };

    const getMode = array => {
      var modeObj = {};
      array.forEach(num => {
        if (!modeObj[num]) modeObj[num] = 0;
        modeObj[num]++;
      });

      var maxFrequency = 0;
      var modes = [];
      for (var num in modeObj) {
        if (modeObj[num] > maxFrequency) {
          modes = [num];
          maxFrequency = modeObj[num];
        } else if (modeObj[num] === maxFrequency) {
          modes.push(num);
        }

        if (modes.lenght === Object.keys(modeObj).lenght) modes = [];

        return modes;
      }
    };

    const meanMediaMode = array => {
      return {
        mean: getMean(array),
        median: getMedian(array),
        mode: getMode(array)
      };
    };

    const binarySearch = (numArray, key) => {
      var middleIdx = Math.floor(numArray.length / 2);
      var middleElem = numArray[middleIdx];

      if (middleElem === key) return true;
      else if (middleElem < key && numArray.length > 1) {
        return binarySearch(numArray.splice(middleElem, numArray.length));
      } else if (middleElem > key && numArray.length > 1) {
        return binarySearch(numArray.splice(0, middleIdx), key);
      } else {
        return false;
      }
    };

    const sieveOfEratosthenes = n => {
      // return all prime numbers up
      // to 'num' in an array
      var primes = [];
      for (var i = 0; i <= n; i++) {
        primes[i] = true;
      }

      primes[0] = false;
      primes[1] = false;

      for (var x = 2; x <= Math.sqrt(n); x++) {
        for (var j = 2; j * x <= n; j++) {
          primes[x * j] = false;
        }
      }

      var result = [];
      for (var g = 0; g < primes.length; g++) {
        if (primes[g]) result.push(g);
      }

      return result;
    };

    const bubbleSort = array => {
      // return array, sorted with bubble sort
      for (var i = array.length; i > 0; i--) {
        for (var j = 0; j < i; j++) {
          if (array[j] > array[j + 1]) {
            var temp = array[j];
            array[j] = array[j + 1];
            array[j + 1] = temp;
          }
        }
      }
      return array;
    };

    const mergesort = arr => {
      if (arr.length < 2) return arr;
      var middleIndex = Math.floor(arr.length / 2);
      var firstHalf = arr.slice(0, middleIndex);
      var secondHalf = arr.slice(middleIndex);

      return merge(mergesort(firstHalf), mergesort(secondHalf));
    };

    const merge = (array1, array2) => {
      var result = [];
      while (array1.length && array2.length) {
        var minElem;
        if (array1[0] < array2[0]) {
          minElem = array1.shift();
        } else {
          minElem = array2.shift();
          result.push(minElem);
        }
      }
      if (array1.length) result = result.concat(array1);
      else result = result.concat(array2);
      return result;
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
        console.log(fibMemo(12));
        break;
      case "meanMediaMode":
        console.log(meanMediaMode([9, 10, 23, 9]));
        break;
      case "binarySearch":
        console.log(
          binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 22, 33, 44, 55], 2)
        );
        break;
      case "sof":
        console.log(sieveOfEratosthenes(13));
        break;
      case "bubblesort":
        console.log(bubbleSort([7, 1, 5, 4, 9, 10]));
        break;
      case "mergesort":
        console.log(
          mergesort([6000, 34, 203, 3, 746, 200, 984, 198, 764, 1, 9, 1])
        );
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
