$('.txt').on('click',function(){
    $('.ppp').not($(this).next()).slideUp(1000)
    $(this).next().slideToggle(1000)
})
$('.openn').on('click',function(){
    $('.navBar').animate({width:'250px'},500)
})
$('.close').on('click', function(){
    $('.navBar').animate({width:'0px'},500)
})