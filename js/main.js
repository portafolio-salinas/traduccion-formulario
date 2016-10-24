//funcion para cambiar el titulo del formulario
function inicio () {
	var primera = document.getElementById('form-signin-heading');
	var pedir = "Por favor iniciar sesión";
	primera.innerHTML = pedir;
}
inicio();
//cambiar el primer placeholder
function cambiar () {
	var segunda = document.getElementById('inputEmail').placeholder = "Correo electrónico";
}
cambiar();
//tranformar el segundo placeholder
function transformar () {
	var tercera = document.getElementById('inputPassword').placeholder = "Contaseña";
}
transformar();
//traducir si recuerda la contraseña
function traducir () {
	var cuarta = document.getElementsByTagName('SPAN')[0];
	cuarta.textContent = "Recordar datos";
}
traducir();
//modificar la frase del boton
function modificar () {
	var quinta = document.getElementsByTagName('BUTTON')[0];
	quinta.innerHTML = "Iniciar Sesión";
}
modificar();