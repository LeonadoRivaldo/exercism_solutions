export const enum Category {
  ONES,
  TWOS,
  THREES,
  FOURS,
  FIVES,
  SIXES,
  FULL_HOUSE,
  FOUR_OF_A_KIND,
  LITTLE_STRAIGHT,
  BIG_STRAIGHT,
  CHOICE,
  YACHT,
}

function findAtLeastNDiceEqualTo(dice: number[], comparator: number, TotalToFind: number){
  return dice.filter(die => die === comparator).length === TotalToFind;
}

function allDiceEqualTo(dice: number[], comparator: number){
  return dice.every((die) => die == comparator);
}

function sumDice(dice: number[], comparator: number | string){
  if(comparator === 'all'){
    return dice.reduce((acc, value) => acc += value, 0);
  }

  return dice.reduce((acc, value) => {
    if(value === comparator){
      return acc += value;
    }

    return acc;
  }, 0);
}

function isStraight(dice: number[], type: Category.BIG_STRAIGHT | Category.LITTLE_STRAIGHT){
  const sorted = [...dice].sort();
  const starting = type === Category.BIG_STRAIGHT ? 2 : 1;
  return sorted.every((value, index) => value === starting + index);
}

function fourOfAKind(dice:number[]){
  const sorted = [...dice].sort();
  const selected = sorted.reduce((acc, die) => {
    const totalEqual = sorted.filter(_d => die === _d).length;
    if( totalEqual >= 4 ){
      acc = die;
    }
    return acc;
  }, 0);
  return selected * 4;
}

function fullHouse(dice: number[]){
  const sorted = [...dice].sort();
  const twoEqual = sorted.reduce((acc, die) => {
    const totalEqual = sorted.filter(_d => die === _d).length;
    if( totalEqual === 2 ){
      acc = die;
    }
    return acc;
  }, 0);
  const threeEqual = sorted.reduce((acc, die) => {
    const totalEqual = sorted.filter(_d => die === _d).length;
    if( totalEqual === 3 ){
      acc = die;
    }
    return acc;
  }, 0);

  if(threeEqual !== 0 && twoEqual !== 0){
    return (threeEqual * 3) + (twoEqual * 2);
  }

  return 0;
}

export const score = (dice: number[], category: Category): number => {

  if(category === Category.YACHT){
    return allDiceEqualTo(dice, dice[0]) ? 50 : 0;
  }

  if(category === Category.CHOICE){
    return sumDice(dice, 'all');
  }

  if(category === Category.ONES){
    return sumDice(dice, 1);
  }

  if(category === Category.TWOS){
    return sumDice(dice, 2);
  }

  if(category === Category.THREES){
    return sumDice(dice, 3);
  }

  if(category === Category.FOURS){
    return sumDice(dice, 4);
  }

  if(category === Category.FIVES){
    return sumDice(dice, 5);
  }

  if(category === Category.SIXES){
    return sumDice(dice, 6);
  }

  if(category === Category.LITTLE_STRAIGHT || category === Category.BIG_STRAIGHT){
    return isStraight(dice, category) ? 30 : 0;
  }

  if(category === Category.FOUR_OF_A_KIND){
    return fourOfAKind(dice);
  }

  if(category === Category.FULL_HOUSE){
    return fullHouse(dice);
  }

  return 0;
}
