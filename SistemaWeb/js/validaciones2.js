// JavaScript Document


function usuariovalidacion(){
	var num = /^[0-9]*$/;
	var patronUno = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g;
	if(document.getElementById("usuario").value==null || document.getElementById("usuario").value.length==0){
	document.getElementById("usuario").value="";
		alert("Error: El usuario no debe de estar vacio");
		document.getElementById("usuario").focus();
	}
	else if(document.getElementById("usuario").value.length < 5){
		document.getElementById("usuario").value="";
		alert("Error: El usuario debe tener más de 5 caracteres");
		document.getElementById("usuario").focus();	
			}
	else if(patronUno.test(document.getElementById("usuario")).value || num.test(document.getElementById("usuario")).value){
		document.getElementById("usuario").value="";
		alert("Error");
		document.getElementById("usuario").focus();
	}else{
		//alert("Usuario valido");
	}
}

function contrasenia(){
var patron = /^[A-Za-z0-9 .,'!&]+$/;
	if(document.getElementById("contra").value==null || document.getElementById("contra").value.length==0){
	document.getElementById("contra").value="";
		alert("Error: La contraseña no debe de estar vacia");
		document.getElementById("contra").focus();							
	}
	else if(document.getElementById("contra").value.length < 5){
	document.getElementById("contra").value="";
		alert("Error: La contraseña debe tener al menos 5 caracteres");
		document.getElementById("contra").focus();		
			}
	else if(patron.test(document.getElementById("contra")).value || /^\s+$/.test(document.getElementById("contra").value)){
		document.getElementById("contra").value="";
		alert("Error");
		document.getElementById("contra").focus();
	}else{
		//alert("Contraseña valida");
	}
}

function nombre(){
var numUno = /[0-9]+/;
var patronTres = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g;
	
if(document.getElementById("nom").value==null || document.getElementById("nom").value.length==0){
   document.getElementById("nom").value="";
		alert("Error: El nombre no debe de estar vacío");
		document.getElementById("nom").focus();
   }
else if(document.getElementById("nom").value.length < 3){
		document.getElementById("nom").value="";
		alert("Error: El usuario debe tener al menos 3 caracteres");
		document.getElementById("nom").focus();
}
else if(patronTres.test(document.getElementById("nom")).value || numUno.test(document.getElementById("nom")).value || /^\s+$/.test(document.getElementById("nom").value)){
		document.getElementById("nom").value="";
		alert("Error");
		document.getElementById("nom").focus();
	}else{
		//alert("Nombre valido");
	}
}

function descripcion(){
	var patron = /^[A-Za-z0-9 .,'!&]+$/;
	if(patron.test(document.getElementById("descri")).value || document.getElementById("descri").value==null || document.getElementById("descri").value.length==0 || /^\s+$/.test(document.getElementById("descri").value)||document.getElementById("descri").value.length < 2){
		document.getElementById("descri").value="";
		alert("Error de descripción");
		document.getElementById("descri").focus();
	}else{
		
	}
}


function cedula(){
	if(document.getElementById("ced").value==null || document.getElementById("ced").value.length==0){
	document.getElementById("ced").value="";
		alert("Error: La cédula no debe de estar vacia");
		document.getElementById("ced").focus();
	}
	else if(isNaN(document.getElementById("ced").value)){
	document.getElementById("ced").value="";
		alert("Error: La cédula debe ser de datos numéricos");
		document.getElementById("ced").focus();	
	}
	
	else if((document.getElementById("ced").value.length)!=10){
		document.getElementById("ced").value="";
		alert("Error: La cédula debe tener 10 dígitos");
		document.getElementById("ced").focus();
	}else{
		//alert("Cédula valida");
	}
}

function apellido(){
var numDos = /[0-9]+/;
var patronDos = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g;
if(document.getElementById("app").value==null || document.getElementById("app").value.length==0){
   document.getElementById("app").value="";
		alert("Error: El apellido no debe de estar vacío");
		document.getElementById("app").focus();
   }
else if(document.getElementById("app").value.length < 3){
		document.getElementById("app").value="";
		alert("Error: El apellido debe tener al menos 3 caracteres");
		document.getElementById("app").focus();
		}
else if(patronDos.test(document.getElementById("app")).value || numDos.test(document.getElementById("app")).value|| /^\s+$/.test(document.getElementById("app").value)){
		document.getElementById("app").value="";
		alert("Error");
		document.getElementById("app").focus();
	}else{
		//alert("Apellido valido");
	}
}

function celular(){
	if(document.getElementById("cell").value==null || document.getElementById("cell").value.length==0){
	document.getElementById("cell").value="";
		alert("Error: El celular no debe de estar vacia");
		document.getElementById("cell").focus();
	}
	else if(isNaN(document.getElementById("cell").value)){
		document.getElementById("cell").value="";
		alert("Error: El celular debe ser solo de datos numéricos");
		document.getElementById("cell").focus();
	}
	else if((document.getElementById("cell").value.length)!=10){
	document.getElementById("cell").value="";
		alert("Error: El celular debe tener 10 números");
		document.getElementById("cell").focus();	
	}else{
		//alert("Celular Valido");
	}
}

function correoElec(){
var expresion = /^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i;
var correo = document.form1.correo.value;
	if(!expresion.test(correo)){
		document.getElementById("correo").value="";
		alert("Error: El correo debe ser de la siguiente forma texto@texto.texto");
		document.getElementById("correo").focus();
	}else{
		//alert("Correo electrónico valido");
	}
}

function direccion(){
	var patron = /^[A-Za-z0-9 .,'!&]+$/;
	if(document.getElementById("direc").value==null || document.getElementById("direc").value.length==0 ){
	document.getElementById("direc").value="";
		alert("Error: La dirección no debe de estar vacía");
		document.getElementById("direc").focus();
	}
	else if(document.getElementById("direc").value.length < 3){
		document.getElementById("direc").value="";
		alert("Error: La dirección debe tener al menos 3 caracteres");
		document.getElementById("direc").focus();
	}
	else if(patron.test(document.getElementById("direc")).value || /^\s+$/.test(document.getElementById("direc").value)){
		document.getElementById("direc").value="";
		alert("Error");
		document.getElementById("direc").focus();
	}else{
		//alert("Direccion valida");
	}
}




function validar(){

var todo_correcto = true;
var num = /[0-9]+/;
var patronUno = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g;
var patron = /^[A-Za-z0-9 .,'!&]+$/;
if(patronUno.test(document.getElementById("usuario")).value || num.test(document.getElementById("usuario")).value || document.getElementById("usuario").value==null || document.getElementById("usuario").value.length==0 ||document.getElementById("usuario").value.length < 5){
    todo_correcto = false;
}

if(patron.test(document.getElementById("contra")).value || document.getElementById("contra").value==null || document.getElementById("contra").value.length==0 || /^\s+$/.test(document.getElementById("contra").value)||document.getElementById("contra").value.length < 5){
    todo_correcto = false;
}
if(!todo_correcto){
alert("Algunos campos no están correctos o llenos, vuelva a revisarlos");
todo_correcto = false;
}
if(todo_correcto){
	sessionStorage.setItem('status','loggedIn');
	alert("Ingresando con exito");
}
return todo_correcto;
}

function validar2(){
	
var todo_correcto = true;
var expresion = /^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i;
var correo = document.form1.correo.value;
var numUno = /[0-9]+/;
var numDos = /[0-9]+/;
var num = /[0-9]+/;
var patronUno = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g;
var patronTres = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g;
var patronDos = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g;
var patron = /^[A-Za-z0-9 .,'!&]+$/;
if(isNaN(document.getElementById("ced").value) || (document.getElementById("ced").value.length)!=10 || document.getElementById("ced").value==null || document.getElementById("ced").value.length==0){
    todo_correcto = false;
}
if(patronTres.test(document.getElementById("nom")).value || numUno.test(document.getElementById("nom")).value || document.getElementById("nom").value==null || document.getElementById("nom").value.length==0 || /^\s+$/.test(document.getElementById("nom").value)||document.getElementById("nom").value.length < 3){
    todo_correcto = false;
}
if(patronDos.test(document.getElementById("app")).value || numDos.test(document.getElementById("app")).value || document.getElementById("app").value==null || document.getElementById("app").value.length==0 || /^\s+$/.test(document.getElementById("app").value)||document.getElementById("app").value.length < 3){
    todo_correcto = false;
}
if(isNaN(document.getElementById("cell").value) || (document.getElementById("cell").value.length)!=10 || document.getElementById("cell").value==null || document.getElementById("cell").value.length==0){
    todo_correcto = false;
}
if(!expresion.test(correo)){
    todo_correcto = false;
}
if(patron.test(document.getElementById("direc")).value || document.getElementById("direc").value==null || document.getElementById("direc").value.length==0 || /^\s+$/.test(document.getElementById("direc").value)||document.getElementById("direc").value.length < 3){
    todo_correcto = false;
}
if(patronUno.test(document.getElementById("usuario")).value || num.test(document.getElementById("usuario")).value || document.getElementById("usuario").value==null || document.getElementById("usuario").value.length==0 ||document.getElementById("usuario").value.length < 8){
	todo_correcto = false;
}
if(patron.test(document.getElementById("contra")).value || document.getElementById("contra").value==null || document.getElementById("contra").value.length==0 || /^\s+$/.test(document.getElementById("contra").value)||document.getElementById("contra").value.length < 8){
    todo_correcto = false;
}
if(!todo_correcto){
alert("Algunos campos no están correctos o llenos, vuelva a revisarlos");
todo_correcto = false;
	return false;
}
if(todo_correcto){
////alert("Datos validos");
	return todo_correcto;
	return true;
}

}


function vali(){

var todo_correcto = true;
var numUno = /[0-9]+/;
var numDos = /[0-9]+/;
var patronTres = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g;
var patronDos = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g;
var expresion = /^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i;
var correo = document.form1.correo.value;
	
if(isNaN(document.getElementById("ced").value) || (document.getElementById("ced").value.length)!=10){
    todo_correcto = false;
}
if(patronTres.test(document.getElementById("nom")).value || numUno.test(document.getElementById("nom")).value || document.getElementById("nom").value==null || document.getElementById("nom").value.length==0 || /^\s+$/.test(document.getElementById("nom").value)||document.getElementById("nom").value.length < 3){
    todo_correcto = false;
}
if(patronDos.test(document.getElementById("app")).value || numDos.test(document.getElementById("app")).value || document.getElementById("app").value==null || document.getElementById("app").value.length==0 || /^\s+$/.test(document.getElementById("app").value)||document.getElementById("app").value.length < 3){
    todo_correcto = false;
}
if(isNaN(document.getElementById("cell").value) || (document.getElementById("cell").value.length)!=10){
    todo_correcto = false;
}
if(!expresion.test(correo)){
    todo_correcto = false;
}
if(!todo_correcto){
alert("Algunos campos no están correctos o llenos, vuelva a revisarlos");
todo_correcto = false;
}
if(todo_correcto){
//alert("Datos del cliente validos");
}
return todo_correcto;
}
