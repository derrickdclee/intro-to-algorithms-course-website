const synFile = $('#data-script').attr('data-synopsis');
const synAction = allListLoader.loadSynopsis;
const annFile = $('#data-script').attr('data-announcements');
const annAction = allListLoader.loadAnnouncements;
const prereqFile = $('#data-script').attr('data-prereq');
const prereqAction = allListLoader.loadPrereq;
const gradFile = $('#data-script').attr('data-grad');
const gradAction = allListLoader.loadGrad;
const undergradFile = $('#data-script').attr('data-undergrad');
const undergradAction = allListLoader.loadUndergrad;
const gradingFile = $('#data-script').attr('data-grading');
const gradingAction = allListLoader.loadGrading;
const hwFile = $('#data-script').attr('data-homework');
const hwAction = allListLoader.loadHomework;
const textbookFile = $('#data-script').attr('data-textbook');
const textbookAction = allListLoader.loadTextbook;
const referenceFile = $('#data-script').attr('data-reference');
const referenceAction = allListLoader.loadReference;
const policyFile = $('#data-script').attr('data-policy');
const policyAction = allListLoader.loadPolicy;
const calendarFile = $('#data-script').attr('data-calendar');
const calendarAction = allTableLoader.loadCalendar;
const recitationFile = $('#data-script').attr('data-recitation');
const recitationAction = allTableLoader.loadRecitation;
const bcolorFile = $('#data-script').attr('data-bcolor');
const bcolorAction = backgroundColorLoader.loadBackgroundColor;

/*
 * actually load JSON data and how to process it
 * YOU HOPEFULLY WILL NOT NEED TO MODIFY THIS
 */
// given a JSON data file, apply the given action to it after it is loaded and parsed
function loadJSON(jsonFile, actionOnLoad) {
    $.getJSON(jsonFile, function (data) {
        try {
            actionOnLoad(data);
        } catch (err) {
            alert(err);
        }
    });
}

// call module's main function if data is succcessfully loaded
loadJSON(annFile, annAction);
loadJSON(synFile, synAction);
loadJSON(prereqFile, prereqAction);
loadJSON(gradFile, gradAction);
loadJSON(undergradFile, undergradAction);
loadJSON(gradingFile, gradingAction);
loadJSON(hwFile, hwAction);
loadJSON(textbookFile, textbookAction);
loadJSON(referenceFile, referenceAction);
loadJSON(policyFile, policyAction);
loadJSON(calendarFile, calendarAction);
loadJSON(recitationFile, recitationAction);
loadJSON(bcolorFile, bcolorAction);