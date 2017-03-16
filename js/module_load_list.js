var listLoader = (function() {
    var my = {};
    
    my.loadList = function(ulID, listElements, formatFn) {
        var ul = $(ulID);
        $.each(listElements, function(key, val) {
            var list = $('<li></li>');
            if (formatFn === undefined ) {
                $.each(val, function (k, v) {
                    list.append(v);
                })
            } else {
                var formattedStr = formatFn(val);
                list.append(formattedStr);
            }
            list.appendTo(ul);
        });
    };
    
    return my;
})();