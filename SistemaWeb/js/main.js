$(document).ready(function(){
	/*Mostrar ocultar area de notificaciones*/
	$('.btn-Notification').on('click', function(){
        var ContainerNoty=$('.container-notifications');
        var NotificationArea=$('.NotificationArea');
        if(NotificationArea.hasClass('NotificationArea-show')&&ContainerNoty.hasClass('container-notifications-show')){
            NotificationArea.removeClass('NotificationArea-show');
            ContainerNoty.removeClass('container-notifications-show');
        }else{
            NotificationArea.addClass('NotificationArea-show');
            ContainerNoty.addClass('container-notifications-show');
        }
    });
    /*Mostrar ocultar menu principal*/
    $('.btn-menu').on('click', function(){
var navLateral=$('.navLateral');
var pageContent=$('.pageContent');
var navOption=$('.navBar-options');
if(navLateral.hasClass('navLateral-change')&&pageContent.hasClass('pageContent-change')){
navLateral.removeClass('navLateral-change');
pageContent.removeClass('pageContent-change');
navOption.removeClass('navBar-options-change');
}else{
navLateral.addClass('navLateral-change');
pageContent.addClass('pageContent-change');
navOption.addClass('navBar-options-change');
}
    });
    /*Salir del sistema*/
     $(document).on("click",".btn-exit",function() {//$('.btn-exit').on('click', function(){
   swal({
title: '¿Seguro que quiere salir del sistema?',
text: "La sesión actual se cerrará y abandonará el sistema.",
type: 'warning',
showCancelButton: true,
confirmButtonText: 'Salir',
cancelButtonText: 'Cancelar',
closeOnConfirm: false
},
function(isConfirm) {
if (isConfirm) {
sessionStorage.clear();

window.location='../index.html'; 
}
		});
    });
	/*Boton eliminar*/
     $(document).on("click",".btn-elim",function() {//$('.btn-elim').on('click', function(){
   swal({
title: '¿Seguro que quiere eliminar?',
text: "Se la eliminará de la lista",
type: 'warning',
showCancelButton: true,
confirmButtonText: 'Eliminar',
cancelButtonText: 'Cancelar',
closeOnConfirm: false
},
function(isConfirm) {
if (isConfirm) {
//window.location='../index.html'; 
}
	});
    });
/*Boton editar*/
 $(document).on("click",".btn-editar",function() {//$('.btn-editar').on('click', function(){
   swal({
title: 'Editar',
text: "Se seleccionó correctamente el elemento, editalo y guarda los cambios",
//type: 'warning',
cancelButtonText: 'Ok',
},
function(isConfirm) {
if (isConfirm) {
closeOnConfirm: false;
//window.location='../index.html'; 
}
		});
    });
/*Boton ver*/
  /* $(document).on("click",".btn-ver",function() {// $('.btn-ver').on('click', function(){
   swal({
title: 'Ver',
//text: "Se la eliminará de la lista",
//type: 'warning',
confirmButtonText: 'Ok',
},
function(isConfirm) {
if (isConfirm) {
//window.location='../index.html'; 
closeOnConfirm: false;
}
		});
    });
	*/
	/*Boton Seleccionar cliente*/
     $(document).on("click",".btn-sCli",function() {//$('.btn-sCli').on('click', function(){
   swal({
title: 'Seleccionar',
text: "El cliente actual se seleccionara",

},
function(isConfirm) {
if (isConfirm) {
//window.location='../index.html'; 
}
		});
    });
	/*Boton Seleccionar plan*/
     $(document).on("click",".btn-sPlan",function() {//$('.btn-sPlan').on('click', function(){
   swal({
title: '¿Seguro que quiere seleccionar el plan?',
text: "El plan actual se seleccionara",
type: 'warning',
showCancelButton: true,
confirmButtonText: 'Ok',
cancelButtonText: 'Cancelar',
closeOnConfirm: false
},
function(isConfirm) {

if (isConfirm) {
//window.location='../index.html'; 
}
		});
    });
/*Mostrar y ocultar submenus*/
$('.btn-subMenu').on('click', function(){
var subMenu=$(this).next('ul');
var icon=$(this).children("span");
if(subMenu.hasClass('sub-menu-options-show')){
subMenu.removeClass('sub-menu-options-show');
icon.addClass('zmdi-chevron-left').removeClass('zmdi-chevron-down');
}else{
subMenu.addClass('sub-menu-options-show');
icon.addClass('zmdi-chevron-down').removeClass('zmdi-chevron-left');
}
    });
});
(function($){
    $(window).load(function(){
        $(".navLateral-body, .NotificationArea, .pageContent").mCustomScrollbar({
            theme:"dark-thin",
            scrollbarPosition: "inside",
            autoHideScrollbar: true,
            scrollButtons:{ enable: true }
        });
    });
})(jQuery);