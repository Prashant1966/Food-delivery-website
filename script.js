let menu= documentselector('#menu-bars');
let navbar= document.querySelector('.navbar');

menu.onclick =() =>{
    menu.classic.toggle('fa-times');
    navbar.classic.toggle('active');
}