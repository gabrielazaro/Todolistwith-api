import React, { useState, useEffect } from "react";

//create your first component
const Home = () => {
  const [tareas, setTareas] = useState([]);
  useEffect(() =>
  // aquí busco mis todos de la API
  fetch('https://assets.breatheco.de/apis/fake/todos/user/gabrielazaro')
	  .then(r => r.json())
	  .then(data => setTareas(data)) // aqui reseteo la variable tasks con los datos entrantes.
, []);
  return (
    <div className="container-fluid">
      <h1>TO DO'S</h1>
      <input
        type="text"
        placeholder="What needs to be done?"
      />
      <ul>
	  {tareas.map(t => <li>{t.label}</li>)}
      </ul>
    </div>
  );
};

export default Home;


// fetch('https://example.com/users', {
//   method: 'PUT', // or 'POST'
//   body: JSON.stringify(data), // los datos pueden ser una `cadena` o un {objeto} que proviene de algún lugar más arriba en nuestra aplicación
//   headers:{
//     'Content-Type': 'application/json'
//   }
// })
// .then(res => {
// 	if (!res.ok) throw Error(res.statusText);
// 	return res.json();
// })
// .then(response => console.log('Success:', response))
// .catch(error => console.error(error));
