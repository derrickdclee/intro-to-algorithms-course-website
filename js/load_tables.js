var allTableLoader = (function() {
    var my = {};
    
    my.loadCalendar = function(calendar) {
        tableLoader.loadTable('#calendar-table', calendar);
    };
    my.loadRecitation = function(recitation) {
        tableLoader.loadTable('#recitation-table', recitation);
    };
    
    return my;
})();