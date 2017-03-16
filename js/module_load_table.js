var tableLoader = (function() {
    var my = {};
    
    my.loadTable = function(tableID, tableData) {
        var table = $(tableID);
        $.each(tableData, function(key, val) {
            var trow = $('<tr></tr>');
            $.each(val, function(k, v) {
                if (!Array.isArray(v)) {
                    trow.append('<td>'+ v +'</td>');
                } else {
                    var tableElement = $('<td></td>');
                    for (var i=0; i<v.length; i++) {
                        tableElement.append(v[i]);
                        if (i !== v.length - 1) tableElement.append('<br>');
                    }
                    trow.append(tableElement);
                }
            });
            table.append(trow);
        });
    };
    
    return my;
})();