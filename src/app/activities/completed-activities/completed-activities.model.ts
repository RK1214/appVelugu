export class CompletedActivities {
  public id: number;
  public name: string;
  public action: string;
  public description: string;
  public currentPosition : string;
  public amount: number;
  constructor (id:number, name:string, action: string, description: string, currentPosition: string, amount: number ){
    this.id = id;
    this.name = name;
    this.action = action;
    this.description = description;
    this.currentPosition = currentPosition;
    this.amount = amount;
  }
}
