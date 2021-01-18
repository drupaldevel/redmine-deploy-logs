var $ = jQuery;
var table = $('table');
var rows = $('tr.item.infini-droppable.clickitem', table);
var myValues = {};

$.each(rows, function( index, rowValue ) {
  var desc = $('td[idx="12"] span', rowValue).text();
  if(!desc) return;

  myValues[index] = {
    'logProject': $('td[idx="12"] span', rowValue).text(),
    'logDate': $('td[idx="0"]', rowValue).text(),
    'logComment': $('td[idx="12"] small', rowValue).text(),
    'logHours': $('td[idx="1"] ', rowValue).text(),
  }
  // return false;
});
var jsonString = JSON.stringify(myValues);
console.log(jsonString);