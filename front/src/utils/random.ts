import random from '@aspiesoft/random-number-js';


export const getRandom = (min:number, max:number) => {    
  return random(min, max);
}

export const getRandomClassic = (min:number, max:number) => {  
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}