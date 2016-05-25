$(document).ready(function () {

  // simple boolean flag to indicate "=" pressing
  res_flag = false;
  //simple boolean flag to indicate "+","-","*","/","." pressing
  oper_flag = false;

  //cleaning the display field
  $('#display').val('');

  // "0-9" key pressed
  $( '.calc-but' ).click(function() {

    //check status of "=" button (was it pressed before?)
    checkResultKeyPressed(res_flag);
    insertValues(this.id);

    //return funcionality to operator buttons 
    operatorUnselectedIndicator();

  });

  // "+","-","*","/","." key pressed
  $( '.oper-but' ).click(function() {
  if (oper_flag == false) {

    //disable operator buttons funcionality
    operatorSelectedIndicator();

    //check status of "=" button (was it pressed before?)
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
  operatorsErrorsManagingAndCalculation(exprStr);

  //it's indicate that "=" was pressed
  res_flag = true;

  });

});
