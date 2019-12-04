//strike through todo
$("ul").on("click","li",function(){
    $(this).toggleClass("completed");
});
//delete todo 
$("ul").on("click",".bt",function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopPropagation();
});
//add Todo
$('input[type="text"]').on("keypress",function(event){
    if(event.which===13){
        var newValue=$(this).val();
        $(this).val("");
        $('ul').append("<li><span class='bt'><i class='fa fa-trash'></i></span> "+newValue+"</li>");
    }
});
//form toggle
$('.fa-plus').on("click",function(){
    $('input[type="text"]').fadeToggle(400)

});