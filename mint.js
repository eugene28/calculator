$(document).ready(function () {

  // simple boolean flag to indicate "=" pressing
  res_flag = false;
  //simple boolean flag to indicate "+","-","*","/","." pressing
  oper_flag = false;
  //simple boolean flag to indicate "-" pressing
  sub_flag = false;

  //cleaning the display field
  $('#display').val('');

  //when form is clearing - set all flags back to "false"
  $('#clear').click( function() {
    res_flag = false;
    oper_flag = false;
    sub_flag = false;
  });

  // "0-9" button pressed
  $( '.calc-but' ).click(function() {

    //check status of "=" button (was it pressed before?)
    checkResultButtonPressed(res_flag);
    insertValues(this.id);

    //return funcionality to operator buttons
    operatorUnselectedIndicator();

    //disable "-" operator's flag
    sub_flag=false;

  });

  // "+","-","*","/","." button pressed
  $( '.oper-but' ).click(function() {

    if (oper_flag == false) {

      //disable operator buttons funcionality
      operatorSelectedIndicator();

      //check status of "=" button (was it pressed before?)
      checkResultButtonPressed(res_flag);

      insertValues(this.id);

      //if it "-" operator set sub_flag to true, otherwise set it to false
      if (this.value == '-'){
        sub_flag = true;
      } else {
        sub_flag = false;
      }

    } else {

      str = $('#display').val();
      reg = /[0-9]/;

      //if it's "-" operator after another operator or in the beginning of the
      //string then insert it
      if (this.value == '-' &&
      str.charAt(str.length-2).match(reg) &&
      !str.charAt(str.length-1).match(reg) ) {

        insertValues(this.id);
      }

      //if it's not an "=" operator and "-" wasn't pressed, then make replacement
      if (this.value != '-' && sub_flag != true) {
        operatorReplacement(this.id);
      }

      //if expression consist of only one symbhol, the make replacement
      if (str.length == 1) {
        operatorReplacement(this.id);
      }
    }

});

  // "=" button pressed
  $( '#res' ).click(function() {

  exprStr = $('#display').val();
  operatorsErrorsManagingAndCalculation(exprStr);

  //it's indicate that "=" was pressed
  res_flag = true;

  });

});
