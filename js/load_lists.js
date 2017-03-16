var allListLoader = (function() {
    var my = {};
    
    my.loadAnnouncements = function(announcements) {
        listLoader.loadList('#announcements-list', announcements);
    };
    my.loadSynopsis = function(synopsis) {
        listLoader.loadList('#synopsis-list', synopsis);
    };
    my.loadPrereq = function(prereq) {
        listLoader.loadList('#prereq-list', prereq);
    };
    my.loadUndergrad = function(undergrad) {
        listLoader.loadList('#undergrad-list', undergrad, formatter.formatUndergrad);
    };
    my.loadGrad = function(grad) {
        listLoader.loadList('#grad-list', grad, formatter.formatGrad);
    };
    my.loadGrading = function(grading) {
        listLoader.loadList('#grading-list', grading);
    };
    my.loadTextbook = function(textbook) {
        listLoader.loadList('#textbook-list', textbook);
    };
    my.loadReference = function(reference) {
        listLoader.loadList('#reference-list', reference);
    };
    my.loadPolicy = function(policy) {
        listLoader.loadList('#policy-list', policy);
    };
    my.loadHomework = function(homework) {
        listLoader.loadList('#homework-list', homework, formatter.formatHW);
    }
    
    return my;
})();