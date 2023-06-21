$(function() {
    $(".event_category>li").click(function(e){
        $(".event_category>li").css("border","none")
        $(this).css("border",'red solid 2px').css("border-bottom",'none')
        let num = $(this).index()
        $(`.event_main`).hide();
        $(`.event_cover${num}`).show();
        e.preventDefault();
    })
   
})
