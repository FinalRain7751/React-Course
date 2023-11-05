import React, { useContext, useRef, useState } from "react";
import { Project } from "../../models/project";
import { ProjectContext } from "../../store/project-context";
import Button from "../UI/Button";
import Input, { InputTextarea } from "../UI/Input";

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
      const newProject = new Project({
        id: new Date().toISOString(),
        title,
        description,
        dueDate: new Date(dueDate),
        tasks: [],
      });

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
      <form onSubmit={submitHandler} className="new-project">
        <div className="form-actions">
          <Button onClick={cancelSubmitHandler}>Cancel</Button>
          <Button type="submit">Save</Button>
        </div>
        <div className="project-form">
          <div>
            <label htmlFor="projectTitle">Title</label>
            <Input
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
            <InputTextarea
              type="textarea"
              rows="5"
              id="projectDescription"
              name="projectDescription"
              required
              ref={descriptionInputRef}
              onChange={descInputChangeHandler}
            />
          </div>
          <div>
            <label htmlFor="projectDueDate">Due Date</label>
            <Input
              type="date"
              id="projectDueDate"
              name="projectDueDate"
              required
              ref={dueDateInputRef}
              onChange={dueDateInputChangeHandler}
            />
          </div>
        </div>
      </form>
    </>
  );
};

export default NewProject;
