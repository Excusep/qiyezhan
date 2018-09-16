$(function(){
    let par=$("header .right .two");
    let sons=$(".cover");
    console.log(par, sons);
    par.click(function () {
        sons.slideDown();
    })

})
