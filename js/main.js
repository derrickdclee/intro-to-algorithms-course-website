$(function() {
    $(document).on('click', 'a', function(event){
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $( $(this).attr('href') ).offset().top - [$('.navbar').height() + 10]
        }, 500);
    });
    
    $('#logistics-accordion, #homework-accordion, #synopsis-accordion, #calendar-accordion').accordion({
        active: false,
        collapsible: true,
        heightStyle: "content"
    });
    $('#calendar-accordion').accordion('option', 'active', 0);
});