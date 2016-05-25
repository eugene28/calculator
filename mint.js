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

  // "0-9" key pressed
  $( '.calc-but' ).click(function() {

    //check status of "=" button (was it pressed before?)
    checkResultKeyPressed(res_flag);
    insertValues(this.id);

    //return funcionality to operator buttons
    operatorUnselectedIndicator();

    //disable "-" operator's flag
    sub_flag=false;

  });

//   // "+","-","*","/","." key pressed
//   $( '.oper-but' ).click(function() {
//
//   if (oper_flag == false) {
//
//     //disable operator buttons funcionality
//     operatorSelectedIndicator();
//
//     //check status of "=" button (was it pressed before?)
//     checkResultKeyPressed(res_flag);
//     insertValues(this.id);
//
//     if (this.value == '-'){
//     sub_flag = true;
//     }
//
//   } else {
//
//     if (this.value == '-' && sub_flag == true) {
//
//     insertValues(this.id);
//     // sub_flag=true;
//
//
//   } else if (sub_flag == true) {
//
//     insertValues(this.id);
//     sub_flag=false;
//
//
//   } else if (oper_flag == true && sub_flag == false){
//       operatorReplacement(this.id);
//     }
//
// }
//
//   });


$( '.oper-but' ).click(function() {

  if (oper_flag == false) {

    operatorSelectedIndicator();
    checkResultKeyPressed(res_flag);
    insertValues(this.id);

    if (this.value == '-'){
        sub_flag = true;
      } else {
        sub_flag = false;
      }


  } else {

    str = $('#display').val();

    if (this.value == '-' &&  str.charAt(str.length-2).match(/[0-9]/) &&
    !str.charAt(str.length-1).match(/[0-9]/)   ) {

    insertValues(this.id);
    }


    if (this.value != '-' && sub_flag != true) {
      console.log(sub_flag);
      operatorReplacement(this.id);
    }

    if (str.length == 1) {
      operatorReplacement(this.id);
    }

    // if (this.value = '-' && sub_flag == false) {
    //   operatorReplacement(this.id);
    // }

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
