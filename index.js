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
  let i=0
  while(i<facts.length){
    console.log(facts[i] + "!!!");
    i++
  }
}
