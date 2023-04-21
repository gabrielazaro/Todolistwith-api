import React, { useState, useEffect } from "react";

//create your first component
const Home = () => {
  const [input, setInput] = useState("");
  const [tareas, setTareas] = useState([]);
  const getAllTareas = () => {
    fetch("https://assets.breatheco.de/apis/fake/todos/user/gabrielazaro")
      .then((response) => response.json())
      .then((data) => {
        setTareas(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
  useEffect(() => {
    getAllTareas();
  }, []);

  const agregarTarea = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    let agregar = tareas.concat({
      label: input,
      done: false,
    });

    var requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: JSON.stringify(agregar),
      redirect: "follow",
    };

    fetch(
      "https://assets.breatheco.de/apis/fake/todos/user/gabrielazaro",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => getAllTareas(result))
      .catch((error) => console.log("error", error));
  setInput("")};

  const borrarTarea = (t) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    let borrar = tareas.filter((tar) => tar !== t);
// Puedes utilizar el index o el elemento. tar/ t es el li de abajo 
    var requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: JSON.stringify(borrar),
      redirect: "follow",
    };

    fetch(
      "https://assets.breatheco.de/apis/fake/todos/user/gabrielazaro",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => getAllTareas(result))
      .catch((error) => console.log("error", error));
  };

  // Hay que traer nuevamente la bbdd al front para poder mostrar la informacion que hemos agregado en el put
  return (
    <div className="container-fluid">
      <h1>TO DO'S</h1>
      <input
        type="text"
        placeholder="What needs to be done?"
        value={input}
        onChange={(e) => {setInput(e.target.value)}}
      />
      {/* El input siempre es lo mismo en cuanto a variable de estado y cambio de variable con onchange */}
      <button className="bg-light" onClick={agregarTarea}>
        Add
      </button>
      <ul>
        {tareas.map((t, index) => (
          <li key={index}>{t.label} <button onClick={() => borrarTarea(t)}>Eliminar</button></li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
