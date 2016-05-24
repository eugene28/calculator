function insertValues(id) {
  $('#display').val($('#display').val()+$('#'+id).val());
}

$(document).ready(function () {
  $('#display').val('');
  $( '.calc-but' ).click(function() {
    insertValues(this.id);
  });

  $( '#res' ).click(function() {
    expr = eval($('#display').val());
    $('#display').val(expr);
  });

});
