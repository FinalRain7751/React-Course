import React from "react";

import "./App.css";

import Sidebar from "./components/Sidebar";
import Main from "./components/main";
import { ProjectContextProvider } from "./store/project-context";

const App: React.FC = () => {
  return (
    <ProjectContextProvider>
      <Sidebar />
      <Main />
    </ProjectContextProvider>
  );
};

export default App;
