import React, { useState, useEffect } from "react";
import axios from "axios";

const Persons = () => {
  const [persons, setPersons] = useState();

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      const persons = res.data;
      setPersons(persons);
    });
  }, []);

  return (
    <div>
      <h2> Person Generated List: </h2>
      {persons &&
        persons.map((person) => {
          const { id, name, email } = person;
          return (
            <div key={id}>
              <h2>UserName: {name}</h2>
              <h3>Email: {email}</h3>
              <h4>UserID: {id}</h4>
            </div>
          );
        })}
    </div>
  );
};

export default Persons;
