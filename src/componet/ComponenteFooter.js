import React, { Component } from "react";
import { FaFacebookSquare } from "react-icons/fa";
import {FaGithubSquare } from "react-icons/fa";
import {FaInstagram } from "react-icons/fa";


export const Footer = () => (
	<footer className="footer mt-auto py-3 text-center">
		<p>
    
		<dif class="row p-5 bg-dark text-white">  

		  <dif class="col-xs-12 col-md-6 col-lg-3">
			<p class="h3"> Contenido </p>
			<div class="mb-2">
				<a class="text-white text-decoration-none" href="#">De todo un poquito va dirigido a los pequeños emprendedores, en el cual estan iniciando con grandes ideas y sueños . </a>
				</div>
		     </dif>

		  <dif class="col-xs-12 col-md-6 col-lg-3">
			<p class="h5"> Terminos y Condiciones  </p>
			<div class="mb-2">
				<a class="text-white text-decoration-none" href="#">Politica de privacidad 
				</a>
			</div>
			
			<a class="text-white text-decoration-none" href="#"> 100% Confiable </a>
		  </dif>

		  <dif class="col-xs-12 col-md-6 col-lg-3">
			<p class="h5 mb-3"> Contacto </p>
			<div class="mb-2">
				<a class="text-white text-decoration-none" href> <h6> Instagram  < FaInstagram /></h6></a>
			</div>
            <div class="mb-2">
				<a class="text-white text-decoration-none" href> <h6> Github < FaGithubSquare /></h6></a>
			</div>
            <div class="mb-2">
				<a class="text-white text-decoration-none" href> <h6> Facebook < FaFacebookSquare /></h6></a>
			</div>
            
		  </dif>
 
		
		 <dif class="col-xs-12 pt-5">
			<p class="text-white text-center">Colaboradores Santiago ,Angelica, Patricia y joceline .2022</p>
		 </dif>
       
         </dif> 

		
		</p>
	</footer>
);