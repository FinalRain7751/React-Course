export class Task {
  id: string;
  projectId: string;
  text: string;

  constructor(projectId: string, text: string) {
    this.id = new Date().toISOString();
    this.projectId = projectId;
    this.text = text;
  }
}

export class Project {
  id: string;
  title: string;
  description: string;
  dueDate: Date;
  tasks: Task[];

  constructor(project: Project) {
    this.id = project.id;
    this.title = project.title;
    this.description = project.description;
    this.dueDate = project.dueDate;
    this.tasks = project.tasks;
  }
}

// export const projects: Project[] = [
//   new Project("p1", "React", "React project", "12-12-2023", [
//     { id: "t1", text: "Learn props" },
//   ]),
// ];
