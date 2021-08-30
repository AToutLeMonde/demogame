import { getRandom } from ".";

const noses = ['nose1.png',
  'nose2.png',
  'nose3.png',
  'nose4.png',
  'nose5.png',
  'nose6.png',
  'nose7.png'];

const mouths = [
  'mouth1.png',
  'mouth2.png',
  'mouth3.png',
  'mouth4.png',
  'mouth5.png',
  'mouth6.png',
  'mouth7.png'
];

const eyes = [
  'eye1.png',
  'eye2.png',
  'eye3.png',
  'eye4.png',
  'eye5.png',
  'eye6.png',
  'eye7.png'
];

const eyebrows = [
  'eb1.png',
  'eb2.png',
  'eb3.png',
  'eb4.png',
  'eb5.png',
  'eb6.png',
  'eb7.png'
];

const professions = ['архитектор', 'безработный', 'бухгалтер', 'водитель', 'военный', 'врач', 'генеральный директор', 'главврач', 'дворник', 'дизайнер', 'инженер', 'кассир', 'копирайтер', 'маркетолог', 'медбрат', 'менеджер', 'научный сотрудник', 'охранник', 'пекарь', 'предприниматель', 'преподаватель', 'программист', 'ректор', 'риэлтор', 'сварщик', 'сотрудник МВД', 'строитель', 'студент', 'торговый представитель', 'фрилансер', 'юрист']

export const generateAvatar = () => {

  const avatar = {
    eyebrowsIndex: getRandom(0, eyebrows.length-1),
    eyesIndex: getRandom(0, eyes.length-1),
    noseIndex: getRandom(0, noses.length-1),
    mouthIndex: getRandom(0, mouths.length-1),
  };

  let salary = getRandom(11000, 300000);
  let amount = getRandom(1, 11) <= 4  ? (salary * 18 ) : salary * getRandom(6, 9);
  let profit = salary * 10 > amount ? amount * -0.01 : amount * 0.01;

  //console.log(profit)

  return {
    eyebrows: eyebrows[avatar.eyebrowsIndex],
    eyes: eyes[avatar.eyesIndex],
    nose: noses[avatar.noseIndex],
    mouth: mouths[avatar.mouthIndex],
    avatar: `${avatar.eyebrowsIndex}-${avatar.eyesIndex}-${avatar.noseIndex}-${avatar.mouthIndex}`,
    profession: professions[getRandom(0, 30)],
    salary,
    amount,
    profit

  }
}

export const parseAvatar = (avatar) => {
  const parts = avatar.split('-');

  return {
    eyebrows: eyebrows[parseInt(parts[0])],
    eyes: eyes[parseInt(parts[1])],
    nose: noses[parseInt(parts[2])],
    mouth: mouths[parseInt(parts[3])],
  }

}

export const rectanglesIntersect = ( 
  minAx:number, minAy:number, maxAx:number, maxAy:number,
  minBx:number, minBy:number, maxBx:number, maxBy:number ) => {
  const aLeftOfB = maxAx < minBx;
  const aRightOfB = minAx > maxBx;
  const aAboveB = minAy > maxBy;
  const aBelowB = maxAy < minBy;

  return !( aLeftOfB || aRightOfB || aAboveB || aBelowB );
}
