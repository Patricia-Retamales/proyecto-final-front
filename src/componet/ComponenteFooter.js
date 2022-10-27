import React, { Component } from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


function Footer() {
	return (
		<footer className="footer mt-auto py-3 text-center"  style={{ displey :"flex", justifyContent: "flex-end"}}>



			<div className="row p-5 bg- text-white" style={{ background: "#888a8a", border: "##9b9b9b 5px solid" , }}>

				<div className=" col-lg-4">
					<p className="h3"> Contenido  </p>
					<div className="mb-2">
						<a className="text-white text-decoration-none" href="#">De todo un poquito va dirigido a los
							pequeños emprendedores, en el cual estan iniciando con grandes ideas y sueños . </a>
					</div>
				</div>

				<div className=" col-lg-4">
					<p className="h5"> Terminos y Condiciones  </p>
					<div className="mb-2">
						<a className="text-white text-decoration-none" href="#">Politica de privacidad
						</a>
					</div>

					<a className="text-white text-decoration-none" href="#"> 100% Confiable </a>
				</div>

				<div className=" col-lg-4">
					<p className="h5 mb-3"> Contacto </p>
					<div className="mb-2">
						<a className="text-white text-decoration-none" href> <h6> Instagram  < FaInstagram /></h6></a>
					</div>
					<div className="mb-2">
						<a className="text-white text-decoration-none" href> <h6> Github < FaGithubSquare /></h6></a>
					</div>
					<div className="mb-2">
						<a className="text-white text-decoration-none-right" href> <h6> Facebook < FaFacebookSquare /></h6></a>
					</div>

				</div>


				<div className="col-xs-12 pt-5">
					<p className="text-white text-center">Colaboradores Santiago, Angelica, Patricia y Joceline * 2022</p>
				</div>

			</div>




		</footer>

	);
}
export default Footer;




