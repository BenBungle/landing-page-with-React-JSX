import React from "react";

function Card() {
  return (
    <div className="card-img-top" alt="..." style={{width: "18rem"}}>
      <img
        src="https://img.freepik.com/vector-gratis/bandera-dia-internacional-contra-uso-indebido-trafico-ilicito-drogas_23-2149414239.jpg?size=626&ext=jpg&ga=GA1.2.444628794.1678494005&semt=popular"
        className="card-img-top" style={{objectFit: "contain",  width:"100%", height:"40vh"}}
        alt="..."
      ></img>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          some quick example text to build on the card title and make up the
          bulk
        </p>
        <a href="#" className="btn btn-primary">
          go somewhere
        </a>
      </div>
    </div>
  );
}
export default Card;
//los mandamientos de react
//1- toda etiqueta que se abre, se debe cerrar
//2- toda etiqueta de srtyle en line se comporta como si fuera n objeto en JS
// style = "width: 18rem;"
// al Style = {   } indica que usaremos js dentro del html
// b.) style = { {} } indica que usaremos un objeto en js
// c.) style = {{width: "18rem"}}
//3- crear estilos
// let estilos {width: 18rem }
//la palabra class ya existe, con propositos diferentes... HTML y JS
//toda Class de html se va a transformar a className!!
//
