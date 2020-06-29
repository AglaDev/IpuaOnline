window.onload = ()=>{


function btnMenu(){
	let btnMenu = document.getElementById('btn-menu')

	btnMenu.addEventListener('click', ()=>{

		btnMenu.classList.toggle('btn-menu-toggle')

		openCloseMenu()

	})

}


function openCloseMenu(){

	let contentMenu = document.querySelector('.content-menu')

	contentMenu.classList.toggle('content-menu-toggle')

}


btnMenu()	
	

} 