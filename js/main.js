window.onload = ()=>{

	//Animações do botão do menu

(function Menu(){ 

	let btnMenu = document.getElementById('btn-menu')
	let menu = document.querySelector('.content-menu')

	openCloseMenu(btnMenu,menu)	

}())

//função responsavel de abrir e fechar o menu e mudar o botão
function openCloseMenu(btnmenu,menu){

	btnmenu.addEventListener('click',()=>{

		btnmenu.classList.toggle('btn-menu-toggle')

		menu.classList.toggle('content-menu-toggle')



	})

}


	
	

} 