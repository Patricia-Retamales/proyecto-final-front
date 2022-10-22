import React, { useState, useEffect } from "react";
import getState from "./Flux";

// Don't change, here is where we initialize our context, by default it's just going to be null.
export const Context = React.createContext(null);

// This function injects the global store to any view/component where you want to use it, we will inject the context to layout.js, you can see it here:
// https://github.com/4GeeksAcademy/react-hello-webapp/blob/master/src/js/layout.js#L35
const injectContext = PassedComponent => {
	const StoreWrapper = props => {
		//this will be passed as the contenxt value
		const [state, setState] = useState(
			getState({
				getStore: () => state.store,
				getActions: () => state.actions,
				setStore: updatedStore =>
					setState({
						store: Object.assign(state.store, updatedStore),
						actions: { ...state.actions }
					})
			})
		);

		useEffect(() => {

			let usuarios = [ ]



			/**
			 * EDIT THIS!
			 * This function is the equivalent to "window.onLoad", it only runs once on the entire application lifetime
			 * you should do your ajax requests or fetch api requests here. Do not use setState() to save data in the
			 * store, instead use actions, like this:
			 *
			 * state.actions.loadSomeData(); <---- calling this function from the flux.js actions
			 *
			 **/
		}, []);

		// The initial value for the context is not null anymore, but the current state of this component,
		// the context will now have a getStore, getActions and setStore functions available, because they were declared
		// on the state of this component
		return (
			<Context.Provider value={state}>
				<PassedComponent {...props} />
			</Context.Provider>
		);
	};
	return StoreWrapper;
};

export default injectContext;

let usuarios = [
	{"email": "santiago@123.cl",
    "password": "123",
    "is_active": "True",
    "username": "sasntiago123",
    "nombre": "Santiago",
    "apellido": "Neely",
    "rut": "24626970",
    "nombre_marca": "Tortas Santiago",
    "descripcion": "Tortas de Milhojas",
    "direccion": "Las hualtatas 10311, Santiago",
    "tipo_pago": "Transferencia",
    "banco_cuenta": "BCI",
    "tipo_cuenta": "corriente",
    "numero_cuenta": "123456"},

	{"email": "patricia@456.cl",
    "password": "456",
    "is_active": "True",
    "username": "paty",
    "nombre": "Patricia",
    "apellido": "Retamales",
    "rut": "30453677",
    "nombre_marca": "Semillas Paty",
    "descripcion": "Semilals naturales y orgánicas, también frutos secos",
    "direccion": "Siempreviva 1010, Santiago",
    "tipo_pago": "Efectivo",
    "banco_cuenta": "0",
    "tipo_cuenta": "0",
    "numero_cuenta": "0"}

]

let productos = [

	{
        "id":"1",
		"vendedor": "01",
        "marca": "01",
        "nombre_producto": "Torta milhojas",
        "descripcion": "esquisita torta de manjar para 10 personas",
        "precio": "25000",
        "url_foto": "https://cocinachilena.cl/wp-content/uploads/2018/06/Torta-de-mil-hojas-receta-chilena-2-scaled-225x225.jpg"
    },
	{
		"id":"2",
        "vendedor": "01",
        "marca": "01",
        "nombre_producto": "Torta Manjar - Nuez",
        "descripcion": "Torta manjar nuez, con manjar de campo. 12 personas.",
        "precio": "30000",
        "url_foto": "https://www.mozart.cl/wp-content/uploads/2018/04/bizcocho-manjar-nuez.jpg"
    },
	{
		"id":"3",
        "vendedor": "01",
        "marca": "01",
        "nombre_producto": "Profiteroles",
        "descripcion": "Profiteroles de manjar, 12 unidades",
        "precio": "10000",
        "url_foto": "https://www.lomismoperosano.cl/wp-content/uploads/2021/08/profiteroles-receta-lo-mismo-pero-sano-500x500.jpg"
    },
	{
		"id":"4",
        "vendedor": "02",
        "marca": "02",
        "nombre_producto": "nombre_producto",
        "descripcion": "descripcion",
        "precio": "precio",
        "url_foto": "url_foto",
    },
	{
		"id":"5",
        "vendedor": "02",
        "marca": "02",
        "nombre_producto": "Semillas de Maravilla",
        "descripcion": "250 gr",
        "precio": "1500",
        "url_foto": "https://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2018/12/cuantas-semillas-de-girasol-debo-comer-al-dia.jpg"
    },
	{
		"id":"6",
        "vendedor": "02",
        "marca": "02",
        "nombre_producto": "Mani",
        "descripcion": "Mani tostado, 1kg",
        "precio": "4500",
        "url_foto": "https://dojiw2m9tvv09.cloudfront.net/4210/product/raw-in-shell-peanuts9597.jpg"
    },
	{
		"id":"7",
        "vendedor": "02",
        "marca": "02",
        "nombre_producto": "Semillas de Amapola",
        "descripcion": "Semilas de. amapola, 500gr",
        "precio": "1400",
        "url_foto": "https://learningherbs.com/wp-content/uploads/2011/09/poppy-seed-recipe-06-1030x687.jpg"
    }
]


/**
 * 
 

 * 




 * 
 * 
 * 
 */