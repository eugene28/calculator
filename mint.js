function insertValues(id) {

  $('#display').val($('#display').val()+$('#'+id).val());

}

function checkResultKeyPressed(flag) {

  // if "=" was pressed before, than clear the field
  if (res_flag == true) {
    $('#display').val('');

    //set flag to false again to prevent wrong field clearing
    return res_flag = false;
   }

}

function operatorSelectedIndicator() {

  oper_flag = true;
  $('input.oper-but').addClass('tmp-class');
  $('input').removeClass('oper-but');

}

function operatorUnselectedIndicator() {
  oper_flag = false;
  $('input.tmp-class').addClass('oper-but');
  $('input').removeClass('tmp-class');
}

$(document).ready(function () {

  // simple boolean flag to indicate "=" pressing
  res_flag = false;
  //simple boolean flag to indicate "+","-","*","/","." pressing
  oper_flag = false;

  //cleaning the display field
  $('#display').val('');

  // "0-9" key pressed
  $( '.calc-but' ).click(function() {
    checkResultKeyPressed(res_flag);
    insertValues(this.id);
    operatorUnselectedIndicator();

  });

  // "+","-","*","/","." key pressed
  $( '.oper-but' ).click(function() {
  if (oper_flag == false) {
    operatorSelectedIndicator();
    checkResultKeyPressed(res_flag);
    insertValues(this.id);
  } else {
    str = $('#display').val();
    $('#display').val(str.slice(0, -1)+$('#'+this.id).val());
  }

  });

  // "=" key pressed
    $( '#res' ).click(function() {

    exprStr = $('#display').val();


    if (!exprStr.charAt(exprStr.length-1).match(/[0-9]/) ||
  !exprStr.charAt(0).match(/[-0-9]/) ) {
        $('#display').val('Error');
    } else {

      expr = eval(exprStr);
      $('#display').val(expr);
  }

  //it's indicate that "=" was pressed
  res_flag = true;

  });

});
