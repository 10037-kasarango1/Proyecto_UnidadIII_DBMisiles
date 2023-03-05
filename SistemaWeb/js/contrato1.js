
function cargarClientes() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      funcion1(this);
    }
  };
  xhttp.open("GET", "../archivos_planos/clientes.xml", true);
  xhttp.send();
}

function funcion1(xml) {
  var i;
  var id=0;

  var table='<div class="mdl-cell mdl-cell--4-col-phone mdl-cell--8-col-tablet mdl-cell--12-col-desktop"><table class="mdl-data-table mdl-js-data-table mdl-shadow--2dp full-width table-responsive"><thead><tr><th class="mdl-data-table__cell--non-numeric">C.I/RUC</th><th>Nombre</th><th>Apellido</th><th>Direccion</th><th>Celular</th><th>Correo</th><th>Estado</th><th>Opciones</th></tr></thead>'
  var xmlDoc2 = json2xml(JSON.parse(localStorage.getItem('datosclientes')));
  var parser = new DOMParser();
  var xmlDoc = parser.parseFromString(xmlDoc2,"text/xml");

  var x = xmlDoc.getElementsByTagName("DATOS");
  
  for (i = 0; i <x.length; i++) { 

    table += '<tr><td class="mdl-data-table__cell--non-numeric">'+
	x[i].getElementsByTagName("CEDULA")[0].childNodes[0].nodeValue +'</td><td>'
	+x[i].getElementsByTagName("NOMBRE")[0].childNodes[0].nodeValue+'</td><td>'
	+x[i].getElementsByTagName("APELLIDO")[0].childNodes[0].nodeValue +'</td><td>'
	+x[i].getElementsByTagName("DIRECCION")[0].childNodes[0].nodeValue +'</td><td>'	
	+x[i].getElementsByTagName("CELULAR")[0].childNodes[0].nodeValue +'</td><td>'	
	+x[i].getElementsByTagName("CORREO")[0].childNodes[0].nodeValue +'</td><td>'
	+x[i].getElementsByTagName("ESTADO")[0].childNodes[0].nodeValue +'</td><td>'	
	+'<button value="Seleccionar" title="Seleccionar" class="btn-sCli" for="btn-sCli"'+` id="usuarionumero${id}"`+` onclick="crearContrato(this)"`+'>Seleccionar</button></td>'+'</td></tr>'	
	id++;
  }
  document.getElementById("tablaClientes").innerHTML = table;
}
function crearContrato(e){
	id = e.id.replace(/\D/g,'');
	var xmlDoc2 = json2xml(JSON.parse(localStorage.getItem('datosclientes')));
	var parser = new DOMParser();
	var data = parser.parseFromString(xmlDoc2,"text/xml");
	var x = data.getElementsByTagName("DATOS");
	document.getElementById("ced").value = x[id].getElementsByTagName("CEDULA")[0].childNodes[0].nodeValue;
	document.getElementById("nom").value = x[id].getElementsByTagName("NOMBRE")[0].childNodes[0].nodeValue;
	document.getElementById("app").value = x[id].getElementsByTagName("APELLIDO")[0].childNodes[0].nodeValue;
	document.getElementById("cell").value = x[id].getElementsByTagName("CELULAR")[0].childNodes[0].nodeValue;
	document.getElementById("correo").value = x[id].getElementsByTagName("CORREO")[0].childNodes[0].nodeValue;
	document.getElementById("direc").value = x[id].getElementsByTagName("DIRECCION")[0].childNodes[0].nodeValue;
	var estadocampo = document.getElementById('estado');
	estadocampo.options[estadocampo.selectedIndex].value = x[id].getElementsByTagName("ESTADO")[0].childNodes[0].nodeValue;
	my_special_setting = id;


}
var preciointer=0;
var preciotele=0;
var preciotv=0;

function calculosinternet(){
	var internet=document.getElementById('internet').options[document.getElementById('internet').selectedIndex].text;
	if(internet == "No"){
		document.getElementById("preciointernet").value = 0;
	}else if(internet == "Básico"){
		document.getElementById("preciointernet").value = 11;
	}else if(internet == "Medio"){
		document.getElementById("preciointernet").value = 18;
	}else if(internet == "Súper"){
		document.getElementById("preciointernet").value = 25;
	}
	calculosservicios();
}

