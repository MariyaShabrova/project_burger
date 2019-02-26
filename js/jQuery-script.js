
$(function() {
	alert ('jQuery подключен и отлично работает!');
});






$(document).ready(function() {
    let btn = $('.accordeon_item');

    var activeClass = 'accordeon_item_activ';

    btn.click(function(event) {
        event.preventDefault();
    
    let parent = $(this).parent();

        if (parent.hasClass(activeClass)) {
            parent.removeClass(activeClass);        

    } else {
        btn.parent().removeClass(activeClass);
        parent.addClass(activeClass);
    }
    
})
})