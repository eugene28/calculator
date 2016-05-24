function insertValues(id) {
  $('#display').val($('#display').val()+$('#'+id).val());
}

$(document).ready(function () {

  // simple boolean flag to indicate "=" pressing
  flag = false;
  //cleaning the display field
  $('#display').val('');
  // "0-9", "+", "-", ".", "*", "/" key pressed
  $( '.calc-but' ).click(function() {
    // if "=" was pressed before, than clear the field
    if (flag == true) {
      $('#display').val('');
     }
    insertValues(this.id);
    //set flag to false again to prevent wrong field clearing
    flag = false;

  });
  // "=" key pressed
  $( '#res' ).click(function() {
    expr = eval($('#display').val());
    $('#display').val(expr);
    //it's indicate that "=" was pressed
    flag = true;
  });

});
