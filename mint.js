$(document).ready(function () {

  // simple boolean flag to indicate "=" pressing
  res_flag = false;
  //simple boolean flag to indicate "+","-","*","/","." pressing
  oper_flag = false;

  //cleaning the display field
  $('#display').val('');

  //when form is clearing - set all flags back to "false"
  $('#clear').click( function() {

    res_flag = false;
    oper_flag = false;

  });

  // "0-9" button pressed
  $( '.calc-but' ).click(function() {

    //check status of "=" button (was it pressed before?)
    checkResultButtonPressed(res_flag);
    insertValues(this.id);

    //return funcionality to operator buttons
    operatorUnselectedIndicator();

  });

  // "+","-","*","/","." button pressed
  $( '.oper-but' ).click(function() {

    if (oper_flag == false) {

      //disable operator buttons funcionality
      operatorSelectedIndicator();

      //check status of "=" button (was it pressed before?)
      checkResultButtonPressed(res_flag);

      insertValues(this.id);

    } else {

      str = $('#display').val();
      reg = /[0-9]/;
      strLastChar = str.charAt(str.length-1);
      strPreLastChar = str.charAt(str.length-2);



      //if it's "-" operator after another operator or in the beginning of the
      //string then insert it
      if (this.value == '-' &&
      strPreLastChar.match(reg) &&
      !strLastChar.match(reg) ) {

        insertValues(this.id);
      }

    //if it's an "-" operator and before it another operator, then make nothing,
    //otherwise - make replacement
    if ( strLastChar == "-" && strPreLastChar.match(/[*+/.-]/) ) {

      // do nothing, ignore it

    } else {

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
