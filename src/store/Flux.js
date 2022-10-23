import CupcakeParadise from "../componet/CupcakeParadise";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			usuarios: [
				{
					"email": "santiago@123.cl",
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
					"numero_cuenta": "123456"
				},

				{
					"email": "patricia@456.cl",
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
					"numero_cuenta": "0"
				},

				{
					"email": "pandora@gmail.cl",
					"password": "456",
					"is_active": "True",
					"username": "paty",
					"nombre": "Patricia",
					"apellido": "Retamales",
					"rut": "30453567",
					"nombre_marca": "Bella Pandora",
					"descripcion": "Te ofrecemos variedades de productos",
					"direccion": "morro 1010, Santiago",
					"tipo_pago": "Efectivo",
					"banco_cuenta": "0",
					"tipo_cuenta": "0",
					"numero_cuenta": "0"
				}

			],
			productos: [
				{
					"id": "1",
					"vendedor": "01",
					"marca": "01",
					"nombre_producto": "Torta milhojas",
					"descripcion": "esquisita torta de manjar para 10 personas",
					"precio": "25000",
					"url_foto": "https://cocinachilena.cl/wp-content/uploads/2018/06/Torta-de-mil-hojas-receta-chilena-2-scaled-225x225.jpg"
				},
				{
					"id": "2",
					"vendedor": "01",
					"marca": "01",
					"nombre_producto": "Torta Manjar - Nuez",
					"descripcion": "Torta manjar nuez, con manjar de campo. 12 personas.",
					"precio": "30000",
					"url_foto": "https://www.mozart.cl/wp-content/uploads/2018/04/bizcocho-manjar-nuez.jpg"
				},
				{
					"id": "3",
					"vendedor": "01",
					"marca": "01",
					"nombre_producto": "Profiteroles",
					"descripcion": "Profiteroles de manjar, 12 unidades",
					"precio": "10000",
					"url_foto": "https://www.lomismoperosano.cl/wp-content/uploads/2021/08/profiteroles-receta-lo-mismo-pero-sano-500x500.jpg"
				},
				{
					"id": "4",
					"vendedor": "02",
					"marca": "02",
					"nombre_producto": "nombre_producto",
					"descripcion": "descripcion",
					"precio": "precio",
					"url_foto": "url_foto"
				},
				{
					"id": "5",
					"vendedor": "02",
					"marca": "02",
					"nombre_producto": "Semillas de Maravilla",
					"descripcion": "250 gr",
					"precio": "1500",
					"url_foto": "https://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2018/12/cuantas-semillas-de-girasol-debo-comer-al-dia.jpg"
				},
				{
					"id": "6",
					"vendedor": "02",
					"marca": "02",
					"nombre_producto": "Mani",
					"descripcion": "Mani tostado, 1kg",
					"precio": "4500",
					"url_foto": "https://dojiw2m9tvv09.cloudfront.net/4210/product/raw-in-shell-peanuts9597.jpg"
				},
				{
					"id": "7",
					"vendedor": "02",
					"marca": "02",
					"nombre_producto": "Semillas de Amapola",
					"descripcion": "Semilas de. amapola, 500gr",
					"precio": "1400",
					"url_foto": "https://learningherbs.com/wp-content/uploads/2011/09/poppy-seed-recipe-06-1030x687.jpg"
				},
				{
					"id": "8",
					"vendedor": "04",
					"marca": "03",
					"nombre_producto": "Anillos",
					"descripcion": "xxxxxxxxxxxxxxxxxxxxx",
					"precio": "1990",
					"url_foto": "https://www.paris.cl/dw/image/v2/BCHW_PRD/on/demandware.static/-/Sites-paris-marketplace/default/dwee8477e7/images/imagenes-productos/800/MKN9/MKN9VOPXRS-001.jpg?sw=320&sh=409&sm=fit"
				},
				{
					"id": "9",
					"vendedor": "04",
					"marca": "03",
					"nombre_producto": "Pulseras",
					"descripcion": "xxxxxxxxxxxxxxxxxxxxx",
					"precio": "1990",
					"url_foto": "https://i.pinimg.com/originals/43/3a/26/433a2696cab0e5c0eaab5e10ce4e5563.jpg"
				},
				{
					"id": "10",
					"vendedor": "04",
					"marca": "03",
					"nombre_producto": "Aros",
					"descripcion": "xxxxxxxxxxxxxxxxxxxxx",
					"precio": "1990",
					"url_foto": "https://falabella.scene7.com/is/image/Falabella/110436121_1?wid=800&hei=800&qlt=70"
				},
				{
					"id": "11",
					"vendedor": "04",
					"marca": "03",
					"nombre_producto": "Cadenas",
					"descripcion": "xxxxxxxxxxxxxxxxxxxxx",
					"precio": "1990",
					"url_foto": "https://static.sammit.cl/15928/cadena-grumet-130716-1024.jpg"
				},
				{
					"id": "12",
					"vendedor": "04",
					"marca": "03",
					"nombre_producto": "Tobilleras",
					"descripcion": "xxxxxxxxxxxxxxxxxxxxx",
					"precio": "1990",
					"url_foto": "https://ae01.alicdn.com/kf/Hfea8f71b004e44e097b168ae70a6ebb7V/1-2-3-unids-set-tobilleras-mujer-acero-inoxidable-joyeria-mujer-joyas-de-playa.jpg_Q90.jpg_.webp"
				},
				{
					"id": "13",
					"vendedor": "04",
					"marca": "03",
					"nombre_producto": "Pircing",
					"descripcion": "xxxxxxxxxxxxxxxxxxxxx",
					"precio": "1990",
					"url_foto": ""
				},
				{
					"id": "14",
					"vendedor": "05",
					"marca": "04",
					"nombre_producto": "Torta",
					"descripcion": "xxxxxxxxxxxxxxxxxxxxx",
					"precio": "1990",
					"url_foto": "https://www.dulcesyregalos.com/comunes/productos/CUM07.jpg"
				},
				{
					"id": "15",
					"vendedor": "05",
					"marca": "04",
					"nombre_producto": "Tortitas",
					"descripcion": "xxxxxxxxxxxxxxxxxxxxx",
					"precio": "1990",
					"url_foto": "https://www.dulcesyregalos.com/comunes/productos/CUM07.jpg"
				},
				{
					"id": "16",
					"vendedor": "05",
					"marca": "04",
					"nombre_producto": "pasteles",
					"descripcion": "xxxxxxxxxxxxxxxxxxxxx",
					"precio": "1590",
					"url_foto": "https://www.dulcesyregalos.com/comunes/productos/CUM07.jpg"
				},
				{
					"id": "17",
					"vendedor": "05",
					"marca": "04",
					"nombre_producto": "masas",
					"descripcion": "xxxxxxxxxxxxxxxxxxxxx",
					"precio": "1990",
					"url_foto": "https://mascolombia.com/wp-content/uploads/2022/04/Tortas-decoradas.-Frozen.png"
				},
				{
					"id": "18",
					"vendedor": "05",
					"marca": "04",
					"nombre_producto": "pastelitos",
					"descripcion": "xxxxxxxxxxxxxxxxxxxxx",
					"precio": "1990",
					"url_foto": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKxy1YdKyp06jA9x7ZYYYdbPrVYAXGr6nVhLXKOhxDi8RtWvxdHBq2vO2o63rQIdJd5dU&usqp=CAU"
				},
				{
					"id": "19",
					"vendedor": "05",
					"marca": "04",
					"nombre_producto": "Tortasitas",
					"descripcion": "xxxxxxxxxxxxxxxxxxxxx",
					"precio": "1990",
					"url_foto": "https://invitajass.com/wp-content/uploads/2019/06/tortas-de-cumpleaños-para-niñas.png"
				},


				{
					"id": "20",
					"vendedor": "06",
					"marca": "05",
					"nombre_producto": "Salchicha",
					"descripcion": "xxxxxxxxxxxxxxxxxxxxx",
					"precio": "1990",
					"url_foto": "https://cf.shopee.cl/file/71a14371ee395e416a4233684ca8795"
				},
				{
					"id": "21",
					"vendedor": "06",
					"marca": "05",
					"nombre_producto": "Calabaza",
					"descripcion": "xxxxxxxxxxxxxxxxxxxxx",
					"precio": "1990",
					"url_foto": "https://static1.mujerhoy.com/www/multimedia/201910/28/media/cortadas/disfraces-halloween-baratos-primark-14-k1D--739x555@MujerHoy.jpg"
				},
				{
					"id": "22",
					"vendedor": "06",
					"marca": "05",
					"nombre_producto": "Fantasma",
					"descripcion": "xxxxxxxxxxxxxxxxxxxxx",
					"precio": "1990",
					"url_foto": "https://static.guiainfantil.com/media/2788/blobid0.jpg"
				},
				{
					"id": "23",
					"vendedor": "06",
					"marca": "05",
					"nombre_producto": "Diablita",
					"descripcion": "xxxxxxxxxxxxxxxxxxxxx",
					"precio": "1990",
					"url_foto": "https://www.dondisfraz.com/media/catalog/product/cache/1b7efd9c23603a41861e943185fdf7f2/d/i/disfraz-de-diablesa-presumida-para-nina.jpg.jpg"
				},
				{
					"id": "24",
					"vendedor": "06",
					"marca": "05",
					"nombre_producto": "Baby Yoda",
					"descripcion": "xxxxxxxxxxxxxxxxxxxxx",
					"precio": "1990",
					"url_foto": "https://www.hola.com/imagenes/seleccion/20211006197191/mejores-disfraces-halloween-para-ninos/1-6-682/baby-joda-z.jpg"
				},
				{
					"id": "25",
					"vendedor": "06",
					"marca": "06",
					"nombre_producto": "Lapices",
					"descripcion": "xxxxxxxxxxxxxxxxxxxxx",
					"precio": "1990",
					"url_foto": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pumahue.cl%2Ftemuco%2Frecepcion-de-utiles-escolares%2F&psig=AOvVaw3RubPKpVGvtX5zD2FL9po2&ust=1665790252929000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCNi8lrSu3voCFQAAAAAdAAAAABAE"
				},
				{
					"id": "26",
					"vendedor": "06",
					"marca": "06",
					"nombre_producto": "Cuadernos",
					"descripcion": "xxxxxxxxxxxxxxxxxxxxx",
					"precio": "1990",
					"url_foto": "https://www.torre.cl/wp-content/uploads/2021/12/tipos-de-hoja-cuadernos.jpg"
				}, {
					"id": "27",
					"vendedor": "06",
					"marca": "06",
					"nombre_producto": "Cartulinas",
					"descripcion": "xxxxxxxxxxxxxxxxxxxxx",
					"precio": "1990",
					"url_foto": "https://www.latala.cl/wp-content/uploads/2020/08/PAPEL-LUSTRE-ARTEL.jpg"
				}, {
					"id": "28",
					"vendedor": "06",
					"marca": "06",
					"nombre_producto": " Pantalon ",
					"descripcion": "xxxxxxxxxxxxxxxxxxxxx",
					"precio": "1990",
					"url_foto": "https://media.vozpopuli.com/2020/03/ZARA-Pantalon-PVP-BERSHKA-Supernenas_1335176561_14804356_660x371.jpg"
				},
				{
					"id": "29",
					"vendedor": "06",
					"marca": "06",
					"nombre_producto": "stick fix",
					"descripcion": "xxxxxxxxxxxxxxxxxxxxx",
					"precio": "1990",
					"url_foto": "https://cdnx.jumpseller.com/librerias-blue-mix/image/19179199/resize/640/500?1656445026"
				},

				{
					"id": "30",
					"vendedor": "06",
					"marca": "07",
					"nombre_producto": "Limpia Vidrios",
					"descripcion": "xxxxxxxxxxxxxxxxxxxxx",
					"precio": "1990",
					"url_foto": "https://cdnx.jumpseller.com/ofimaster/image/17832677/resize/540/540?1645018925"
				},
				{
					"id": "31",
					"vendedor": "06",
					"marca": "07",
					"nombre_producto": "Poett",
					"descripcion": "xxxxxxxxxxxxxxxxxxxxx",
					"precio": "1990",
					"url_foto": "https://cdn.dimerc.cl/media/catalog/product/cache/1/thumbnail/x600/040ec09b1e35df139433887a97daa66f/0/4/04c1719100cbc17f6a07280eec4ff27f.jpg"
				},
				{
					"id": "32",
					"vendedor": "06",
					"marca": "07",
					"nombre_producto": "Omo",
					"descripcion": "xxxxxxxxxxxxxxxxxxxxx",
					"precio": "1990",
					"url_foto": "https://dojiw2m9tvv09.cloudfront.net/42730/product/7805000317317-detergentes-detergente-omo-matic-2-7kg-puntobarato1184.jpg"
				},
				{
					"id": "33",
					"vendedor": "06",
					"marca": "07",
					"nombre_producto": "Lavaloza",
					"descripcion": "xxxxxxxxxxxxxxxxxxxxx",
					"precio": "1990",
					"url_foto": "https://cdnx.jumpseller.com/comaac-spa/image/16542077/resize/540/540?1630076735"
				},


				{
					"id": "34",
					"vendedor": "06",
					"marca": "07",
					"nombre_producto": "suavizante downy",
					"descripcion": "xxxxxxxxxxxxxxxxxxxxx",
					"precio": "1990",
					"url_foto": "https://dojiw2m9tvv09.cloudfront.net/42730/product/7506195143834-suavizantes-suavizante-downy-concentrado-500ml-puntobarato3944.jpg"
				},
				{
					"id": "35",
					"vendedor": "06",
					"marca": "07",
					"nombre_producto": "cloro",
					"descripcion": "xxxxxxxxxxxxxxxxxxxxx",
					"precio": "1990",
					"url_foto": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAMOQfRZ0DuV1hSqDqgxDx-QPPwOPippy_Qw&usqp=CAU"
				},
				{
					"id": "36",
					"vendedor": "06",
					"marca": "08",
					"nombre_producto": "Conjuntos",
					"descripcion": "xxxxxxxxxxxxxxxxxxxxx",
					"precio": "1990",
					"url_foto": "https://i.pinimg.com/736x/7f/47/f7/7f47f7cf94601d5ee87c1192e0bd492c.jpg"
				},
				{
					"id": "37",
					"vendedor": "06",
					"marca": "08",
					"nombre_producto": "Pulceras",
					"descripcion": "xxxxxxxxxxxxxxxxxxxxx",
					"precio": "1990",
					"url_foto": "https://http2.mlstatic.com/D_NQ_NP_787221-MLC49436145703_032022-W.jpg"
				},
				{
					"id": "38",
					"vendedor": "06",
					"marca": "08",
					"nombre_producto": "chaqutas",
					"descripcion": "xxxxxxxxxxxxxxxxxxxxx",
					"precio": "1990",
					"url_foto": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS54S5Rg9epcT15gm8d1345XyH9EegpDaSFUQ&usqp=CAU"
				},
				{
					"id": "39",
					"vendedor": "06",
					"marca": "08",
					"nombre_producto": "Poleras",
					"descripcion": "xxxxxxxxxxxxxxxxxxxxx",
					"precio": "1990",
					"url_foto": "https://www.chilepromo.cl/3056-large_default/polera-con-cuello-para-mujer-poliester.jpg"
				},
				{
					"id": "40",
					"vendedor": "06",
					"marca": "08",
					"nombre_producto": "Pantalon",
					"descripcion": "xxxxxxxxxxxxxxxxxxxxx",
					"precio": "1990",
					"url_foto": "https://media.vozpopuli.com/2020/03/ZARA-Pantalon-PVP-BERSHKA-Supernenas_1335176561_14804356_660x371.jpg"
				},
				{
					"id": "41",
					"vendedor": "06",
					"marca": "08",
					"nombre_producto": "Vestidos",
					"descripcion": "xxxxxxxxxxxxxxxxxxxxx",
					"precio": "1990",
					"url_foto": "ttps://cf.shopee.cl/file/be52ba9190a403047c0e0b3d0f79ebae"
				},
				{
					"id": "42",
					"vendedor": "06",
					"marca": "09",
					"nombre_producto": "Semilla Zapallo",
					"descripcion": "xxxxxxxxxxxxxxxxxxxxx",
					"precio": "1990",
					"url_foto": "https://jumbo.vtexassets.com/arquivos/ids/325530-360-360?width=360&height=360&aspect=true"
				},
				{
					"id": "43",
					"vendedor": "06",
					"marca": "09",
					"nombre_producto": "Semillas varidad",
					"descripcion": "xxxxxxxxxxxxxxxxxxxxx",
					"precio": "1990",
					"url_foto": "https://floramedia.es/wp-content/uploads/2021/07/sobres-de-semillas-floramedia.jpg"
				},
				{
					"id": "44",
					"vendedor": "06",
					"marca": "09",
					"nombre_producto": "Linaza",
					"descripcion": "xxxxxxxxxxxxxxxxxxxxx",
					"precio": "1990",
					"url_foto": "https://cdn.shopify.com/s/files/1/0293/8952/0975/products/4195_600x.jpg?v=1629944171"
				},
				{
					"id": "45",
					"vendedor": "06",
					"marca": "09",
					"nombre_producto": " Sesamo Negro",
					"descripcion": "xxxxxxxxxxxxxxxxxxxxx",
					"precio": "1990",
					"url_foto": "https://aldeanativa.cl/wp-content/uploads/1d1a0eb0-5159-4459-8cb0-6125afdfa455-606110105309-semillas-de-sesamo-negro-125gr-positiv-1.jpeg"
				},
				{
					"id": "46",
					"vendedor": "06",
					"marca": "09",
					"nombre_producto": "Semilla Lino",
					"descripcion": "xxxxxxxxxxxxxxxxxxxxx",
					"precio": "1990",
					"url_foto": "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/839/794/products/semillas-de-lino1-398dad853a54d9533516313012782087-1024-1024.png"
				},
				{
					"id": "47",
					"vendedor": "06",
					"marca": "09",
					"nombre_producto": "semilla de girazol",
					"descripcion": "xxxxxxxxxxxxxxxxxxxxx",
					"precio": "1990",
					"url_foto": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2EJTMOYQC3SKiIPEDQRVis07tBEqfbx_FNw&usqp=CAU"
				},
				{
					"id": "48",
					"vendedor": "06",
					"marca": "10",
					"nombre_producto": "Chocolate",
					"descripcion": "xxxxxxxxxxxxxxxxxxxxx",
					"precio": "1990",
					"url_foto": "https://i0.wp.com/www.johfrej.com/wp-content/uploads/2021/04/tortugas-de-chocolate-johfrej-cv.png?fit=700%2C467&ssl=1"
				},
				{
					"id": "49",
					"vendedor": "06",
					"marca": "10",
					"nombre_producto": "Corazon chocolatozo",
					"descripcion": "xxxxxxxxxxxxxxxxxxxxx",
					"precio": "1990",
					"url_foto": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDlRzggYQQ0NNlauxzcm726WIfl3ezjIeVtQ&usqp=CAU"
				},
				{
					"id": "50",
					"vendedor": "06",
					"marca": "10",
					"nombre_producto": "Regalitos de Amor",
					"descripcion": "xxxxxxxxxxxxxxxxxxxxx",
					"precio": "1990",
					"url_foto": "https://www.mendoza.gov.ar/wp-content/uploads/sites/49/2016/06/choco.jpg"
				},
				{
					"id": "51",
					"vendedor": "06",
					"marca": "10",
					"nombre_producto": "Cajitas",
					"descripcion": "xxxxxxxxxxxxxxxxxxxxx",
					"precio": "1990",
					"url_foto": "https://img.freepik.com/fotos-premium/composicion-sobre-fondo-madera-negra-chocolates-artesanales-al-estilo-raffaello-productos-naturales-organicos_200577-76.jpg"
				},
				{
					"id": "52",
					"vendedor": "06",
					"marca": "10",
					"nombre_producto": "100% Cacao",
					"descripcion": "xxxxxxxxxxxxxxxxxxxxx",
					"precio": "1990",
					"url_foto": "http://innatia.info/images/galeria/chocolate-5.jpg"
				},
				{
					"id": "53",
					"vendedor": "06",
					"marca": "10",
					"nombre_producto": "Bombones rellenos",
					"descripcion": "xxxxxxxxxxxxxxxxxxxxx",
					"precio": "1990",
					"url_foto": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLwps6PlwM37H7KSGCSIuQ_zOTflv_Z9hvVg&usqp=CAU"
				},


			],
			favoriteList: [],



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


					const resp = await fetch("https://3000-sneelyg-proyectofinalba-tvacgmaa6t1.ws-us72.gitpod.io" + "/api/hello")



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
					"rut": registro.rut,
					"nombre_marca": registro.marca,
					"descripcion": registro.descripcion,
					"direccion": registro.direccion,
					"tipo_pago": registro.tipo_pago,
					"banco_cuenta": registro.banco,
					"tipo_cuenta": registro.tipo_cuenta,
					"numero_cuenta": registro.numero_cuenta

				});

				var requestOptions = {
					method: 'POST',
					headers: myHeaders,
					body: JSON.stringify(registro),
					redirect: 'follow'
				};

				fetch("https://3000-sneelyg-proyectofinalba-cx24m3v56wn.ws-us72.gitpod.io/registro", requestOptions)
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

				fetch("https://3000-sneelyg-proyectofinalba-cx24m3v56wn.ws-us72.gitpod.io/login", requestOptions)
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

				const store = getStore();
				const token = localStorage.getItem('token');
				const autorizacion = "Bearer " + token;

				var myHeaders = new Headers();
				myHeaders.append("Authorization", autorizacion);
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
					body: JSON.stringify(datos_producto),
					redirect: 'follow'
				};

				fetch("https://3000-sneelyg-proyectofinalba-cx24m3v56wn.ws-us72.gitpod.io/productos/registro", requestOptions)
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

				fetch("https://3000-sneelyg-proyectofinalba-cx24m3v56wn.ws-us72.gitpod.io/productos/", requestOptions)
					.then(response => response.text())
					.then(result => setStore({ productos: result }))
					.catch(error => console.log('error', error));
			},


			getMarcas: () => {

				var requestOptions = {
					method: 'GET',
					redirect: 'follow'
				};

				fetch("https://3000-sneelyg-proyectofinalba-cx24m3v56wn.ws-us72.gitpod.io/marcas", requestOptions)
					.then(response => response.text())
					.then(result => setStore({ marcas: result }))
					.catch(error => console.log('error', error));
			},

			acceso_privado: () => {

				var myHeaders = new Headers();
				const token = localStorage.getItem("token")
				const autorizacion = "Bearer " + token;
				console.log(autorizacion);
				myHeaders.append("Authorization", autorizacion)


				var requestOptions = {
					method: 'GET',
					headers: myHeaders,
					redirect: 'follow'
				};

				fetch("https://3000-sneelyg-proyectofinalba-cx24m3v56wn.ws-us72.gitpod.io/privada", requestOptions)
					.then(response => response.json())
					.then(result => {
					//	setEmail(result.usuario);
						if (result.success == "ok") {
							console.log(result)
						}
						 else {
						   window.location.href = "/login"
						 }
					})
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

				fetch("https://3000-sneelyg-proyectofinalba-cx24m3v56wn.ws-us72.gitpod.io/productos/" + id_producto, requestOptions)
					.then(response => response.text())
					.then(result => console.log(result))
					.catch(error => console.log('error', error));
			},
			addFavorite: (favorite) => {
				console.log("favorito", favorite);
				const store = getStore();
				const actions = getActions();
				if (!store.favoriteList.includes(favorite)) {
					setStore({
						favoriteList: [...store.favoriteList, favorite]
					});
				} else {
					const array = store.favoriteList;
					const exist = currentFavorite => currentFavorite === favorite;
					let id_producto = array.findid_producto(exist);
					if (id_producto > -1) actions.removeFavorite(id_producto);
				}
			},
			removeFavorite: (id_producto) => {
				const store = getStore();
				store.favoriteList.splice(id_producto, 1);
				setStore({
					favoriteList: store.favoriteList
				});
			},
			recuperar_clave_funcion: (email_usuario) => {
				console.log("Recuperando Clave para " + email_usuario)
				var myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");

				var raw = JSON.stringify({
					"email": email_usuario
				});

				var requestOptions = {
					method: 'POST',
					headers: myHeaders,
					body: raw,
					redirect: 'follow'
				};

				fetch("https://3000-sneelyg-proyectofinalba-cx24m3v56wn.ws-us72.gitpod.io/recuperar/clave", requestOptions)
					.then(response => response.json())
					.then(result => console.log(result))
					.catch(error => console.log('error', error));



			},

			cambiar_clave_funcion: (nueva_clave, email, token) => {
				console.log("Cambiando Clave")
				var myHeaders = new Headers();
				myHeaders.append("Authorization", "Bearer " + token);
				myHeaders.append("Content-Type", "application/json");

				var raw = JSON.stringify({
					"email": email,
					"password": nueva_clave
				});

				var requestOptions = {
					method: 'POST',
					headers: myHeaders,
					body: raw,
					redirect: 'follow'
				};

				fetch("https://3000-sneelyg-proyectofinalba-cx24m3v56wn.ws-us72.gitpod.io/cambiar/clave", requestOptions)
					.then(response => response.json())
					.then(result => console.log(result))
					.catch(error => console.log('error', error));



			},



		}
	}
};


export default getState;
