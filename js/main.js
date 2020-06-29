window.onload = ()=>{


(function btnMenu(){
	let btnMenu = document.getElementById('btn-menu')

	btnMenu.addEventListener('click', ()=>{

		btnMenu.classList.toggle('btn-menu-toggle')

		openCloseMenu()

	})

}())


function openCloseMenu(){

	let contentMenu = document.querySelector('.content-menu')

	contentMenu.classList.toggle('content-menu-toggle')

}


(function btnSubmenu(){

	let btnSubmenu = document.querySelectorAll('.btn-submenu')

	btnSubmenu.forEach( e=>{

		e.addEventListener('click',()=>{

			openCloseSubmenu(e)

		})

	})

}())


function openCloseSubmenu(btn){


	let submenu = btn.nextElementSibling

	if(submenu.style.maxHeight){

		submenu.style.maxHeight = null
		btn.classList.toggle('btn-submenu-active')

	}else{
		//verificar se há submenu aberto 

		submenus = document.querySelectorAll('.submenu')

		submenus.forEach((e,i)=>{
			//verifica o maxheight de cada submenu
			let altura = !!submenus[i].style.maxHeight

			if(altura){ //caso haja algum submenu aberto ele sera fechado

				submenus[i].style.maxHeight = null
				iconSubmenuFechado = submenus[i].previousElementSibling
				iconSubmenuFechado.classList.toggle('btn-submenu-active')

			}

		})


		submenu.style.maxHeight = submenu.scrollHeight+'px'
		btn.classList.toggle('btn-submenu-active')
	}
}






	

} 