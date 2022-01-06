export class Todo {
  public id: number;
  public task: string;
  public completed: boolean;

  constructor(task:string) {
    this.task = task;
    this.id = Math.random()
    this.completed = true;
  }
}

