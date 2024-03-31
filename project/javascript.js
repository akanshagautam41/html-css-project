function btn(){
    window.scroll({
        top : "0",
        behavior : "smooth"
        
        
    })
   
}

// read more scripting starting

function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }
 
  function read() {
    var dots = document.getElementById("dot");
    var moreText = document.getElementById("mo");
    var btnText = document.getElementById("Btn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }

  function page() {
    var dots = document.getElementById("wrd");
    var moreText = document.getElementById("mor");
    var btnText = document.getElementById("Bt");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }

  function blog() {
    var dots = document.getElementById("tgt");
    var moreText = document.getElementById("dol");
    var btnText = document.getElementById("read");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }


  function bng() {
    var dots = document.getElementById("fun");
    var moreText = document.getElementById("tex");
    var btnText = document.getElementById("bnt");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }
  function bl() {
    var dots = document.getElementById("tt");
    var moreText = document.getElementById("wd");
    var btnText = document.getElementById("rd");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }
// read more scripting end

// nav sticky script

var header = document.querySelector("header");
var cl = document.querySelectorAll(".clr");

window.addEventListener("scroll",function(){

    if(window.scrollY > 120)
    {
       header.classList.add("nw");
    //    cl.classList.add("clr")
    }
    else{
        header.classList.remove("nw")
        // cl.classList.remove("clr")
    }
})
// nav sticky script end

// nav script 


            var bar =document.getElementById("bar");
            var menu =document.getElementById("menu");
            

            function navbar(){
                menu.classList.toggle("hide");
               
            }
           
        
// nav script end




