/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/

function handValue (hand) {
  for (var i = 0; i < hand.length; i++) {
    if (hand[i] == 'J' || hand[i] == 'Q' || hand[i] == 'K') {
      hand[i] = 10;
    } else if (hand[i] == 'A') {
      hand[i] = 11;
    } else {
      hand[i] = parseInt(hand[i]);
    }
     console.log(hand[i]);
  }

  function sumOfCards (array) {
    let sum = 0;
    for (var i = 0; i < array.length; i++) {
     sum = sum + array[i];
    }
    return sum;
  }

  let handSum = 0;
  for (var i = 0; i < hand.length; i++) {
    handSum = sumOfCards(hand);
    if (handSum > 21 && hand[i] == 11) {
      hand[i] = 1;
    }
  }
handSum = sumOfCards(hand);
return handSum;
}



/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
