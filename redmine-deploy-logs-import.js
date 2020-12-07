// Import logs, put this into redmine add log page.
var $ = jQuery;
function setLogOnPage(myValuesParsed) {
  var d, newDate, curr_month, day;

  $.each(myValuesParsed, function (index, rowValue) {
    d = new Date(rowValue.logDate);
    curr_month = d.getMonth();
    curr_month++; // In js, first month is 0, not 1
    day = d.getDate() < 10 ? '0' + d.getDate() : d.getDate();

    newDate = d.getFullYear().toString() + "-" + curr_month + "-" + day;

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
    setLogOnPage(items);
  }
}
