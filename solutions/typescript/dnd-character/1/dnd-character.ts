const diceFaces = 6;
const numberOfDices = 4;

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}



export class DnDCharacter {
  baseAbilities: number[] = [];
  hitpoints: number = 10;

  constructor(
    public strength = DnDCharacter.generateAbilityScore(),
    public dexterity = DnDCharacter.generateAbilityScore(),
    public constitution = DnDCharacter.generateAbilityScore(),
    public intelligence = DnDCharacter.generateAbilityScore(),
    public wisdom = DnDCharacter.generateAbilityScore(),
    public charisma = DnDCharacter.generateAbilityScore(),
  ) {
    this.hitpoints += DnDCharacter.getModifierFor(this.constitution);
  }

  public static generateAbilityScore(): number {
    const rolls = [];
    for (let index = 0; index < numberOfDices; index++) {
      rolls.push(getRandomInt(diceFaces))
    }

    rolls.sort();
    const a = rolls.pop() ?? 0;
    const b = rolls.pop() ?? 0;
    const c = rolls.pop() ?? 0;
    const rollTotal = a + b + c;
    return rollTotal;
  }

  public static getModifierFor(abilityValue: number): number {
    return Math.floor(((abilityValue - 10) / 2));
  }
}
