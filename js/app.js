// //template strings

// const nombre='elias';
// const trabajo='desarrollo web';

// //concatenar 
// console.log('nombre:' +nombre+', trabajo: '+trabajo);
// console.log(`nombre: ${nombre}, trabajo: ${trabajo}`);

// //concatenar con m ultiples lineas

// const contenedorApp=document.querySelector('#app');
// let htmll='<ul>'+
// 			'<li>nombre: '+nombre+'</li>'+
// 			'<li>TRABAJO: '+trabajo+'</li>'+
// 			'</ul>'

// let htmlll=`
// 			<ul>
// 				<li>Nombre: ${nombre}</li>
// 				<li>Trabajo: ${trabajo}</li>
// 			</ul>
// 		`;

// contenedorApp.innerHTML=htmlll;

//Creando FUNCIONES


//function declaration
function saludar(nombre){
		console.log('biendfevido: '+nombre);
}

saludar('ELIAS');
saludar('SARA');
saludar('BELEB');


//function expression (SIEMPRE DEBES DECLARAR TUS FUNCIONES ANTES DE USARLAS)

const cliente=function(nombrecliente){
	console.log('mostrando datos del cliente:'+nombrecliente);
}
cliente('Juan');