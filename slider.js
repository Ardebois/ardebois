var slide = new Array(

	"https://raw.githubusercontent.com/Ardebois/ardebois/main/images/IMG-20200912-WA0020.jpg", 
	"https://raw.githubusercontent.com/Ardebois/ardebois/main/images/IMG-20220309-WA0001.jpg", 
	"https://raw.githubusercontent.com/Ardebois/ardebois/main/images/IMG_20220526_180352.jpg",
	"https://raw.githubusercontent.com/Ardebois/ardebois/main/images/IMG_20211223_192153.jpg",
	"https://raw.githubusercontent.com/Ardebois/ardebois/main/images/IMG-20211209-WA0007.jpg",
	"https://raw.githubusercontent.com/Ardebois/ardebois/main/images/IMG-20211209-WA0010.jpg",
	"https://raw.githubusercontent.com/Ardebois/ardebois/main/images/IMG-20220311-WA0004.jpg",
	"https://raw.githubusercontent.com/Ardebois/ardebois/main/images/IMG_20200205_195533.jpg",
	"https://raw.githubusercontent.com/Ardebois/ardebois/main/images/IMG_20200205_195539.jpg",
	"https://raw.githubusercontent.com/Ardebois/ardebois/main/images/IMG_20200224_163416.jpg",
	"https://raw.githubusercontent.com/Ardebois/ardebois/main/images/IMG_20200403_170055.jpg",
	"https://raw.githubusercontent.com/Ardebois/ardebois/main/images/IMG_20201114_114429.jpg",
	"https://raw.githubusercontent.com/Ardebois/ardebois/main/images/IMG_20201114_114504.jpg",
	"https://raw.githubusercontent.com/Ardebois/ardebois/main/images/IMG_20201202_153140.jpg",
	"https://raw.githubusercontent.com/Ardebois/ardebois/main/images/IMG_20201202_153147.jpg",
	"https://raw.githubusercontent.com/Ardebois/ardebois/main/images/IMG_20201221_080042.jpg",
	"https://raw.githubusercontent.com/Ardebois/ardebois/main/images/IMG_20201221_080106.jpg",
	"https://raw.githubusercontent.com/Ardebois/ardebois/main/images/IMG_20210404_111404.jpg",
	"https://raw.githubusercontent.com/Ardebois/ardebois/main/images/IMG_20211223_185723.jpg",
	"https://raw.githubusercontent.com/Ardebois/ardebois/main/images/IMG_20211223_185733.jpg",
	"https://raw.githubusercontent.com/Ardebois/ardebois/main/images/IMG_20220526_180331.jpg"
);






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