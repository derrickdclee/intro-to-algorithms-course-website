var backgroundColorLoader = (function() {
    var my = {};
    
    my.loadBackgroundColor = function (bcolor){
        $('.section-header').css('background-color', bcolor['color']);
    };
    
    return my;
})();