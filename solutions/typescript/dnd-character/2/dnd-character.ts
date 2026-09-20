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
    const rolls = [
      DnDCharacter.rolld6(),
      DnDCharacter.rolld6(),
      DnDCharacter.rolld6(),
      DnDCharacter.rolld6()
    ];
    const total = rolls.sort().slice(0, 3).reduce((n, sum) => sum + n);
    return total < 3 ? 3 : total;
  }

  public static getModifierFor(abilityValue: number): number {
    return Math.floor(((abilityValue - 10) / 2));
  }

  private static rolld6(){
    return getRandomInt(6);
  }
}
