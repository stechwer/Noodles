$(function(){
    $(".slick-menu").slick({
        arrows:false,
        autoplay:1000,
        dots: true
    })
});
$(document).ready(function () {
    $(".header-burger").click(function (event) {
        $(".header-burger,.header-menu").toggleClass("active");
    }
    )
}
)