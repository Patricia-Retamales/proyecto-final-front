const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {

			productos: [],
			marcas: [],
			

			// demo: [
			// 	{
			// 		title: "FIRST",
			// 		background: "white",
			// 		initial: "white"
			// 	},
			// 	{
			// 		title: "SECOND",
			// 		background: "white",
			// 		initial: "white"
			// 	}
			// ]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			/**Función de Registro acá abajo */
			registro_funcion: (registro) => {
				console.log("Creando Usuario")
				var myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");

				var raw = JSON.stringify({
					"email": registro.email,
					"password": registro.password,
					"is_active": "True",
					"username": registro.username,
					"nombre": registro.nombre,
					"apellido": registro.apellido,
					"rut": registro.rut
				});

				var requestOptions = {
					method: 'POST',
					headers: myHeaders,
					body: raw,
					redirect: 'follow'
				};

				fetch("https://3000-sneelyg-proyectofinalba-eqkp9siy5pt.ws-us70.gitpod.io/registro", requestOptions)
					.then(response => response.text())
					.then(result => console.log(result))
					.catch(error => console.log('error', error));

			},
			login_funcion: (login) => {

				console.log("Haciendo login con" + login.email + "  clave es  " + login.password)
				var myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");

				var raw = JSON.stringify({
					"email": login.email,
					"password": login.password
				});

				var requestOptions = {
					method: 'POST',
					headers: myHeaders,
					body: raw,
					redirect: 'follow'
				};

				fetch("https://3000-sneelyg-proyectofinalba-eqkp9siy5pt.ws-us70.gitpod.io/login", requestOptions)
					.then(response => response.text())
					.then(result => {
						console.log(result)
						localStorage.setItem("token", result.token)
						/**Local */
					})
					.catch(error => console.log('error', error));
			},
			crear_marca_funcion: (datos_marca) => {
				var myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");

				var raw = JSON.stringify({
					"vendedor": datos_marca.vendedor,
					"nombre_marca": datos_marca.nombre_marca,
					"descripcion": datos_marca.descripcion,
					"direccion": datos_marca.direccion,
					"tipo_pago": datos_marca.tipo_pago,
					"banco_cuenta": datos_marca.banco_cuenta,
					"tipo_cuenta": datos_marca.tipo_cuenta,
					"numero_cuenta": datos_marca.numero_cuenta,
					"rut_cuenta": datos_marca.rut_cuenta
				});

				var requestOptions = {
					method: 'POST',
					headers: myHeaders,
					body: raw,
					redirect: 'follow'
				};

				fetch("https://3000-sneelyg-proyectofinalba-eqkp9siy5pt.ws-us70.gitpod.io/marcas/registro", requestOptions)
					.then(response => response.text())
					.then(result => alert(result))
					.catch(error => console.log('error', error));
			},
			crear_producto_funcion: (datos_producto) => {
				var myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");

				var raw = JSON.stringify({
					"vendedor": datos_producto.vendedor,
					"marca": datos_producto.marca,
					"nombre_producto": datos_producto.nombre_producto,
					"descripcion": datos_producto.descripcion,
					"precio": datos_producto.precio,
					"url_foto": datos_producto.url_foto
				});

				var requestOptions = {
					method: 'POST',
					headers: myHeaders,
					body: raw,
					redirect: 'follow'
				};

				fetch("https://3000-sneelyg-proyectofinalba-eqkp9siy5pt.ws-us70.gitpod.io/productos/registro", requestOptions)
					.then(response => response.text())
					.then(result => console.log(result))
					.catch(error => console.log('error', error));
			},
			recuperar_clave_funcion: () => { },

			getProductos: () => {


				var requestOptions = {
					method: 'GET',
					redirect: 'follow'
				};

				fetch("https://3000-sneelyg-proyectofinalba-eqkp9siy5pt.ws-us70.gitpod.io/productos/", requestOptions)
					.then(response => response.text())
					.then(result => setStore({ productos: result }))
					.catch(error => console.log('error', error));
			},


			getMarcas: () => {

				var requestOptions = {
					method: 'GET',
					redirect: 'follow'
				};

				fetch("https://3000-sneelyg-proyectofinalba-eqkp9siy5pt.ws-us70.gitpod.io/marcas", requestOptions)
					.then(response => response.text())
					.then(result => setStore({ marcas: result }))
					.catch(error => console.log('error', error));
			},


			borrar_producto_funcion: (id_producto) => {
				var myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");

				var requestOptions = {
					method: 'DELETE',
					headers: myHeaders,
					redirect: 'follow'
				};

				fetch("https://3000-sneelyg-proyectofinalba-eqkp9siy5pt.ws-us70.gitpod.io/productos/"+id_producto, requestOptions)
					.then(response => response.text())
					.then(result => console.log(result))
					.catch(error => console.log('error', error));
			}


		}
	};
};

export default getState;
