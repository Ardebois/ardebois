var slide = new Array("https://raw.githubusercontent.com/Ardebois/ardebois/main/images/IMG-20200912-WA0020.jpg", 
	"https://raw.githubusercontent.com/Ardebois/ardebois/main/images/IMG-20220309-WA0001.jpg", "https://raw.githubusercontent.com/Ardebois/ardebois/main/images/IMG_20220526_180352.jpg",
"https://raw.githubusercontent.com/Ardebois/ardebois/main/images/IMG_20211223_192153.jpg");

var numero = 0;

function ChangeSlide(sens) {
	numero = numero + sens;
	if (numero < 0)
		numero = slide.length - 1;
	if (numero > slide.length - 1)
		numero = 0;
	document.getElementById("slide").src = slide[numero];
}

setInterval("ChangeSlide(1)", 4000);