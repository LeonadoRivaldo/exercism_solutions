const botNames: string[] = [];
const letters = 'ABCDEFGHIJKLMNOPQRSTUVXWYZ';
const numbers = '0123456789';

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

export class Robot {
  private _name!: string;
  
  constructor() {}

  public get name(): string {
    if(!this._name){
      this._name = Robot.generateName();
    }
    return this._name;
  }

  public resetName(): void {
    const index = botNames.indexOf(this.name);
    botNames.splice(index, 0);
    this._name = Robot.generateName();
  }

  public static releaseNames(): void {
  }


  private static generateName(){
        let name = '';
        while (!name) {
          const letter1 = letters.at(getRandomInt(letters.length));
          const letter2 = letters.at(getRandomInt(letters.length));
          const number1 = numbers.at(getRandomInt(numbers.length));
          const number2 = numbers.at(getRandomInt(numbers.length));
          const number3 = numbers.at(getRandomInt(numbers.length));
    
          const tempName = `${letter1}${letter2}${number1}${number2}${number3}`;
    
          if(!botNames.includes(tempName)){
            name = tempName;
            botNames.push(name);
          }
        }
      return name;
  }
}
