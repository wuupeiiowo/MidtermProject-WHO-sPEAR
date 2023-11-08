$(document).ready(function(){
    $(".aboutus-view a").mouseenter(function(){
            $(this).css('color','#D2CABB');
            $(this).css("transition-duration","750ms");
            $(".aboutus-view").css("background-color" , "#3B4F19");
    });
    $(".aboutus-view a").mouseleave(function(){
        $(this).css('color','#3B4F19');
        $(".aboutus-view").css("background-color" , "#D2CABB");
    });

    $(".product-view a").mouseenter(function(){
        $(this).css('color','#D2CABB');
        $(this).css("transition-duration","750ms");
        $(this).css("background-color" , "#3B4F19");
});
$(".product-view a").mouseleave(function(){
    $(this).css('color','#3B4F19');
    $(this).css("background-color" , "#D2CABB");
}); 
});