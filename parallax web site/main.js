$(document).ready(function(){
    $("section").height($(window).height());
    onWindowRezise();

    $("obss-scroller").smoothScroller({
        duration : 1000,
        activeClass: "active"
    })
})

let onWindowRezise = function(){
    $(window).resize(function(evt){
        $("section").height($(window).height())
    })
}

