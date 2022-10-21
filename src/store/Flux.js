const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {

			usuarios : [
				{"email": "santiago@123.cl",
				"password": "123",
				"is_active": "True",
				"username": "sasntiago123"
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
				"nombre": Patricia,
				"apellido": "Retamales",
				"rut": "30453677",
				"nombre_marca": "Semillas Paty",
				"descripcion": "Semilals naturales y orgánicas, también frutos secos",
				"direccion": "Siempreviva 1010, Santiago",
				"tipo_pago": "Efectivo",
				"banco_cuenta": "0",
				"tipo_cuenta": "0",
				"numero_cuenta": "0"}
			
			],
			
			productos : [
			
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
					"nombre_producto": nombre_producto,
					"descripcion": descripcion,
					"precio": precio,
					"url_foto": url_foto
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
			], 

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
					const resp = await fetch("https://3000-sneelyg-proyectofinalba-ia72ais1p9x.ws-us71.gitpod.io" + "/api/hello")
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

				fetch("https://3000-sneelyg-proyectofinalba-ia72ais1p9x.ws-us71.gitpod.io/registro", requestOptions)
					.then(response => response.text())
					.then(result => console.log(result))
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

				fetch("https://3000-sneelyg-proyectofinalba-ia72ais1p9x.ws-us71.gitpod.io/login", requestOptions)
					.then(response => response.json())
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
					"url_foto": datos_producto.url_foto,
					
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
			},
			addFavorite: (favorite) => {
                const store = getStore();
                const actions = getActions();
                if(!store.favoriteList.includes(favorite)){
                    setStore({
                        favoriteList: [...store.favoriteList, favorite]
                    });
                }else{
                    const array = store.favoriteList;
                    const exist = currentFavorite => currentFavorite === favorite;
                    let index = array.findIndex(exist);
                    if( index > -1) actions.removeFavorite(index);
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
	};
};

export default getState;
