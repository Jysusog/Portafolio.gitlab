window.addEventListener("scroll",function(){
    var nav = this.document.querySelector("nav");
    nav.classList.toggle("abajo",window.scrollY>0);
})