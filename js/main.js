window.onload = ()=>{

	//Animações do botão do menu

(function btnMenu(){ 

	var btnMenu = document.getElementById('btn-menu')

	openCloseMenu(btnMenu)	

}())

//função responsavel de abrir e fechar o menu e mudar o botão
function openCloseMenu(btnmenu){

	btnmenu.addEventListener('click',()=>{

		btnmenu.classList.toggle('btn-menu-toggle')



	})

}


	
	

} 