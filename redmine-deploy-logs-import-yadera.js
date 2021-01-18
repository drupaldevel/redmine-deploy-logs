var $ = jQuery;
function setLogOnPage(myValuesParsed) {
  var d, newDate, curr_month, day;

  $.each(myValuesParsed, function (index, rowValue) {

    var dateParts = rowValue.logDate.split(' ');
    var datePartsYear = dateParts[0].split('/');

    newDate =  datePartsYear[2] + "-" + datePartsYear[1] + "-" + datePartsYear[0];

    $('#time_entry_spent_on').val(newDate);
    $('#time_entry_hours').val(rowValue.logHours);
    $('#time_entry_comments').val(rowValue.logProject + ': ' + rowValue.logComment);
    $('.enumeration_cf label:first-child input').click();

    $('form input[name=\'continue\'][type=\'submit\']').click()
    delete myValuesParsed[index];
    localStorage.setItem('myLogs', JSON.stringify(myValuesParsed));
    return false;
  });
}

var myLogs = localStorage.getItem('myLogs');
if (myLogs) {
  var items = JSON.parse(myLogs);
  if (Object.keys(items).length === 0 && items.constructor === Object) {
    alert('All logs have been added.');
  }
  else {
    setTimeout(setLogOnPage(items), 2000);
  }
}