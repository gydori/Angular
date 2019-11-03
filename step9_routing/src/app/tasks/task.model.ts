export class Task {
  public name: string;
  public state: number;
  public description: string;
  public id: number;

  constructor(name: string, state: number, description: string, id: number) {
    this.name = name;
    this.state = state;
    this.description = description;
    this.id = id;
  }
}
