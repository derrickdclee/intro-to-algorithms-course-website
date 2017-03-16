var backgroundLoader = (function() {
    var my = {};
    
    my.loadBackground = function(background) {
        var header = $('.header');
        var gradient = "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6))";
        $.each(background, function(key, val) {
            header.css('background-image', gradient + ", url(" + val['image'] + ")");
        });
    };
    
    return my;
})();