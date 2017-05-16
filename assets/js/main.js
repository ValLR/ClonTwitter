var cambiarTexto = function(){
	this.childNodes[1].childNodes[1].innerHTML= "comrades or capitalist pig?";
}


function main(){
	var ultimo = document.querySelector("#menu-principal ul li:last-child");
	ultimo.addEventListener("mouseover",function(){
		alert("holi estoy sobre el menu");
	});

	var menu = document.getElementById("menu-principal");
	menu.addEventListener("click", cambiarTexto);



	var div = document.getElementsByTagName("div")[0];
	div.addEventListener("click", cambiarTexto);

	var myInput = document.getElementById("mi-input");
	
	myInput.addEventListener("focus",function(){
		console.log("Entro al input");
	});

	myInput.addEventListener("blur",function(){
		console.log("salgo del input");
	})

	myInput.addEventListener("change",function(){
		console.log("Cambiando!");
	})
}
main();