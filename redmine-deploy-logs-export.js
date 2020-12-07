// Export logs, put this into client's redmine.
var $ = jQuery;
var table = $('table.time-entries');
var rows = $('tr.time-entry', table);
var myValues = {};

$.each(rows, function( index, rowValue ) {
  myValues[index] = {
    'logProject': $('.project a', rowValue).text(),
    'logDate': $('.spent_on', rowValue).text(),
    'logComment': $('.comments', rowValue).text(),
    'logHours': $('.hours', rowValue).text() + 'h',
  }
  // return false;
});
var jsonString = JSON.stringify(myValues);
console.log(jsonString);

