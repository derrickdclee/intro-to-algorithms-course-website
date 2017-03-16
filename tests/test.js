$(function () {
    function testList(listId, assert, numLists, firstList, lastList) {
        var list = $(listId);
        assert.strictEqual(list.children().length, numLists, "Correct number of list items");
        assert.strictEqual(list.children().first().text().split(/\s+/)[0], firstList, "First word in first list item correct");
        assert.strictEqual(list.children().last().text().split(/\s+/)[0], lastList, "First word in last list item correct");
    }
    
    QUnit.test("Synopsis list test", function(assert) {
        testList('#synopsis-list', assert, 8, "Introduction:",
                "Intractability:");
    });
    QUnit.test("Announcements list test", function(assert) {
        testList('#announcements-list', assert, 5, "We", "The");
    });
    QUnit.test("Prerequisites list test", function(assert) {
        testList('#prereq-list', assert, 2, "COMPSCI", "COMPSCI");
    });
    QUnit.test("Graduate list test", function(assert) {
        testList('#grad-list', assert, 2, "Abraham", "Tianyu");
    });
    QUnit.test("Undergraduate list test", function(assert) {
        testList('#undergrad-list', assert, 7, "Paul", "Haofeng");
    });
    QUnit.test("Grading list test", function(assert) {
        testList('#grading-list', assert, 4, "Homework", "Both");
    });
    QUnit.test("Textbook list test", function(assert) {
        testList('#reference-list', assert, 4, "[AHU]", "[Ta]");
    });
    QUnit.test("Reference list test", function(assert) {
        testList('#textbook-list', assert, 3, "[DPV]", "[CLRS]");
    });
    QUnit.test("Policy list test", function(assert) {
        testList('#policy-list', assert, 5, "Collaborations", "Submission");
    });
    QUnit.test("Homework list test", function(assert) {
        testList('#homework-list', assert, 12, "Homework", "Homework");
    });
});