function calculostelef(){
	var telef=document.getElementById('telef').options[document.getElementById('telef').selectedIndex].text;
	if(telef == "No"){
		document.getElementById("preciotelef").value = 0;
	}else if(telef == "Básico"){
		document.getElementById("preciotelef").value = 5;
	}else if(telef == "Medio"){
		document.getElementById("preciotelef").value = 8;
	}else if(telef == "Súper"){
		document.getElementById("preciotelef").value = 12;
	}
	calculosservicios();
}

function calculostv(){
	var tv=document.getElementById('tv').options[document.getElementById('tv').selectedIndex].text;
	if(tv == "No"){
		document.getElementById("preciotv").value = 0;
	}else if(tv == "Básico"){
		document.getElementById("preciotv").value = 9;
	}else if(tv == "Medio"){
		document.getElementById("preciotv").value = 14;
	}else if(tv == "Súper"){
		document.getElementById("preciotv").value = 21;
	}
	calculosservicios();
}

function calculosservicios(){
	var tv=document.getElementById('tv').options[document.getElementById('tv').selectedIndex].text;
	var telef=document.getElementById('telef').options[document.getElementById('telef').selectedIndex].text;
	var internet=document.getElementById('internet').options[document.getElementById('internet').selectedIndex].text;
	
	var preciotv=0,preciotelef=0,preciointernet=0;
	var descuento = 0;
	var preciofinal = 0;
	if(tv == "No"){
		preciotv = 0;
	}else if(tv == "Básico"){
		preciotv = 9;
	}else if(tv == "Medio"){
		preciotv = 14;
	}else if(tv == "Súper"){
		preciotv = 21;
	}
	
	if(telef == "No"){
		preciotelef = 0;
	}else if(telef == "Básico"){
		preciotelef = 5;
	}else if(telef == "Medio"){
		preciotelef = 8;
	}else if(telef == "Súper"){
		preciotelef = 12;
	}
	
	if(internet == "No"){
		preciointernet = 0;
	}else if(internet == "Básico"){
		preciointernet = 11;
	}else if(internet == "Medio"){
		preciointernet = 18;
	}else if(internet == "Súper"){
		preciointernet = 25;
	}
	if(preciointernet != 0 && preciotelef != 0 && preciotv != 0){
		descuento = 0.15;
	}else if((preciointernet != 0 && preciotv != 0)|| (preciointernet != 0 && preciotelef != 0) || (preciotelef != 0 && preciotv != 0)){
		descuento = 0.08;	 
	}else if(preciointernet != 0 || preciotv != 0 || preciotelef !=0){
		descuento = 0;	 
	}
	document.getElementById("descuento").value = descuento;
	precioservicios = Number(preciotv+preciointernet+preciotelef);	
	document.getElementById("precioservicios").value = precioservicios;
	preciofinal = precioservicios - precioservicios * descuento;
	document.getElementById("preciofinal").value = preciofinal;

}

