import React from "react";
import Persons from "./Persons";
import "./App.css";

/* We're going to use { useState, useEffect} in order to show a Persons list generated from an API
 */

function App() {
  return (
    <div>
      <h1>Todo List</h1>
      <Persons />
    </div>
  );
}

export default App;
