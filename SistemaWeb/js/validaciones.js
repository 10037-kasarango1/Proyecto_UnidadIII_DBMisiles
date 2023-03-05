// JavaScript Document
function usuario(){
	if(document.getElementById("userName").value==null || document.getElementById("userName").value.length==0 || /^\s+$/.test(document.getElementById("userName").value)||document.getElementById("userName").value.length < 8 || !validacionString(document.getElementById("userName").value)||document.getElementById("userName").value.length >16){
		document.getElementById("userName").value="";
		alert("Error de usuario");
		document.getElementById("userName").focus();
	}else{
		
	}
}

function contraseña(){
var patron = /^[A-Za-z0-9 .,'!&]+$/;
	if(patron.test(document.getElementById("pass")).value || document.getElementById("pass").value==null || document.getElementById("pass").value.length==0 || /^\s+$/.test(document.getElementById("pass").value)||document.getElementById("pass").value.length < 8||document.getElementById("pass").value.length >20){
		document.getElementById("pass").value="";
		alert("Error de contraseña");
		document.getElementById("pass").focus();
	}else{
		
	}
}

function codigoPago(){
	var patron = /^[A-Za-z0-9 .,'!&]+$/;
	if(patron.test(document.getElementById("codPayment")).value || document.getElementById("codPayment").value==null || document.getElementById("codPayment").value.length==0 || /^\s+$/.test(document.getElementById("codPayment").value)||document.getElementById("codPayment").value.length < 4||document.getElementById("codPayment").value.length >10){
		document.getElementById("codPayment").value="";
		alert("Error de código de pago");
		document.getElementById("codPayment").focus();
	}else{
		
	}
}

function nombrePago(){
if(document.getElementById("NamePayment").value==null || document.getElementById("NamePayment").value.length==0 || /^\s+$/.test(document.getElementById("NamePayment").value)||document.getElementById("NamePayment").value.length < 3 || !validacionString(document.getElementById("NamePayment").value)||document.getElementById("NamePayment").value.length >12){
		document.getElementById("NamePayment").value="";
		alert("Error de nombre de pago	");
		document.getElementById("NamePayment").focus();
	}else{
		
	}
}

function descriPago(){
	var patron = /^[A-Za-z0-9 .,'!&]+$/;
	if(patron.test(document.getElementById("descriptionPayment")).value || document.getElementById("descriptionPayment").value==null || document.getElementById("descriptionPayment").value.length==0 || /^\s+$/.test(document.getElementById("descriptionPayment").value)||document.getElementById("descriptionPayment").value.length < 2||document.getElementById("descriptionPayment").value.length >999999999999999){
		document.getElementById("descriptionPayment").value="";
		alert("Error de descripción de pago");
		document.getElementById("descriptionPayment").focus();
	}else{
		
	}
}

function codigoCate(){
	var patron = /^[A-Za-z0-9 .,'!&]+$/;
	if(patron.test(document.getElementById("codCate")).value || document.getElementById("codCate").value==null || document.getElementById("codCate").value.length==0 || /^\s+$/.test(document.getElementById("codCate").value)||document.getElementById("codCate").value.length < 4||document.getElementById("codCate").value.length >10){
		document.getElementById("codCate").value="";
		alert("Error de código de categoria");
		document.getElementById("codCate").focus();
	}else{
		
	}
}

function nombreCate(){
if(document.getElementById("NameCategory").value==null || document.getElementById("NameCategory").value.length==0 || /^\s+$/.test(document.getElementById("NameCategory").value)||document.getElementById("NameCategory").value.length < 3 || !validacionString(document.getElementById("NameCategory").value)||document.getElementById("NameCategory").value.length >12){
		document.getElementById("NameCategory").value="";
		alert("Error de nombre de categoria");
		document.getElementById("NameCategory").focus();
	}else{
		
	}
}

function descriCate(){
	var patron = /^[A-Za-z0-9 .,'!&]+$/;
	if(patron.test(document.getElementById("descriptionCategory")).value || document.getElementById("descriptionCategory").value==null || document.getElementById("descriptionCategory").value.length==0 || /^\s+$/.test(document.getElementById("descriptionCategory").value)||document.getElementById("descriptionCategory").value.length < 2||document.getElementById("descriptionCategory").value.length >999999999999999){
		document.getElementById("descriptionCategory").value="";
		alert("Error de descripción de categoria");
		document.getElementById("descriptionCategory").focus();
	}else{
		
	}
}

function cedAdmin(){
	if(isNaN(document.getElementById("DNIAdmin").value) || (document.getElementById("DNIAdmin").value.length)!=10){
		document.getElementById("DNIAdmin").value="";
		alert("Error de cedula del administrador");
		document.getElementById("DNIAdmin").focus();
	}else{
		
	}
}

function nombreAdmin(){
if(document.getElementById("NameAdmin").value==null || document.getElementById("NameAdmin").value.length==0 || /^\s+$/.test(document.getElementById("NameAdmin").value)||document.getElementById("NameAdmin").value.length < 3 || !validacionString(document.getElementById("NameAdmin").value)){
		document.getElementById("NameAdmin").value="";
		alert("Error de nombre del administrador");
		document.getElementById("NameAdmin").focus();
	}else{
		
	}
}

function appAdmin(){
if(document.getElementById("LastNameAdmin").value==null || document.getElementById("LastNameAdmin").value.length==0 || /^\s+$/.test(document.getElementById("LastNameAdmin").value)||document.getElementById("LastNameAdmin").value.length < 3 || !validacionString(document.getElementById("LastNameAdmin").value)){
		document.getElementById("LastNameAdmin").value="";
		alert("Error de apellido del administrador");
		document.getElementById("LastNameAdmin").focus();
	}else{
		
	}
}

function cellAdmin(){
	if(isNaN(document.getElementById("phoneAdmin").value) || (document.getElementById("phoneAdmin").value.length)!=10){
		document.getElementById("phoneAdmin").value="";
		alert("Error de celular del administrador");
		document.getElementById("phoneAdmin").focus();
	}else{
		
	}
}

function correoAdmin(){
var expresion = /^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i;
var emailAdmin = document.form1.emailAdmin.value;
	if(!expresion.test(emailAdmin)){
		document.getElementById("emailAdmin").value="";
		alert("Error de correo del administrador");
		document.getElementById("emailAdmin").focus();
	}else{
		
	}
}

function direAdmin(){
	var patron = /^[A-Za-z0-9 .,'!&]+$/;
	if(patron.test(document.getElementById("addressAdmin")).value || document.getElementById("addressAdmin").value==null || document.getElementById("addressAdmin").value.length==0 || /^\s+$/.test(document.getElementById("addressAdmin").value)||document.getElementById("addressAdmin").value.length < 3){
		document.getElementById("addressAdmin").value="";
		alert("Error de direccion del administrador");
		document.getElementById("addressAdmin").focus();
	}else{
		
	}
}

function usuAdmin(){
	if(document.getElementById("UserNameAdmin").value==null || document.getElementById("UserNameAdmin").value.length==0 || /^\s+$/.test(document.getElementById("UserNameAdmin").value)||document.getElementById("UserNameAdmin").value.length < 8 || !validacionString(document.getElementById("UserNameAdmin").value)||document.getElementById("UserNameAdmin").value.length >16){
		document.getElementById("UserNameAdmin").value="";
		alert("Error de usuario de administrador");
		document.getElementById("UserNameAdmin").focus();
	}else{
		
	}
}

function contAdmin(){
var patron = /^[A-Za-z0-9 .,'!&]+$/;
	if(patron.test(document.getElementById("passwordAdmin")).value || document.getElementById("passwordAdmin").value==null || document.getElementById("passwordAdmin").value.length==0 || /^\s+$/.test(document.getElementById("passwordAdmin").value)||document.getElementById("passwordAdmin").value.length < 8||document.getElementById("passwordAdmin").value.length >20){
		document.getElementById("passwordAdmin").value="";
		alert("Error de contraseña de administrador");
		document.getElementById("passwordAdmin").focus();
	}else{
		
	}
}

function cedTra(){
	if(isNaN(document.getElementById("DNITra").value) || (document.getElementById("DNITra").value.length)!=10){
		document.getElementById("DNITra").value="";
		alert("Error de cedula del trabajador");
		document.getElementById("DNITra").focus();
	}else{
		
	}
}

function nombreTra(){
if(document.getElementById("NameTra").value==null || document.getElementById("NameTra").value.length==0 || /^\s+$/.test(document.getElementById("NameTra").value)||document.getElementById("NameTra").value.length < 3 || !validacionString(document.getElementById("NameTra").value)){
		document.getElementById("NameTra").value="";
		alert("Error de nombre del trabajador");
		document.getElementById("NameTra").focus();
	}else{
		
	}
}

function appTra(){
if(document.getElementById("LastNameTra").value==null || document.getElementById("LastNameTra").value.length==0 || /^\s+$/.test(document.getElementById("LastNameTra").value)||document.getElementById("LastNameTra").value.length < 3 || !validacionString(document.getElementById("LastNameTra").value)){
		document.getElementById("LastNameTra").value="";
		alert("Error de apellido del trabajador");
		document.getElementById("LastNameTra").focus();
	}else{
		
	}
}

function cellTra(){
	if(isNaN(document.getElementById("phoneTra").value) || (document.getElementById("phoneTra").value.length)!=10){
		document.getElementById("phoneTra").value="";
		alert("Error de celular del trabajador");
		document.getElementById("phoneTra").focus();
	}else{
		
	}
}

function correoTra(){
var expresion = /^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i;
var emailTra = document.form1.emailTra.value;
	if(!expresion.test(emailTra)){
		document.getElementById("emailTra").value="";
		alert("Error de correo del trabajador");
		document.getElementById("emailTra").focus();
	}else{
		
	}
}

function direTra(){
	var patron = /^[A-Za-z0-9 .,'!&]+$/;
	if(patron.test(document.getElementById("addressTra")).value || document.getElementById("addressTra").value==null || document.getElementById("addressTra").value.length==0 || /^\s+$/.test(document.getElementById("addressTra").value)||document.getElementById("addressTra").value.length < 3){
		document.getElementById("addressTra").value="";
		alert("Error de direccion del trabajador");
		document.getElementById("addressTra").focus();
	}else{
		
	}
}

function usuTra(){
	if(document.getElementById("UserNameTra").value==null || document.getElementById("UserNameTra").value.length==0 || /^\s+$/.test(document.getElementById("UserNameTra").value)||document.getElementById("UserNameTra").value.length < 8 || !validacionString(document.getElementById("UserNameTra").value)||document.getElementById("UserNameTra").value.length >16){
		document.getElementById("UserNameTra").value="";
		alert("Error de usuario de trabajador");
		document.getElementById("UserNameTra").focus();
	}else{
		
	}
}

function contTra(){
var patron = /^[A-Za-z0-9 .,'!&]+$/;
	if(patron.test(document.getElementById("passwordTra")).value || document.getElementById("passwordTra").value==null || document.getElementById("passwordTra").value.length==0 || /^\s+$/.test(document.getElementById("passwordTra").value)||document.getElementById("passwordTra").value.length < 8||document.getElementById("passwordTra").value.length >20){
		document.getElementById("passwordTra").value="";
		alert("Error de contraseña de trabajador");
		document.getElementById("passwordTra").focus();
	}else{
		
	}
}

function cedCli(){
	if(isNaN(document.getElementById("DNIClient").value) || (document.getElementById("DNIClient").value.length)!=10){
		document.getElementById("DNIClient").value="";
		alert("Error de cedula del cliente");
		document.getElementById("DNIClient").focus();
	}else{
		
	}
}

function nombreCli(){
if(document.getElementById("NameClient").value==null || document.getElementById("NameClient").value.length==0 || /^\s+$/.test(document.getElementById("NameClient").value)||document.getElementById("NameClient").value.length < 3 || !validacionString(document.getElementById("NameClient").value)){
		document.getElementById("NameClient").value="";
		alert("Error de nombre del cliente");
		document.getElementById("NameClient").focus();
	}else{
		
	}
}

function appCli(){
if(document.getElementById("LastNameClient").value==null || document.getElementById("LastNameClient").value.length==0 || /^\s+$/.test(document.getElementById("LastNameClient").value)||document.getElementById("LastNameClient").value.length < 3 || !validacionString(document.getElementById("LastNameClient").value)){
		document.getElementById("LastNameClient").value="";
		alert("Error de apellido del cliente");
		document.getElementById("LastNameClient").focus();
	}else{
		
	}
}

function direCli(){
	var patron = /^[A-Za-z0-9 .,'!&]+$/;
	if(patron.test(document.getElementById("addressClient1")).value || document.getElementById("addressClient1").value==null || document.getElementById("addressClient1").value.length==0 || /^\s+$/.test(document.getElementById("addressClient1").value)||document.getElementById("addressClient1").value.length < 3){
		document.getElementById("addressClient1").value="";
		alert("Error de direccion del cliente");
		document.getElementById("addressClient1").focus();
	}else{
		
	}
}

function cellCli(){
	if(isNaN(document.getElementById("phoneClient").value) || (document.getElementById("phoneClient").value.length)!=10){
		document.getElementById("phoneClient").value="";
		alert("Error de celular del cliente");
		document.getElementById("phoneClient").focus();
	}else{
		
	}
}

function correoCli(){
var expresion = /^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i;
var emailClient = document.form1.emailClient.value;
	if(!expresion.test(emailClient)){
		document.getElementById("emailClient").value="";
		alert("Error de correo del cliente");
		document.getElementById("emailClient").focus();
	}else{
		
	}
}

function planCli(){
if(document.getElementById("planClient").value==null || document.getElementById("planClient").value.length==0 || /^\s+$/.test(document.getElementById("planClient").value)||document.getElementById("planClient").value.length < 3 || !validacionString(document.getElementById("planClient").value)){
		document.getElementById("planClient").value="";
		alert("Error de codigo del plan");
		document.getElementById("planClient").focus();
	}else{
		
	}
}

function metCli(){
if(document.getElementById("metClient").value==null || document.getElementById("metClient").value.length==0 || /^\s+$/.test(document.getElementById("metClient").value)||document.getElementById("metClient").value.length < 3 || !validacionString(document.getElementById("metClient").value)){
		document.getElementById("metClient").value="";
		alert("Error de codigo del metodo de pago");
		document.getElementById("metClient").focus();
	}else{
		
	}
}

function codPro(){
	var patron = /^[A-Za-z0-9 .,'!&]+$/;
	if(patron.test(document.getElementById("BarCode")).value || document.getElementById("BarCode").value==null || document.getElementById("BarCode").value.length==0 || /^\s+$/.test(document.getElementById("BarCode").value)||document.getElementById("BarCode").value.length < 4||document.getElementById("BarCode").value.length >10){
		document.getElementById("BarCode").value="";
		alert("Error de código del producto");
		document.getElementById("BarCode").focus();
	}else{
		
	}
}

function nombrePro(){
	var patron = /^[A-Za-z0-9 .,'!&]+$/;
	if(patron.test(document.getElementById("NameProduct")).value || document.getElementById("NameProduct").value==null || document.getElementById("NameProduct").value.length==0 || /^\s+$/.test(document.getElementById("NameProduct").value)||document.getElementById("NameProduct").value.length < 4||document.getElementById("NameProduct").value.length >20){
		document.getElementById("NameProduct").value="";
		alert("Error de nombre del producto");
		document.getElementById("NameProduct").focus();
	}else{
		
	}
}

function prePro(){
	if(isNaN(document.getElementById("PriceProduct").value) || (document.getElementById("PriceProduct").value.length)< 1){
		document.getElementById("PriceProduct").value="";
		alert("Error de precio del producto");
		document.getElementById("PriceProduct").focus();
	}else{
		
	}
}

function desPro(){
	if(isNaN(document.getElementById("discountProduct").value) || (document.getElementById("discountProduct").value.length)< 1){
		document.getElementById("discountProduct").value="";
		alert("Error de descuento del producto");
		document.getElementById("discountProduct").focus();
	}else{
		
	}
}

function descrPro(){
	var patron = /^[A-Za-z0-9 .,'!&]+$/;
	if(patron.test(document.getElementById("DescProduct")).value || document.getElementById("DescProduct").value==null || document.getElementById("DescProduct").value.length==0 || /^\s+$/.test(document.getElementById("DescProduct").value)||document.getElementById("DescProduct").value.length < 2||document.getElementById("DescProduct").value.length >999999999999999){
		document.getElementById("DescProduct").value="";
		alert("Error de descripción del producto");
		document.getElementById("DescProduct").focus();
	}else{
		
	}
}

var isAlpha = function(ch){

	if( (ch >= "a" && ch <= "z" || ch >= "A" && ch <= "Z" || ch == " ") ){
		
		return true;
		
	}else
		return false;
}

function validacionString(cadena){
	let bandera = true;
	for (let i = 0, len = cadena.length; i < len; i++) {

		bandera = isAlpha(cadena.charAt(i));
		if (bandera==false){

			return false;
		}
	}
	return true;
}

function validar(){
	
var todo_correcto = true;
var patron = /^[A-Za-z0-9 .,'!&]+$/;
if(document.getElementById("userName").value==null || document.getElementById("userName").value.length==0 || /^\s+$/.test(document.getElementById("userName").value)||document.getElementById("userName").value.length <= 3 || !validacionString(document.getElementById("userName").value)||document.getElementById("userName").value.length >16){
    todo_correcto = false;
}
if(patron.test(document.getElementById("pass")).value || document.getElementById("pass").value==null || document.getElementById("pass").value.length==0 || /^\s+$/.test(document.getElementById("pass").value)||document.getElementById("pass").value.length < 8||document.getElementById("pass").value.length >20){
    todo_correcto = false;
}
if(!todo_correcto){
alert("Algunos campos no están correctos o llenos, vuelva a revisarlos");
}

return todo_correcto;
}

function validar1(){
	
var todo_correcto = true;
var patron = /^[A-Za-z0-9 .,'!&]+$/;
if(patron.test(document.getElementById("codPayment")).value || document.getElementById("codPayment").value==null || document.getElementById("codPayment").value.length==0 || /^\s+$/.test(document.getElementById("codPayment").value)||document.getElementById("codPayment").value.length < 4||document.getElementById("codPayment").value.length >10){
    todo_correcto = false;
}
if(document.getElementById("NamePayment").value==null || document.getElementById("NamePayment").value.length==0 || /^\s+$/.test(document.getElementById("NamePayment").value)||document.getElementById("NamePayment").value.length < 3 || !validacionString(document.getElementById("NamePayment").value)||document.getElementById("NamePayment").value.length >12){
    todo_correcto = false;
}
if(patron.test(document.getElementById("descriptionPayment")).value || document.getElementById("descriptionPayment").value==null || document.getElementById("descriptionPayment").value.length==0 || /^\s+$/.test(document.getElementById("descriptionPayment").value)||document.getElementById("descriptionPayment").value.length < 2||document.getElementById("descriptionPayment").value.length >999999999999999){
    todo_correcto = false;
}
if(!todo_correcto){
alert("Algunos campos no están correctos o llenos, vuelva a revisarlos");
}

return todo_correcto;
}

function validar2(){
	
var todo_correcto = true;
var patron = /^[A-Za-z0-9 .,'!&]+$/;
if(patron.test(document.getElementById("codCate")).value || document.getElementById("codCate").value==null || document.getElementById("codCate").value.length==0 || /^\s+$/.test(document.getElementById("codCate").value)||document.getElementById("codCate").value.length < 4||document.getElementById("codCate").value.length >10){
    todo_correcto = false;
}
if(document.getElementById("NameCategory").value==null || document.getElementById("NameCategory").value.length==0 || /^\s+$/.test(document.getElementById("NameCategory").value)||document.getElementById("NameCategory").value.length < 3 || !validacionString(document.getElementById("NameCategory").value)||document.getElementById("NameCategory").value.length >12){
    todo_correcto = false;
}
if(patron.test(document.getElementById("descriptionCategory")).value || document.getElementById("descriptionCategory").value==null || document.getElementById("descriptionCategory").value.length==0 || /^\s+$/.test(document.getElementById("descriptionCategory").value)||document.getElementById("descriptionCategory").value.length < 2||document.getElementById("descriptionCategory").value.length >999999999999999){
    todo_correcto = false;
}
if(!todo_correcto){
alert("Algunos campos no están correctos o llenos, vuelva a revisarlos");
}

return todo_correcto;
}

function validar3(){
	
var todo_correcto = true;
var expresion = /^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i;
var emailAdmin = document.form1.emailAdmin.value;
var patron = /^[A-Za-z0-9 .,'!&]+$/;
if(isNaN(document.getElementById("DNIAdmin").value) || (document.getElementById("DNIAdmin").value.length)!=10){
    todo_correcto = false;
}
if(document.getElementById("NameAdmin").value==null || document.getElementById("NameAdmin").value.length==0 || /^\s+$/.test(document.getElementById("NameAdmin").value)||document.getElementById("NameAdmin").value.length < 3 || !validacionString(document.getElementById("NameAdmin").value)){
    todo_correcto = false;
}
if(document.getElementById("LastNameAdmin").value==null || document.getElementById("LastNameAdmin").value.length==0 || /^\s+$/.test(document.getElementById("LastNameAdmin").value)||document.getElementById("LastNameAdmin").value.length < 3 || !validacionString(document.getElementById("LastNameAdmin").value)){
    todo_correcto = false;
}
if(isNaN(document.getElementById("phoneAdmin").value) || (document.getElementById("phoneAdmin").value.length)!=10){
    todo_correcto = false;
}
if(!expresion.test(emailAdmin)){
    todo_correcto = false;
}
if(patron.test(document.getElementById("addressAdmin")).value || document.getElementById("addressAdmin").value==null || document.getElementById("addressAdmin").value.length==0 || /^\s+$/.test(document.getElementById("addressAdmin").value)||document.getElementById("addressAdmin").value.length < 3){
    todo_correcto = false;
}
if(document.getElementById("UserNameAdmin").value==null || document.getElementById("UserNameAdmin").value.length==0 || /^\s+$/.test(document.getElementById("UserNameAdmin").value)||document.getElementById("UserNameAdmin").value.length < 8 || !validacionString(document.getElementById("UserNameAdmin").value)||document.getElementById("UserNameAdmin").value.length >16){
    todo_correcto = false;
}
if(patron.test(document.getElementById("passwordAdmin")).value || document.getElementById("passwordAdmin").value==null || document.getElementById("passwordAdmin").value.length==0 || /^\s+$/.test(document.getElementById("passwordAdmin").value)||document.getElementById("passwordAdmin").value.length < 8||document.getElementById("passwordAdmin").value.length >20){
    todo_correcto = false;
}
if(!todo_correcto){
alert("Algunos campos no están correctos o llenos, vuelva a revisarlos");
}

return todo_correcto;
}

function validar4(){
	
var todo_correcto = true;
var expresion = /^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i;
var emailTra = document.form1.emailTra.value;
var patron = /^[A-Za-z0-9 .,'!&]+$/;
if(isNaN(document.getElementById("DNITra").value) || (document.getElementById("DNITra").value.length)!=10){
    todo_correcto = false;
}
if(document.getElementById("NameTra").value==null || document.getElementById("NameTra").value.length==0 || /^\s+$/.test(document.getElementById("NameTra").value)||document.getElementById("NameTra").value.length < 3 || !validacionString(document.getElementById("NameTra").value)){
    todo_correcto = false;
}
if(document.getElementById("LastNameTra").value==null || document.getElementById("LastNameTra").value.length==0 || /^\s+$/.test(document.getElementById("LastNameTra").value)||document.getElementById("LastNameTra").value.length < 3 || !validacionString(document.getElementById("LastNameTra").value)){
    todo_correcto = false;
}
if(isNaN(document.getElementById("phoneTra").value) || (document.getElementById("phoneTra").value.length)!=10){
    todo_correcto = false;
}
if(!expresion.test(emailTra)){
    todo_correcto = false;
}
if(patron.test(document.getElementById("addressTra")).value || document.getElementById("addressTra").value==null || document.getElementById("addressTra").value.length==0 || /^\s+$/.test(document.getElementById("addressTra").value)||document.getElementById("addressTra").value.length < 3){
    todo_correcto = false;
}
if(document.getElementById("UserNameTra").value==null || document.getElementById("UserNameTra").value.length==0 || /^\s+$/.test(document.getElementById("UserNameTra").value)||document.getElementById("UserNameTra").value.length < 8 || !validacionString(document.getElementById("UserNameTra").value)||document.getElementById("UserNameTra").value.length >16){
    todo_correcto = false;
}
if(patron.test(document.getElementById("passwordTra")).value || document.getElementById("passwordTra").value==null || document.getElementById("passwordTra").value.length==0 || /^\s+$/.test(document.getElementById("passwordTra").value)||document.getElementById("passwordTra").value.length < 8||document.getElementById("passwordTra").value.length >20){
    todo_correcto = false;
}
if(!todo_correcto){
alert("Algunos campos no están correctos o llenos, vuelva a revisarlos");
}

return todo_correcto;
}

function validar5(){
	
var todo_correcto = true;
var patron = /^[A-Za-z0-9 .,'!&]+$/;
var expresion = /^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i;
var emailClient = document.form1.emailClient.value;

if(isNaN(document.getElementById("DNIClient").value) || (document.getElementById("DNIClient").value.length)!=10){
    todo_correcto = false;
}
if(document.getElementById("NameClient").value==null || document.getElementById("NameClient").value.length==0 || /^\s+$/.test(document.getElementById("NameClient").value)||document.getElementById("NameClient").value.length < 3 || !validacionString(document.getElementById("NameClient").value)){
    todo_correcto = false;
}
if(document.getElementById("LastNameClient").value==null || document.getElementById("LastNameClient").value.length==0 || /^\s+$/.test(document.getElementById("LastNameClient").value)||document.getElementById("LastNameClient").value.length < 3 || !validacionString(document.getElementById("LastNameClient").value)){
    todo_correcto = false;
}
if(patron.test(document.getElementById("addressClient1")).value || document.getElementById("addressClient1").value==null || document.getElementById("addressClient1").value.length==0 || /^\s+$/.test(document.getElementById("addressClient1").value)||document.getElementById("addressClient1").value.length < 3){
    todo_correcto = false;
}
if(isNaN(document.getElementById("phoneClient").value) || (document.getElementById("phoneClient").value.length)!=10){
    todo_correcto = false;
}
if(!expresion.test(emailClient)){
    todo_correcto = false;
}
if(document.getElementById("planClient").value==null || document.getElementById("planClient").value.length==0 || /^\s+$/.test(document.getElementById("planClient").value)||document.getElementById("planClient").value.length < 3 || !validacionString(document.getElementById("planClient").value)){
    todo_correcto = false;
}
if(document.getElementById("metClient").value==null || document.getElementById("metClient").value.length==0 || /^\s+$/.test(document.getElementById("metClient").value)||document.getElementById("metClient").value.length < 3 || !validacionString(document.getElementById("metClient").value)){
    todo_correcto = false;
}
if(!todo_correcto){
alert("Algunos campos no están correctos o llenos, vuelva a revisarlos");
}

return todo_correcto;
}

function validar6(){
	
var todo_correcto = true;
var patron = /^[A-Za-z0-9 .,'!&]+$/;


if(patron.test(document.getElementById("BarCode")).value || document.getElementById("BarCode").value==null || document.getElementById("BarCode").value.length==0 || /^\s+$/.test(document.getElementById("BarCode").value)||document.getElementById("BarCode").value.length < 4||document.getElementById("BarCode").value.length >10){
    todo_correcto = false;
}
if(patron.test(document.getElementById("NameProduct")).value || document.getElementById("NameProduct").value==null || document.getElementById("NameProduct").value.length==0 || /^\s+$/.test(document.getElementById("NameProduct").value)||document.getElementById("NameProduct").value.length < 4||document.getElementById("NameProduct").value.length >20){
    todo_correcto = false;
}
if(isNaN(document.getElementById("PriceProduct").value) || (document.getElementById("PriceProduct").value.length)< 1){
    todo_correcto = false;
}
if(isNaN(document.getElementById("discountProduct").value) || (document.getElementById("discountProduct").value.length)< 1){
    todo_correcto = false;
}
if(!todo_correcto){
alert("Algunos campos no están correctos o llenos, vuelva a revisarlos");
}

return todo_correcto;
}