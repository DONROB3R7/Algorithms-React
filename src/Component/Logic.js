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

    switch (type) {
      case "fizzBuzz":
        fizzBuzz();
        break;
      case "harmlessRansom":
        harmlessRansom("rex cel nemilos", "rex cel rau nemilos");
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
