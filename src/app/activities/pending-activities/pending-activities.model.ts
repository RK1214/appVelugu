export class PendingActivities {
  public id: number;
  public name: string;
  public action: string;
  public description: string;
  public amount: number;
  constructor (id: number,name:string, action: string, description: string, amount: number ){
    this.id=id;
    this.name = name;
    this.action = action;
    this.description = description;
    this.amount = amount;
  }
}
