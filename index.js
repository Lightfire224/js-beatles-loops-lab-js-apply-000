// add solution here

array = []

function theBeatlesPlay(musicians, instruments){
  let array = []
  for (let i=0; i<musicians.length; i++){
    array.push(musicians[i] + " plays " + instruments[i])
  }
  return array
}


function johnLennonFacts(facts){
  
}

2. Create a function `johnLennonFacts`. 

    * This function will accept one argument, an array of facts about John
      Lennon (note that it might not be exactly the following facts):

    ```js
    const facts = [
      "He was the last Beatle to learn to drive",
      "He was never a vegetarian",
      "He was a choir boy and boy scout",
      "He hated the sound of his own voice"
    ];
    ```

    * Use a while loop to loop over the facts array and add `"!!!"` to the end of
    every fact.

    * Return an array of strings with exclamation points.