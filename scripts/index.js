
function navigation(){
    const nav = document.querySelector('.nav')
    const menu_button = document.querySelector('.menu_button')
    if(nav.id === "nav_open"){
        nav.id = "nav_close"
        nav.style.visibility = "hidden"
        menu_button.style.color = "black"
        menu_button.style.backgroundColor = "white"
        menu_button.style.border = "2.5px solid black"
        menu_button.innerHTML = "Menu"
        
    }
    else{
        nav.id = "nav_open"
        nav.style.visibility = "visible"
        menu_button.style.color = "white"
        menu_button.style.backgroundColor = "black"
        menu_button.style.border = "2.5px solid white"
        menu_button.innerHTML = "Close"
    }
}

