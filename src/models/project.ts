export class Task {
  id: string;
  text: string;

  constructor(text: string) {
    this.id = new Date().toISOString();
    this.text = text;
  }
}

export class Project {
  id: string;
  title: string;
  description: string;
  dueDate: Date;
  tasks: Task[];

  constructor(
    id: string,
    title: string,
    description: string,
    dueDate: string,
    tasks: Task[]
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.dueDate = new Date(dueDate);
    this.tasks = tasks;
  }
}

// export const projects: Project[] = [
//   new Project("p1", "React", "React project", "12-12-2023", [
//     { id: "t1", text: "Learn props" },
//   ]),
// ];
