
$(document).ready(function() {
    var btn = $('.accordeon_item_link');

    var activeClass = 'accordeon_item_activ';

    btn.click(function(event) {
        event.preventDefault();
    
    var parent = $(this).parent();

        if (parent.hasClass(activeClass)) {
            parent.removeClass(activeClass);        

    } else {
        btn.parent().removeClass(activeClass);
        parent.addClass(activeClass);
    }
    
})
})