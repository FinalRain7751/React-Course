import React, { useEffect, useState } from "react";
import { Project, Task } from "../models/project";

type ProjectContextObject = {
  isActive: string;
  isNewProject: boolean;
  projects: Project[];
  addProject: (project: Project) => void;
  removeProject: (id: string) => void;
  updateProject: (project: Project) => void;
  addTask: (projectId: string, text: string) => void;
  removeTask: (projectId: string, id: string) => void;
  activeProjectHandler: (id: string) => void;
  newProjectHandler: () => void;
};

export const ProjectContext = React.createContext<ProjectContextObject>({
  isActive: "",
  isNewProject: true,
  projects: [],
  addProject: (project: Project) => {},
  removeProject: (id: string) => {},
  updateProject: (project: Project) => {},
  addTask: (projectId: string, text: string) => {},
  removeTask: (projectId: string, id: string) => {},
  activeProjectHandler: (id: string) => {},
  newProjectHandler: () => {},
});

const url: string =
  "https://project-manager-app-49623-default-rtdb.asia-southeast1.firebasedatabase.app/projects2.json";

let isInitial = true;

export const ProjectContextProvider: React.FC = (props) => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isActive, setIsActive] = useState("");
  const [isNewProject, setIsNewProject] = useState(true);

  useEffect(() => {
    const getHttp: (url: string) => void = async (url: string) => {
      const response = await fetch(url);

      if (!response.ok) {
        console.log("Could not fetch data.");
        return;
      }

      const resData = await response.json();
      const projects: Project[] = resData?.data ?? [];

      if (projects.length !== 0) {
        setIsNewProject(false);
        setIsActive(projects[0].id);
      }

      setProjects(projects);
    };

    console.log("Data fetched");
    getHttp(url);
  }, []);

  useEffect(() => {
    const sendHttp: (url: string, data: Project[]) => void = async (
      url,
      projects
    ) => {
      const response = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          data: projects,
        }),
      });

      if (response.ok) console.log("Projects updated");
    };

    if (isInitial) {
      isInitial = false;
    } else {
      sendHttp(url, projects);

      if (projects.length === 0) {
        setIsNewProject(true);
      } else if (projects.length === 1) {
        setIsActive(projects[0].id);
      }
    }
  }, [projects]);

  const activeProjectHandler = (id: string) => {
    setIsActive(id);
    setIsNewProject(false);
  };

  const newProjectHandler = () => {
    setIsNewProject(true);
    setIsActive("");
  };

  const addProjectHandler = (project: Project) => {
    setProjects((prev) => {
      return [...prev, project];
    });
    setIsNewProject(false);
    setIsActive(project.id);
  };

  const removeProjectHandler = (id: string) => {
    setProjects((prev) => {
      const updatedProjects = prev.filter((project) => project.id !== id);
      return updatedProjects;
    });
  };

  const updateProjectHandler = (project: Project) => {
    setProjects((prev) => {
      const indexOfProjectToUpdate = prev.findIndex(
        (proj) => project.id === proj.id
      );

      const updatedProjects = [...prev];
      updatedProjects[indexOfProjectToUpdate] = project;

      return updatedProjects;
    });
  };

  const addTaskHandler = (projectId: string, text: string) => {
    const newTask = new Task(projectId, text);
    const project = projects.find((item) => item.id === projectId);

    if (project) {
      const updatedProject = {
        ...project,
        tasks: [...project!.tasks, newTask],
      };
      updateProjectHandler(new Project(updatedProject));
    }
  };

  const removeTaskHandler = (projectId: string, id: string) => {
    const project = projects.find((item) => item.id === projectId);

    if (!project) return;

    const updatedTasks = project.tasks.filter((task) => task.id !== id);

    const updatedProject = {
      ...project,
      tasks: updatedTasks,
    };

    updateProjectHandler(new Project(updatedProject));
  };

  const projectContextValue: ProjectContextObject = {
    isActive,
    isNewProject,
    projects,
    addProject: addProjectHandler,
    removeProject: removeProjectHandler,
    updateProject: updateProjectHandler,
    addTask: addTaskHandler,
    removeTask: removeTaskHandler,
    activeProjectHandler: activeProjectHandler,
    newProjectHandler: newProjectHandler,
  };

  return (
    <ProjectContext.Provider value={projectContextValue}>
      {props.children}
    </ProjectContext.Provider>
  );
};
