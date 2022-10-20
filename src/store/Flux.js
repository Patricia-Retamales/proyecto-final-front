const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {

			productos: [],
			marcas: [],
			url_api: ["https://3000-sneelyg-proyectofinalba-ia72ais1p9x.ws-us71.gitpod.io"],
			favoriteList: []

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
			getMessage: async () => {
				try {
					// fetching data from the backend

					const resp = await fetch("https://3000-sneelyg-proyectofinalba-s3t5es4wucl.ws-us71.gitpod.io" + "/api/hello")

					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				} catch (error) {
					console.log("Error loading message from backend", error)
				}
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

				/*var raw = JSON.stringify({
					"email": registro.email,
					"password": registro.password,
					"is_active": "True",
					"username": registro.username,
					"nombre": registro.nombre,
					"apellido": registro.apellido,
					"rut": registro.rut,
					"nombre_marca": registro.marca,
					"descripcion": registro.descripcion,
					"direccion": registro.direccion,
					"tipo_pago": registro.tipo_pago,
					"banco_cuenta": registro.banco,
					"tipo_cuenta": registro.tipo_cuenta,
					"numero_cuenta": registro.numero_cuenta

				});
*/
				var requestOptions = {
					method: 'POST',
					headers: myHeaders,
					body: JSON.stringify(registro),
					redirect: 'follow'
				};


				fetch("https://3000-sneelyg-proyectofinalba-s3t5es4wucl.ws-us71.gitpod.io/registro", requestOptions)
					.then(response => response.json())
					.then(result => {
						console.log(result)
						if (result.registro == "ok") { alert("registro exitoso"); }
						else if (result.registro == "not") { alert(result.message); }


					})
					.catch(error => console.log('error', error));

			},
			login_function: (login) => {

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


				fetch("https://3000-sneelyg-proyectofinalba-s3t5es4wucl.ws-us71.gitpod.io/login", requestOptions)

			
					.then(response => response.json())
					.then(result => {
						console.log(result)
						localStorage.setItem("token", result.token)

						if (result.login == "ok") { alert("login exitoso"); }

						/**Local */
					})
					.catch(error => console.log('error', error));
			},


			crear_producto_funcion: (datos_producto) => {
				console.log(datos_producto);
				var myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");

				/*var raw = JSON.stringify({
					"vendedor": datos_producto.vendedor,
					"marca": datos_producto.marca,
					"nombre_producto": datos_producto.nombre_producto,
					"descripcion": datos_producto.descripcion,
					"precio": datos_producto.precio,
					"url_foto": datos_producto.url_foto
				});
*/
				var requestOptions = {
					method: 'POST',
					headers: myHeaders,
					body: JSON.stringify(datos_producto),
					redirect: 'follow'
				};


				fetch("https://3000-sneelyg-proyectofinalba-s3t5es4wucl.ws-us71.gitpod.io/productos/registro", requestOptions)

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

				fetch("https://3000-sneelyg-proyectofinalba-s3t5es4wucl.ws-us71.gitpod.io/productos/", requestOptions)
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

				fetch("https://3000-sneelyg-proyectofinalba-eqkp9siy5pt.ws-us70.gitpod.io/productos/" + id_producto, requestOptions)
					.then(response => response.text())
					.then(result => console.log(result))
					.catch(error => console.log('error', error));
			},
			addFavorite: (favorite) => {
				const store = getStore();
				const actions = getActions();
				if (!store.favoriteList.includes(favorite)) {
					setStore({
						favoriteList: [...store.favoriteList, favorite]
					});
				} else {
					const array = store.favoriteList;
					const exist = currentFavorite => currentFavorite === favorite;
					let index = array.findIndex(exist);
					if (index > -1) actions.removeFavorite(index);
				}
			},
			removeFavorite: (index) => {
				const store = getStore();
				store.favoriteList.splice(index, 1);
				setStore({
					favoriteList: store.favoriteList
				});
			}


		}
	}
};


export default getState;