function guardarContrato(){

var x2js = new X2JS();
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
if (xhttp.readyState === 4) {
if (this.status == 200){
if (this.status == 200){

var xmlDoc2 = json2xml(JSON.parse(localStorage.getItem('datoscontratos')));
var parser = new DOMParser();
var data = parser.parseFromString(xmlDoc2,"text/xml");

	
//something like this
var x = data.getElementsByTagName("DATOS");
	id=x.length;
	var datosxml = xhttp.responseText;

	var cedula = document.getElementById("ced").value;
	var nombre = document.getElementById("nom").value;
	var apellido = document.getElementById("app").value;
	var celular= document.getElementById("cell").value;
	var correo= document.getElementById("correo").value;
	var direccion= document.getElementById("direc").value;
	
	
	var plantv=document.getElementById('tv').options[document.getElementById('tv').selectedIndex].text;
	var preciotv= document.getElementById("preciotv").value;
	var plantelef=document.getElementById('telef').options[document.getElementById('telef').selectedIndex].text;
	var preciotelef= document.getElementById("preciotelef").value;

	var planinternet=document.getElementById('internet').options[document.getElementById('internet').selectedIndex].text;
	
	var preciointernet= document.getElementById("preciointernet").value;
	var preciosindescuento = document.getElementById("precioservicios").value;
	var descuento = document.getElementById("descuento").value;
	var preciofinal = document.getElementById("preciofinal").value;
	
	var estadocampo = document.getElementById('estado');
	var estado = estadocampo.options[estadocampo.selectedIndex].value;
	
	var table="";
	
	var DATOS = data.createElement("DATOS");
	var title = data.createElement("CEDULA");
	title.appendChild(data.createTextNode(cedula));
	var NOMBRE = data.createElement("NOMBRE");
	NOMBRE.appendChild(data.createTextNode(nombre));
	var APELLIDO = data.createElement("APELLIDO");
	APELLIDO.appendChild(data.createTextNode(apellido));
	var CELULAR = data.createElement("CELULAR");
	
	CELULAR.appendChild(data.createTextNode(celular));
	var CORREO = data.createElement("CORREO");
	CORREO.appendChild(data.createTextNode(correo));
	var DIRECCION = data.createElement("DIRECCION");
	DIRECCION.appendChild(data.createTextNode(direccion));
	var PLANTV = data.createElement("PLANTV");
	PLANTV.appendChild(data.createTextNode(plantv));
	var PRECIOTV = data.createElement("PRECIOTV");
	PRECIOTV.appendChild(data.createTextNode(preciotv));
	var PLANTELEF = data.createElement("PLANTELEF");
	
	PLANTELEF.appendChild(data.createTextNode(plantelef));
	var PRECIOTELEF = data.createElement("PRECIOTELEF");
	PRECIOTELEF.appendChild(data.createTextNode(preciotelef));
	var PLANINTERNET = data.createElement("PLANINTERNET");
	PLANINTERNET.appendChild(data.createTextNode(planinternet));
	var PRECIOINTERNET = data.createElement("PRECIOINTERNET");
	
	PRECIOINTERNET.appendChild(data.createTextNode(preciointernet));
	
	var PRECIOSINDESCUENTO = data.createElement("PRECIOSINDESCUENTO");
	PRECIOSINDESCUENTO.appendChild(data.createTextNode(preciosindescuento));
	
	var DESCUENTO = data.createElement("DESCUENTO");
	
	DESCUENTO.appendChild(data.createTextNode(descuento));
	var PRECIOFINAL = data.createElement("PRECIOFINAL");
	PRECIOFINAL.appendChild(data.createTextNode(preciofinal));
	
	
	var ESTADO = data.createElement("ESTADO");
	ESTADO.appendChild(data.createTextNode(estado));

	var ID= data.createElement("ID");
	ID.appendChild(data.createTextNode(id));
	
	DATOS.appendChild(title);
    DATOS.appendChild(NOMBRE);
	DATOS.appendChild(APELLIDO);
	DATOS.appendChild(CELULAR);
	DATOS.appendChild(CORREO);
	DATOS.appendChild(DIRECCION);
	DATOS.appendChild(PLANTV);
	DATOS.appendChild(PRECIOTV);
	DATOS.appendChild(PLANTELEF);
	DATOS.appendChild(PRECIOTELEF);
	DATOS.appendChild(PLANINTERNET);
	DATOS.appendChild(PRECIOINTERNET);
	DATOS.appendChild(PRECIOSINDESCUENTO);
	DATOS.appendChild(DESCUENTO);
	DATOS.appendChild(PRECIOFINAL);
	DATOS.appendChild(ESTADO);
	DATOS.appendChild(ID);
	
	
	
	
	data.getElementsByTagName("CATALOG")[0].appendChild(DATOS);
	var x = data.getElementsByTagName("DATOS");
	  for (i = 0; i <x.length; i++) { 


  }

	var jsonText = JSON.stringify(xmlToJson(data));
	localStorage.setItem('datoscontratos', jsonText);
	localStorage.setItem('datosxml', datosxml);
	
	var archivoxml = json2xml(JSON.parse(localStorage.getItem('datoscontratos')));

	var filename = "file.xml";
var pom = document.createElement('a');
var bb = new Blob([archivoxml], {type: 'text/plain'});
pom.setAttribute('href', window.URL.createObjectURL(bb));
pom.setAttribute('download', filename);

pom.dataset.downloadurl = ['text/plain', pom.download, pom.href].join(':');
pom.draggable = true; 
pom.classList.add('dragout');

pom.click();
}
}    
}

  };
  xhttp.open("GET", "../archivos_planos/clientes.xml", true);
  xhttp.send();

}
//Librerias para convertir de xml a json y viceversa
(function (root, factory) {
     if (typeof define === "function" && define.amd) {
         define([], factory);
     } else if (typeof exports === "object") {
         module.exports = factory();
     } else {
         root.X2JS = factory();
     }
 }(this, function () {
	return function (config) {
		'use strict';
			
		var VERSION = "1.2.0";
		
		config = config || {};
		initConfigDefaults();
		initRequiredPolyfills();
		
		function initConfigDefaults() {
			if(config.escapeMode === undefined) {
				config.escapeMode = true;
			}
			
			config.attributePrefix = config.attributePrefix || "_";
			config.arrayAccessForm = config.arrayAccessForm || "none";
			config.emptyNodeForm = config.emptyNodeForm || "text";		
			
			if(config.enableToStringFunc === undefined) {
				config.enableToStringFunc = true; 
			}
			config.arrayAccessFormPaths = config.arrayAccessFormPaths || []; 
			if(config.skipEmptyTextNodesForObj === undefined) {
				config.skipEmptyTextNodesForObj = true;
			}
			if(config.stripWhitespaces === undefined) {
				config.stripWhitespaces = true;
			}
			config.datetimeAccessFormPaths = config.datetimeAccessFormPaths || [];
	
			if(config.useDoubleQuotes === undefined) {
				config.useDoubleQuotes = false;
			}
			
			config.xmlElementsFilter = config.xmlElementsFilter || [];
			config.jsonPropertiesFilter = config.jsonPropertiesFilter || [];
			
			if(config.keepCData === undefined) {
				config.keepCData = false;
			}
		}
	
		var DOMNodeTypes = {
			ELEMENT_NODE 	   : 1,
			TEXT_NODE    	   : 3,
			CDATA_SECTION_NODE : 4,
			COMMENT_NODE	   : 8,
			DOCUMENT_NODE 	   : 9
		};
		
		function initRequiredPolyfills() {		
		}
		
		function getNodeLocalName( node ) {
			var nodeLocalName = node.localName;			
			if(nodeLocalName == null) // Yeah, this is IE!! 
				nodeLocalName = node.baseName;
			if(nodeLocalName == null || nodeLocalName=="") // =="" is IE too
				nodeLocalName = node.nodeName;
			return nodeLocalName;
		}
		
		function getNodePrefix(node) {
			return node.prefix;
		}
			
		function escapeXmlChars(str) {
			if(typeof(str) == "string")
				return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');
			else
				return str;
		}
	
		function unescapeXmlChars(str) {
			return str.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&apos;/g, "'").replace(/&amp;/g, '&');
		}
		
		function checkInStdFiltersArrayForm(stdFiltersArrayForm, obj, name, path) {
			var idx = 0;
			for(; idx < stdFiltersArrayForm.length; idx++) {
				var filterPath = stdFiltersArrayForm[idx];
				if( typeof filterPath === "string" ) {
					if(filterPath == path)
						break;
				}
				else
				if( filterPath instanceof RegExp) {
					if(filterPath.test(path))
						break;
				}				
				else
				if( typeof filterPath === "function") {
					if(filterPath(obj, name, path))
						break;
				}
			}
			return idx!=stdFiltersArrayForm.length;
		}
		
		function toArrayAccessForm(obj, childName, path) {
			switch(config.arrayAccessForm) {
				case "property":
					if(!(obj[childName] instanceof Array))
						obj[childName+"_asArray"] = [obj[childName]];
					else
						obj[childName+"_asArray"] = obj[childName];
					break;
				/*case "none":
					break;*/
			}
			
			if(!(obj[childName] instanceof Array) && config.arrayAccessFormPaths.length > 0) {
				if(checkInStdFiltersArrayForm(config.arrayAccessFormPaths, obj, childName, path)) {
					obj[childName] = [obj[childName]];
				}			
			}
		}
		
		function fromXmlDateTime(prop) {
			// Implementation based up on http://stackoverflow.com/questions/8178598/xml-datetime-to-javascript-date-object
			// Improved to support full spec and optional parts
			var bits = prop.split(/[-T:+Z]/g);
			
			var d = new Date(bits[0], bits[1]-1, bits[2]);			
			var secondBits = bits[5].split("\.");
			d.setHours(bits[3], bits[4], secondBits[0]);
			if(secondBits.length>1)
				d.setMilliseconds(secondBits[1]);
	
			// Get supplied time zone offset in minutes
			if(bits[6] && bits[7]) {
				var offsetMinutes = bits[6] * 60 + Number(bits[7]);
				var sign = /\d\d-\d\d:\d\d$/.test(prop)? '-' : '+';
	
				// Apply the sign
				offsetMinutes = 0 + (sign == '-'? -1 * offsetMinutes : offsetMinutes);
	
				// Apply offset and local timezone
				d.setMinutes(d.getMinutes() - offsetMinutes - d.getTimezoneOffset())
			}
			else
				if(prop.indexOf("Z", prop.length - 1) !== -1) {
					d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate(), d.getHours(), d.getMinutes(), d.getSeconds(), d.getMilliseconds()));					
				}
	
			// d is now a local time equivalent to the supplied time
			return d;
		}
		
		function checkFromXmlDateTimePaths(value, childName, fullPath) {
			if(config.datetimeAccessFormPaths.length > 0) {
				var path = fullPath.split("\.#")[0];
				if(checkInStdFiltersArrayForm(config.datetimeAccessFormPaths, value, childName, path)) {
					return fromXmlDateTime(value);
				}
				else
					return value;			
			}
			else
				return value;
		}
		
		function checkXmlElementsFilter(obj, childType, childName, childPath) {
			if( childType == DOMNodeTypes.ELEMENT_NODE && config.xmlElementsFilter.length > 0) {
				return checkInStdFiltersArrayForm(config.xmlElementsFilter, obj, childName, childPath);	
			}
			else
				return true;
		}	
	
		function parseDOMChildren( node, path ) {
			if(node.nodeType == DOMNodeTypes.DOCUMENT_NODE) {
				var result = new Object;
				var nodeChildren = node.childNodes;
				// Alternative for firstElementChild which is not supported in some environments
				for(var cidx=0; cidx <nodeChildren.length; cidx++) {
					var child = nodeChildren.item(cidx);
					if(child.nodeType == DOMNodeTypes.ELEMENT_NODE) {
						var childName = getNodeLocalName(child);
						result[childName] = parseDOMChildren(child, childName);
					}
				}
				return result;
			}
			else
			if(node.nodeType == DOMNodeTypes.ELEMENT_NODE) {
				var result = new Object;
				result.__cnt=0;
				
				var nodeChildren = node.childNodes;
				
				// Children nodes
				for(var cidx=0; cidx <nodeChildren.length; cidx++) {
					var child = nodeChildren.item(cidx); // nodeChildren[cidx];
					var childName = getNodeLocalName(child);
					
					if(child.nodeType!= DOMNodeTypes.COMMENT_NODE) {
						var childPath = path+"."+childName;
						if (checkXmlElementsFilter(result,child.nodeType,childName,childPath)) {
							result.__cnt++;
							if(result[childName] == null) {
								result[childName] = parseDOMChildren(child, childPath);
								toArrayAccessForm(result, childName, childPath);					
							}
							else {
								if(result[childName] != null) {
									if( !(result[childName] instanceof Array)) {
										result[childName] = [result[childName]];
										toArrayAccessForm(result, childName, childPath);
									}
								}
								(result[childName])[result[childName].length] = parseDOMChildren(child, childPath);
							}
						}
					}								
				}
				
				// Attributes
				for(var aidx=0; aidx <node.attributes.length; aidx++) {
					var attr = node.attributes.item(aidx); // [aidx];
					result.__cnt++;
					result[config.attributePrefix+attr.name]=attr.value;
				}
				
				// Node namespace prefix
				var nodePrefix = getNodePrefix(node);
				if(nodePrefix!=null && nodePrefix!="") {
					result.__cnt++;
					result.__prefix=nodePrefix;
				}
				
				if(result["#text"]!=null) {				
					result.__text = result["#text"];
					if(result.__text instanceof Array) {
						result.__text = result.__text.join("\n");
					}
					//if(config.escapeMode)
					//	result.__text = unescapeXmlChars(result.__text);
					if(config.stripWhitespaces)
						result.__text = result.__text.trim();
					delete result["#text"];
					if(config.arrayAccessForm=="property")
						delete result["#text_asArray"];
					result.__text = checkFromXmlDateTimePaths(result.__text, childName, path+"."+childName);
				}
				if(result["#cdata-section"]!=null) {
					result.__cdata = result["#cdata-section"];
					delete result["#cdata-section"];
					if(config.arrayAccessForm=="property")
						delete result["#cdata-section_asArray"];
				}
				
				if( result.__cnt == 0 && config.emptyNodeForm=="text" ) {
					result = '';
				}
				else
				if( result.__cnt == 1 && result.__text!=null  ) {
					result = result.__text;
				}
				else
				if( result.__cnt == 1 && result.__cdata!=null && !config.keepCData  ) {
					result = result.__cdata;
				}			
				else			
				if ( result.__cnt > 1 && result.__text!=null && config.skipEmptyTextNodesForObj) {
					if( (config.stripWhitespaces && result.__text=="") || (result.__text.trim()=="")) {
						delete result.__text;
					}
				}
				delete result.__cnt;			
				
				if( config.enableToStringFunc && (result.__text!=null || result.__cdata!=null )) {
					result.toString = function() {
						return (this.__text!=null? this.__text:'')+( this.__cdata!=null ? this.__cdata:'');
					};
				}
				
				return result;
			}
			else
			if(node.nodeType == DOMNodeTypes.TEXT_NODE || node.nodeType == DOMNodeTypes.CDATA_SECTION_NODE) {
				return node.nodeValue;
			}	
		}
		
		function startTag(jsonObj, element, attrList, closed) {
			var resultStr = "<"+ ( (jsonObj!=null && jsonObj.__prefix!=null)? (jsonObj.__prefix+":"):"") + element;
			if(attrList!=null) {
				for(var aidx = 0; aidx < attrList.length; aidx++) {
					var attrName = attrList[aidx];
					var attrVal = jsonObj[attrName];
					if(config.escapeMode)
						attrVal=escapeXmlChars(attrVal);
					resultStr+=" "+attrName.substr(config.attributePrefix.length)+"=";
					if(config.useDoubleQuotes)
						resultStr+='"'+attrVal+'"';
					else
						resultStr+="'"+attrVal+"'";
				}
			}
			if(!closed)
				resultStr+=">";
			else
				resultStr+="/>";
			return resultStr;
		}
		
		function endTag(jsonObj,elementName) {
			return "</"+ (jsonObj.__prefix!=null? (jsonObj.__prefix+":"):"")+elementName+">";
		}
		
		function endsWith(str, suffix) {
			return str.indexOf(suffix, str.length - suffix.length) !== -1;
		}
		
		function jsonXmlSpecialElem ( jsonObj, jsonObjField ) {
			if((config.arrayAccessForm=="property" && endsWith(jsonObjField.toString(),("_asArray"))) 
					|| jsonObjField.toString().indexOf(config.attributePrefix)==0 
					|| jsonObjField.toString().indexOf("__")==0
					|| (jsonObj[jsonObjField] instanceof Function) )
				return true;
			else
				return false;
		}
		
		function jsonXmlElemCount ( jsonObj ) {
			var elementsCnt = 0;
			if(jsonObj instanceof Object ) {
				for( var it in jsonObj  ) {
					if(jsonXmlSpecialElem ( jsonObj, it) )
						continue;			
					elementsCnt++;
				}
			}
			return elementsCnt;
		}
		
		function checkJsonObjPropertiesFilter(jsonObj, propertyName, jsonObjPath) {
			return config.jsonPropertiesFilter.length == 0
				|| jsonObjPath==""
				|| checkInStdFiltersArrayForm(config.jsonPropertiesFilter, jsonObj, propertyName, jsonObjPath);	
		}
		
		function parseJSONAttributes ( jsonObj ) {
			var attrList = [];
			if(jsonObj instanceof Object ) {
				for( var ait in jsonObj  ) {
					if(ait.toString().indexOf("__")== -1 && ait.toString().indexOf(config.attributePrefix)==0) {
						attrList.push(ait);
					}
				}
			}
			return attrList;
		}
		
		function parseJSONTextAttrs ( jsonTxtObj ) {
			var result ="";
			
			if(jsonTxtObj.__cdata!=null) {										
				result+="<![CDATA["+jsonTxtObj.__cdata+"]]>";					
			}
			
			if(jsonTxtObj.__text!=null) {			
				if(config.escapeMode)
					result+=escapeXmlChars(jsonTxtObj.__text);
				else
					result+=jsonTxtObj.__text;
			}
			return result;
		}
		
		function parseJSONTextObject ( jsonTxtObj ) {
			var result ="";
	
			if( jsonTxtObj instanceof Object ) {
				result+=parseJSONTextAttrs ( jsonTxtObj );
			}
			else
				if(jsonTxtObj!=null) {
					if(config.escapeMode)
						result+=escapeXmlChars(jsonTxtObj);
					else
						result+=jsonTxtObj;
				}
			
			return result;
		}
		
		function getJsonPropertyPath(jsonObjPath, jsonPropName) {
			if (jsonObjPath==="") {
				return jsonPropName;
			}
			else
				return jsonObjPath+"."+jsonPropName;
		}
		
		function parseJSONArray ( jsonArrRoot, jsonArrObj, attrList, jsonObjPath ) {
			var result = ""; 
			if(jsonArrRoot.length == 0) {
				result+=startTag(jsonArrRoot, jsonArrObj, attrList, true);
			}
			else {
				for(var arIdx = 0; arIdx < jsonArrRoot.length; arIdx++) {
					result+=startTag(jsonArrRoot[arIdx], jsonArrObj, parseJSONAttributes(jsonArrRoot[arIdx]), false);
					result+=parseJSONObject(jsonArrRoot[arIdx], getJsonPropertyPath(jsonObjPath,jsonArrObj));
					result+=endTag(jsonArrRoot[arIdx],jsonArrObj);
				}
			}
			return result;
		}
		
		function parseJSONObject ( jsonObj, jsonObjPath ) {
			var result = "";	
	
			var elementsCnt = jsonXmlElemCount ( jsonObj );
			
			if(elementsCnt > 0) {
				for( var it in jsonObj ) {
					
					if(jsonXmlSpecialElem ( jsonObj, it) || (jsonObjPath!="" && !checkJsonObjPropertiesFilter(jsonObj, it, getJsonPropertyPath(jsonObjPath,it))) )
						continue;			
					
					var subObj = jsonObj[it];						
					
					var attrList = parseJSONAttributes( subObj )
					
					if(subObj == null || subObj == undefined) {
						result+=startTag(subObj, it, attrList, true);
					}
					else
					if(subObj instanceof Object) {
						
						if(subObj instanceof Array) {					
							result+=parseJSONArray( subObj, it, attrList, jsonObjPath );					
						}
						else if(subObj instanceof Date) {
							result+=startTag(subObj, it, attrList, false);
							result+=subObj.toISOString();
							result+=endTag(subObj,it);
						}
						else {
							var subObjElementsCnt = jsonXmlElemCount ( subObj );
							if(subObjElementsCnt > 0 || subObj.__text!=null || subObj.__cdata!=null) {
								result+=startTag(subObj, it, attrList, false);
								result+=parseJSONObject(subObj, getJsonPropertyPath(jsonObjPath,it));
								result+=endTag(subObj,it);
							}
							else {
								result+=startTag(subObj, it, attrList, true);
							}
						}
					}
					else {
						result+=startTag(subObj, it, attrList, false);
						result+=parseJSONTextObject(subObj);
						result+=endTag(subObj,it);
					}
				}
			}
			result+=parseJSONTextObject(jsonObj);
			
			return result;
		}
		
		this.parseXmlString = function(xmlDocStr) {
			var isIEParser = window.ActiveXObject || "ActiveXObject" in window;
			if (xmlDocStr === undefined) {
				return null;
			}
			var xmlDoc;
			if (window.DOMParser) {
				var parser=new window.DOMParser();			
				var parsererrorNS = null;
				// IE9+ now is here
				if(!isIEParser) {
					try {
						parsererrorNS = parser.parseFromString("INVALID", "text/xml").getElementsByTagName("parsererror")[0].namespaceURI;
					}
					catch(err) {					
						parsererrorNS = null;
					}
				}
				try {
					xmlDoc = parser.parseFromString( xmlDocStr, "text/xml" );
					if( parsererrorNS!= null && xmlDoc.getElementsByTagNameNS(parsererrorNS, "parsererror").length > 0) {
						//throw new Error('Error parsing XML: '+xmlDocStr);
						xmlDoc = null;
					}
				}
				catch(err) {
					xmlDoc = null;
				}
			}
			else {
				// IE :(
				if(xmlDocStr.indexOf("<?")==0) {
					xmlDocStr = xmlDocStr.substr( xmlDocStr.indexOf("?>") + 2 );
				}
				xmlDoc=new ActiveXObject("Microsoft.XMLDOM");
				xmlDoc.async="false";
				xmlDoc.loadXML(xmlDocStr);
			}
			return xmlDoc;
		};
		
		this.asArray = function(prop) {
			if (prop === undefined || prop == null)
				return [];
			else
			if(prop instanceof Array)
				return prop;
			else
				return [prop];
		};
		
		this.toXmlDateTime = function(dt) {
			if(dt instanceof Date)
				return dt.toISOString();
			else
			if(typeof(dt) === 'number' )
				return new Date(dt).toISOString();
			else	
				return null;
		};
		
		this.asDateTime = function(prop) {
			if(typeof(prop) == "string") {
				return fromXmlDateTime(prop);
			}
			else
				return prop;
		};
	
		this.xml2json = function (xmlDoc) {
			return parseDOMChildren ( xmlDoc );
		};
		
		this.xml_str2json = function (xmlDocStr) {
			var xmlDoc = this.parseXmlString(xmlDocStr);
			if(xmlDoc!=null)
				return this.xml2json(xmlDoc);
			else
				return null;
		};
	
		this.json2xml_str = function (jsonObj) {
			return parseJSONObject ( jsonObj, "" );
		};
	
		this.json2xml = function (jsonObj) {
			var xmlDocStr = this.json2xml_str (jsonObj);
			return this.parseXmlString(xmlDocStr);
		};
		
		this.getVersion = function () {
			return VERSION;
		};	
	}
}))


