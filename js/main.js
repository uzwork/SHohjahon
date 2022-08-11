let body = document.querySelector("body ")
let p = document.querySelector("p ")
let s = document.querySelector("s ")
let city = document.querySelector(".city ")
let iclass1 = document.querySelector(".iclass1 ")
let iclass2 = document.querySelector(".iclass2 ")
let iclass3 = document.querySelector(".iclass3 ")
let iclass4 = document.querySelector(".iclass4 ")
let iclass5 = document.querySelector(".iclass5 ")
let iclass6 = document.querySelector(".iclass6 ")
let h5ta = document.querySelector(".h5ta ")
let h5sa = document.querySelector(".h5sa ")
let h5na = document.querySelector(".h5na ")
let h5su = document.querySelector(".h5su ")
let h5qa = document.querySelector(".h5qa ")
let h5bu = document.querySelector(".h5bu ")
let h5nv = document.querySelector(".h5nv ")
let h5ji = document.querySelector(".h5ji ")
let h5fa = document.querySelector(".h5fa ")
let h5an = document.querySelector(".h5an ")
let h5xo = document.querySelector(".h5xo ")
let cityh6 = document.querySelector(".cityh6 ")
let cit = document.querySelector(".cit ")
let tourism = document.querySelector(".tourism ")
let tourismh6 = document.querySelector(".tourismh6 ")
let touris = document.querySelector(".touris ")
let h11 = document.querySelector(".h11 ")
let h12 = document.querySelector(".h12 ")
let h13 = document.querySelector(".h13 ")
let h14 = document.querySelector(".h14 ")
let h15 = document.querySelector(".h15 ")
let h16 = document.querySelector(".h16 ")
let samarqand = document.querySelector(".samarqand ")
let andijan = document.querySelector(".andijan ")
let tashkent = document.querySelector(".tashkent ")
let buxoro = document.querySelector(".buxoro ")
let qashqadaryo = document.querySelector(".qashqadaryo ")
let jizzax = document.querySelector(".jizzax ")
let sun = document.querySelector(".bxs-sun ")
let moon = document.querySelector(".bxs-moon ")
let hotel = document.querySelector(".bxs-hotel ")
let taxi = document.querySelector(".bx-taxi")
let home = document.querySelector(".bxs-home")
let restaurant = document.querySelector(".bx-restaurant")
let hospital = document.querySelector(".bx-plus-medical")
let mechanic = document.querySelector(".bxs-car-mechanic")
let gas = document.querySelector(".bxs-gas-pump")
let plane = document.querySelector(".bxs-plane")
let bus = document.querySelector(".bxs-bus")
let back = document.querySelector(".room")
hotel.addEventListener("mousemove", function() {
    hotel.style.color = "lime"
})
hotel.addEventListener("mouseleave", function() {
    hotel.style.color = "black"
})
home.addEventListener("mousemove", function() {
    home.style.color = "lime"
    p.style.marginTop = "0px"
    p.style.textShadow = "5px 5px 1px #3a3a3a,-5px -5px 1px #3a3a3a,-5px 5px 1px #3a3a3a,1px -5px 5px #3a3a3a"
})
home.addEventListener("mouseleave", function() {
    home.style.color = "black"
    p.style.marginTop = "-58px"
})
restaurant.addEventListener("mousemove", function() {
    restaurant.style.color = "lime"
})
restaurant.addEventListener("mouseleave", function() {
    restaurant.style.color = "black"
})
hospital.addEventListener("mousemove", function() {
    hospital.style.color = "lime"
})
hospital.addEventListener("mouseleave", function() {
    hospital.style.color = "black"
})
mechanic.addEventListener("mousemove", function() {
    mechanic.style.color = "lime"
})
mechanic.addEventListener("mouseleave", function() {
    mechanic.style.color = "black"
})
gas.addEventListener("mousemove", function() {
    gas.style.color = "lime"
})
gas.addEventListener("mouseleave", function() {
    gas.style.color = "black"
})
plane.addEventListener("mousemove", function() {
    plane.style.color = "lime"
})
plane.addEventListener("mouseleave", function() {
    plane.style.color = "black"
})
sun.addEventListener("click", function() {
    body.style.background = "url(../img/home1.jpg)"
    body.style.backgroundSize = "cover"
    body.style.backgroundAttachment = "fixed"
    moon.style.fontSize = "2rem"
    moon.style.background = "limegreen"
    moon.style.width = "40px"
    moon.style.height = "40px"
    moon.style.borderRadius = "6px"
    sun.style.fontSize = "0"
    sun.style.background = "none"
    sun.style.width = "0px"
    sun.style.height = "0px"
    sun.style.borderRadius = "0px"
})
moon.addEventListener("click", function() {
    body.style.background = "url(../img/home.jpg)"
    body.style.backgroundSize = "cover"
    body.style.backgroundAttachment = "fixed"
    sun.style.fontSize = "2rem"
    sun.style.background = "limegreen"
    sun.style.width = "40px"
    sun.style.height = "40px"
    sun.style.borderRadius = "6px"
    moon.style.fontSize = "0"
    moon.style.background = "none"
    moon.style.width = "0px"
    moon.style.height = "0px"
    moon.style.borderRadius = "0px"
})
samarqand.addEventListener("mousemove", function() {
    h11.style.fontSize = "3rem"
})
samarqand.addEventListener("mouseout", function() {
    h11.style.fontSize = "0rem"
})
andijan.addEventListener("mousemove", function() {
    h12.style.fontSize = "3rem"
})
andijan.addEventListener("mouseout", function() {
    h12.style.fontSize = "0rem"
})
tashkent.addEventListener("mousemove", function() {
    h13.style.fontSize = "3rem"
})
tashkent.addEventListener("mouseout", function() {
    h13.style.fontSize = "0rem"
})
buxoro.addEventListener("mousemove", function() {
    h14.style.fontSize = "3rem"
})
buxoro.addEventListener("mouseout", function() {
    h14.style.fontSize = "0rem"
})
qashqadaryo.addEventListener("mousemove", function() {
    h15.style.fontSize = "3rem"
})
qashqadaryo.addEventListener("mouseout", function() {
    h15.style.fontSize = "0rem"
})
jizzax.addEventListener("mousemove", function() {
    h16.style.fontSize = "3rem"
})
jizzax.addEventListener("mouseout", function() {
    h16.style.fontSize = "0rem"
})
city.addEventListener("mousemove", function() {
    cityh6.style.marginTop = "439px"
    cit.style.width = "280px"
    cit.style.height = "440px"
    cit.style.background = "rgb(215, 215, 215)"
    h5sa.style.fontSize = "1.5rem"
    h5sa.style.width = "280px"
    h5sa.style.height = "40px"
    h5bu.style.fontSize = "1.5rem"
    h5bu.style.width = "280px"
    h5bu.style.height = "40px"
    h5qa.style.fontSize = "1.5rem"
    h5qa.style.width = "280px"
    h5qa.style.height = "40px"
    h5ta.style.fontSize = "1.5rem"
    h5ta.style.width = "280px"
    h5ta.style.height = "40px"
    h5ji.style.fontSize = "1.5rem"
    h5ji.style.width = "280px"
    h5ji.style.height = "40px"
    h5an.style.fontSize = "1.5rem"
    h5an.style.width = "280px"
    h5an.style.height = "40px"
    h5na.style.fontSize = "1.5rem"
    h5na.style.width = "280px"
    h5na.style.height = "40px"
    h5fa.style.fontSize = "1.5rem"
    h5fa.style.width = "280px"
    h5fa.style.height = "40px"
    h5xo.style.fontSize = "1.5rem"
    h5xo.style.width = "280px"
    h5xo.style.height = "40px"
    h5nv.style.fontSize = "1.5rem"
    h5nv.style.width = "280px"
    h5nv.style.height = "40px"
    h5su.style.fontSize = "1.5rem"
    h5su.style.width = "280px"
    h5su.style.height = "40px"
})
city.addEventListener("mouseout", function() {
    cityh6.style.marginTop = "0"
    cit.style.width = "0"
    cit.style.height = "0"
    cit.style.background = "none"
    h5sa.style.fontSize = "0"
    h5sa.style.width = "0"
    h5sa.style.height = "0"
    h5bu.style.fontSize = "0"
    h5bu.style.width = "0"
    h5bu.style.height = "0"
    h5qa.style.fontSize = "0"
    h5qa.style.width = "0"
    h5qa.style.height = "0"
    h5ta.style.fontSize = "0"
    h5ta.style.width = "0"
    h5ta.style.height = "0"
    h5ji.style.fontSize = "0"
    h5ji.style.width = "0"
    h5ji.style.height = "0"
    h5an.style.fontSize = "0"
    h5an.style.width = "0"
    h5an.style.height = "0"
    h5na.style.fontSize = "0"
    h5na.style.width = "0"
    h5na.style.height = "0"
    h5fa.style.fontSize = "0"
    h5fa.style.width = "0"
    h5fa.style.height = "0"
    h5xo.style.fontSize = "0"
    h5xo.style.width = "0"
    h5xo.style.height = "0"
    h5nv.style.fontSize = "0"
    h5nv.style.width = "0"
    h5nv.style.height = "0"
    h5su.style.fontSize = "0"
    h5su.style.width = "0"
    h5su.style.height = "0"
})
tourism.addEventListener("mousemove", function() {
    tourismh6.style.marginTop = "236px"
    touris.style.width = "280px"
    touris.style.height = "240px"
    touris.style.background = "rgb(215, 215, 215)"
    iclass1.style.fontSize = "1.5rem"
    iclass1.style.width = "280px"
    iclass1.style.height = "40px"
    iclass2.style.fontSize = "1.5rem"
    iclass2.style.width = "280px"
    iclass2.style.height = "40px"
    iclass3.style.fontSize = "1.5rem"
    iclass3.style.width = "280px"
    iclass3.style.height = "40px"
    iclass4.style.fontSize = "1.5rem"
    iclass4.style.width = "280px"
    iclass4.style.height = "40px"
    iclass5.style.fontSize = "1.5rem"
    iclass5.style.width = "280px"
    iclass5.style.height = "40px"
    iclass6.style.fontSize = "1.5rem"
    iclass6.style.width = "280px"
    iclass6.style.height = "40px"
})
tourism.addEventListener("mouseout", function() {
    tourismh6.style.marginTop = "0"
    touris.style.width = "0"
    touris.style.height = "0"
    touris.style.background = "none"
    iclass1.style.fontSize = "0"
    iclass1.style.width = "0"
    iclass1.style.height = "0"
    iclass2.style.fontSize = "0"
    iclass2.style.width = "0"
    iclass2.style.height = "0"
    iclass3.style.fontSize = "0"
    iclass3.style.width = "0"
    iclass3.style.height = "0"
    iclass4.style.fontSize = "0"
    iclass4.style.width = "0"
    iclass4.style.height = "0"
    iclass5.style.fontSize = "0"
    iclass5.style.width = "0"
    iclass5.style.height = "0"
    iclass6.style.fontSize = "0"
    iclass6.style.width = "0"
    iclass6.style.height = "0"
})
s.addEventListener("click", function() {
    let a = prompt("Parolni ayting")
    if (a == "shohjahon") {
        alert("Topdingiz")
        s.style.width = " 500px "
        s.style.height = " 500px "
    } else {
        alert("Xato")
    }
})