//import React from "react";

//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
//const Home = () => {
//return (
//<div className="text-center">
//<h1 className="text-center mt-5">Hello Rigo!</h1>
//<p>
//	<img src={rigoImage} />
//</p>
//		<a href="#" className="btn btn-success">
//			If you see this green button... bootstrap is working...
//		</a>
//		<p>
//			Made by{" "}
//			<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
//			love!
//		</p>
//	</div>
//	);
//};

import React from "react";
import Card from "./card.jsx";
import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbojumbotron.jsx";
//todo es componente
//un componente es una funcion XD pero  que inicia con Mayuscula
//los componentes se llaman como si fueran una etiqueta HTML
//las fnciones normales las llamamos, return any, y se llaman X()
//si creamos un componente tiene que tener MAYUSCULA!!!
//import nombre funcion from "./component/home.jsx";
function Cimiento() {
  return (
    <div>
      <Navbar />
		<Jumbotron/>	
      <Card />
    </div>
  );
}

export default Cimiento;

//se diferencian los  componentes  y las funciones, es que la primera son funciones que retornan HTML
//funciones tienen que ser exportadas para poder utilizadas por otros archivos
//antes module.export, ahora export default "nombre componente"
