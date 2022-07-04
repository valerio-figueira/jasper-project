const mobile = document.querySelector(".icon");
const navbar = document.querySelector(".navbar");

mobile.addEventListener("click", openNav);

function openNav(){
    if(navbar.className === "navbar"){
        navbar.className += " mobile-nav";
    } else{
        navbar.className = "navbar";
    }
}

document.querySelectorAll(".parallax")[0].style.backgroundImage = "url('https://images.unsplash.com/photo-1573781592737-a7691af27e71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')";

document.querySelectorAll(".parallax")[1].style.backgroundImage = "url('https://images.unsplash.com/photo-1598896176085-f6d4ab8c6c7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=713&q=80')";
document.querySelectorAll(".parallax")[1].style.backgroundPosition = "center";


const post = document.querySelectorAll("section")[2];
const collection = document.querySelectorAll("section")[2].children;

for(let item of collection){
    item.style.background = "#000000c3";
}

post.style.display = "flex";
post.style.flexDirection = "column";