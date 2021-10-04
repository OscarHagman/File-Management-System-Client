import React, { Component } from "react";
import { HomeView } from "./view/HomeView";
import { Routing } from "./route/Routing";
import { NavigationBar } from './component/navigationbar/NavigationBar'



function App() {
  return (
      <Routing>
        <NavigationBar/>
      </Routing>
  );
}

export default App;