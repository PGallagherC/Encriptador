function importarMensaje() {
	return document.getElementById("areaText").value.toLowerCase();
}

function Copiar(){
	navigator.clipboard.writeText(document.getElementById("mensajeFinal").value);
	alert("El mensaje ha sido copiado");
}

function revisar(text) {
	let mensaje = text.replace(/[^a-zA-Z ]/g, "");
	if (mensaje != text)
	{
		alert("Se eliminaron los caracteres invalidos de su mensaje");
		return mensaje;
	}
	else
	{
		return mensaje;
	}
}

function mostrarCopiar() {
	document.getElementById('Copiar').style.display = 'block';
	document.getElementById('mensajeFinal').style.display = 'block';
	document.getElementById('diamante').style.display = 'none';
}

function mostrar(mensaje) {
	document.querySelector(".mensajeFinal").innerHTML = mensaje;
}

function Encriptar() {
	let mensaje = revisar(importarMensaje());
	mensaje = mensaje.split("e").join("enter");
	mensaje = mensaje.split("i").join("imes");
	mensaje = mensaje.split("a").join("ai");
	mensaje = mensaje.split("o").join("ober");
	mensaje = mensaje.split("u").join("ufat");
	mostrarCopiar();
	mostrar(mensaje);
}

function Desencriptar() {
	let mensaje = revisar(importarMensaje());
	mensaje = mensaje.split("enter").join("e");
	mensaje = mensaje.split("imes").join("i");
	mensaje = mensaje.split("ai").join("a");
	mensaje = mensaje.split("ober").join("o");
	mensaje = mensaje.split("ufat").join("u");
	mostrar(mensaje);
}