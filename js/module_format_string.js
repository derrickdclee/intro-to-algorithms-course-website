var formatter = (function() {
    var my = {};
    
    my.formatGrad = function(obj) {
        var officeHour = obj['office-hour'];
        return obj['name'] + "<br>" + obj['office'] + "<br>" + obj['email'] + "<br> Office hours on " + officeHour['day'][0] + " at " +
            officeHour['time'][0] + " in " + officeHour['venue'][0] + " and on " + officeHour['day'][1] + " at " + officeHour['time'][1] + " in " + officeHour['venue'][1];
    };
    my.formatUndergrad = function(obj) {
        var officeHour = obj['office-hour'];
        return obj['name'] + "<br>" + obj['email'] + "<br> Office hours on " + officeHour['day'] + " at " +
            officeHour['time'] + " in " + officeHour['venue'];
    };
    my.formatHW = function(obj) {
        var result = "<a href='" + obj['url'] + "'>Homework " + obj['id'] +
            "</a> is released on " + obj['release'];
        if (obj['due'] !== 'optional') {
            result += " and is due on " + obj['due'] + ".";
        } else {
            result += " and is optional.";
        }
        return result;
    };
    
    return my;
})();