/*	This work is licensed under Creative Commons GNU LGPL License.

	License: http://creativecommons.org/licenses/LGPL/2.1/
   Version: 0.9
	Author:  Stefan Goessner/2006
	Web:     http://goessner.net/ 
*/
function json2xml(o, tab) {
   var toXml = function(v, name, ind) {
      var xml = "";
      if (v instanceof Array) {
         for (var i=0, n=v.length; i<n; i++)
            xml += ind + toXml(v[i], name, ind+"\t") + "\n";
      }
      else if (typeof(v) == "object") {
         var hasChild = false;
         xml += ind + "<" + name;
         for (var m in v) {
            if (m.charAt(0) == "@")
               xml += " " + m.substr(1) + "=\"" + v[m].toString() + "\"";
            else
               hasChild = true;
         }
         xml += hasChild ? ">" : "/>";
         if (hasChild) {
            for (var m in v) {
               if (m == "#text")
                  xml += v[m];
               else if (m == "#cdata")
                  xml += "<![CDATA[" + v[m] + "]]>";
               else if (m.charAt(0) != "@")
                  xml += toXml(v[m], m, ind+"\t");
            }
            xml += (xml.charAt(xml.length-1)=="\n"?ind:"") + "</" + name + ">";
         }
      }
      else {
         xml += ind + "<" + name + ">" + v.toString() +  "</" + name + ">";
      }
      return xml;
   }, xml="";
   for (var m in o)
      xml += toXml(o[m], m, "");
   return tab ? xml.replace(/\t/g, tab) : xml.replace(/\t|\n/g, "");
}






// Changes XML to JSON
function xmlToJson(xml) {
	
	// Create the return object
	var obj = {};

	if (xml.nodeType == 1) { // element
		// do attributes
		if (xml.attributes.length > 0) {
		obj["@attributes"] = {};
			for (var j = 0; j < xml.attributes.length; j++) {
				var attribute = xml.attributes.item(j);
				obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
			}
		}
	} else if (xml.nodeType == 3) { // text
		obj = xml.nodeValue;
	}

	// do children
	if (xml.hasChildNodes()) {
		for(var i = 0; i < xml.childNodes.length; i++) {
			var item = xml.childNodes.item(i);
			var nodeName = item.nodeName;
			if (typeof(obj[nodeName]) == "undefined") {
				obj[nodeName] = xmlToJson(item);
			} else {
				if (typeof(obj[nodeName].push) == "undefined") {
					var old = obj[nodeName];
					obj[nodeName] = [];
					obj[nodeName].push(old);
				}
				obj[nodeName].push(xmlToJson(item));
			}
		}
	}
	return obj;
};