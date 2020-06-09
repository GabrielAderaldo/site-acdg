

//O menu não está funcionando direito ainda...
this.window.addEventListener("scroll",function(){

    
    var rad = this.document.querySelector("header");
    header.classList.toggle("menuReduzido",this.window.scrollY>0);
    this.console.log("Está descendo: "+ this.scrollY + "px");

    var logo = this.document.querySelector("logo");

    
    
    

    if(this.window.scrollY>120){
        header.style.padding = " 2px 3px";
        header.style.opacity = "0.8"
       

        
    }else{
        header.style.padding = "40px 100px";
        header.style.opacity = "1"
       
    }
   
});



function menuResponsive(){
    
}


