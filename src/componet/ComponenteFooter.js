import React, { Component } from "react";
import { FaFacebookSquare } from "react-icons/fa";
import {FaGithubSquare } from "react-icons/fa";
import {FaInstagram } from "react-icons/fa";


export const Footer = () => (
	<footer className="footer mt-auto py-3 text-center">
		<p>
        <h6> Facebook < FaFacebookSquare /></h6>
        <h6> Instagram  < FaInstagram /></h6>
        <h6> Github < FaGithubSquare /></h6>

			Made with <i className="" /> by{" "}
			<a href="">De todo un poquito!!</a>

            
		</p>
	</footer>
);