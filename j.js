$(document).ready(function(){
  $("figure").on("click", function(){
    var kk = $(this);
    $(this).css({'position':'absolute', 'top':'auto', 'left':'auto', 'z-index':'1000', 'transform':'scale(3)'});
    $(this).find("figcaption").css({'display':'block'});
    $('div').css({'display':'block'});
    // $(this).css({'animation':'ani 1s ease'});

   var t = $('<i class="fas fa-times"></i>').css({
    'font-size' : '40px', 'position':'absolute', 'top':'16%', 'left':'28%', 'z-index' : '2000', 'color':'white', 'cursor':'pointer'});
  //  setTimeout(() => {
    $('section').append(t);
  //  }, 500);
    
   
  $('i').on('click', function(){
    $('div').css({'display':'none'});
    $('section').find('i').remove();
    $('figure').css({'position':'relative','top':'auto', 'left':'auto', 'z-index':'auto','transform':'none'});
  });
});
});