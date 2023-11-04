import React, { useContext, useRef, useState } from "react";
import { Project } from "../../models/project";
import { ProjectContext } from "../../store/project-context";

const NewProject: React.FC = () => {
  const projectCtx = useContext(ProjectContext);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");

  const titleIsValid = title.trim().length !== 0;
  const descriptionIsValid = description.trim().length !== 0;
  const dueDateIsValid = dueDate.trim().length !== 0;

  const titleInputRef = useRef<HTMLInputElement>(null);
  const descriptionInputRef = useRef<HTMLInputElement>(null);
  const dueDateInputRef = useRef<HTMLInputElement>(null);

  const titleInputChangeHandler = () => {
    setTitle(titleInputRef.current!.value);
  };
  const descInputChangeHandler = () => {
    setDescription(descriptionInputRef.current!.value);
  };
  const dueDateInputChangeHandler = () => {
    setDueDate(dueDateInputRef.current!.value);
  };

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    if (titleIsValid && descriptionIsValid && dueDateIsValid) {
      const newProject = new Project(
        new Date().toISOString(),
        title,
        description,
        dueDate,
        []
      );

      projectCtx.addProject(newProject);

      titleInputRef.current!.value = "";
      descriptionInputRef.current!.value = "";
      dueDateInputRef.current!.value = "";
    }
  };

  const cancelSubmitHandler = () => {
    titleInputRef.current!.value = "";
    descriptionInputRef.current!.value = "";
    dueDateInputRef.current!.value = "";
  };

  return (
    <>
      <h3>New Project</h3>
      <form onSubmit={submitHandler}>
        <div>
          <button onClick={cancelSubmitHandler}>Cancel</button>
          <button type="submit">Save</button>
        </div>
        <div>
          <label htmlFor="projectTitle">Title</label>
          <input
            type="text"
            id="projectTitle"
            name="projectTitle"
            required
            ref={titleInputRef}
            onChange={titleInputChangeHandler}
          />
        </div>
        <div>
          <label htmlFor="projectDescription">Description</label>
          <input
            type="text"
            id="projectDescription"
            name="projectDescription"
            required
            ref={descriptionInputRef}
            onChange={descInputChangeHandler}
          />
        </div>
        <div>
          <label htmlFor="projectDueDate">Due Date</label>
          <input
            type="date"
            id="projectDueDate"
            name="projectDueDate"
            required
            ref={dueDateInputRef}
            onChange={dueDateInputChangeHandler}
          />
        </div>
      </form>
    </>
  );
};

export default NewProject;
