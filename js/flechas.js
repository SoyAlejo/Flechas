alert("Asia?");
var teclas = {
	UP: 38,
	DOWN: 40,
	LEFT: 37,
	RIGHT: 39,
};
function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo) {
	lienzo.beginPath();
	lienzo.strokeStyle = color;
	lienzo.lineWidth = 3;
	lienzo.moveTo(xinicial, yinicial);
	lienzo.lineTo(xfinal, yfinal);
	lienzo.stroke();
	lienzo.closePath();
}
console.log(teclas);
document.addEventListener("keyup", dibujarTeclado);
var cuadro = document.getElementById("areaDeDibujo");
var papel = cuadro.getContext("2d");
var x = 300;
var y = 250;

dibujarLinea("black", -x, -y, x, y, papel);

function dibujarTeclado(evento) {
	var Color = "Black";
	var movimento = 8;
	switch (evento.keyCode) {
		case teclas.UP:
			dibujarLinea(Color, x, y, x, y - movimento, papel);
			y = y - movimento;
			break;
		case teclas.DOWN:
			dibujarLinea(Color, x, y, x, y + movimento, papel);
			y = y + movimento;
			break;
		case teclas.LEFT:
			dibujarLinea(Color, x, y, x - movimento, y, papel);
			x = x - movimento;
			break;
		case teclas.RIGHT:
			dibujarLinea(Color, x, y, x + movimento, y, papel);
			x = x + movimento;
			break;
	}
}
