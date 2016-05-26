function insertValues(id) {

  //field value consist of it previous value and concatenate with the new one
  // which consisting in clicked button 'value' attr; button determined by id
  $('#display').val($('#display').val()+$('#'+id).val());

}

function checkResultButtonPressed(flag) {

  //function gets current flag's value. if it true then "=" was pressed before;
  // if "=" was pressed before, then clear the field
  if (res_flag == true) {
    $('#display').val('');

    //set and return flag to false again to prevent wrong field clearing
    return res_flag = false;

   }

}

function operatorSelectedIndicator() {

  //when operator button pressed, this function temporarily disable operator buttons
  //by adding a new class and remove previous until number buttons is pressed
  oper_flag = true;
  $('input.oper-but').addClass('tmp-class');
  $('input').removeClass('oper-but');

}

function operatorUnselectedIndicator() {

  //when number button pressed, this function returns fuctionality to operator
  //buttons
  oper_flag = false;
  $('input.tmp-class').addClass('oper-but');
  $('input').removeClass('tmp-class');
}

function operatorsErrorsManagingAndCalculation(str) {

  //if the last or the first chars an operators (except "-" in 2nd case) or
  //division by 0 or incorrect number with many nulls at the beginning (002 etc)
  //then through Error. Otherwise - convert string to expression and calculate it
  if (!str.charAt(str.length-1).match(/[0-9]/) ||
      !str.charAt(0).match(/[-0-9]/) ||
      str.match(/\/[0]$/) ||
      str.match(/\/[0][*+-]/) ||
      str.match(/^0[0-9]/) ||
      str.match(/[*+/-]0[0-9]/) ) {

      $('#display').val('Error');

    } else {

  //if there are 2 "-" operators in the string, they replaced by "+"
    if (str.match(/[-]{2,}/)) {
      str = str.replace("--","+");
    }
  //calculate string as a js code (expression)
    expr = eval(str);
    $('#display').val(expr);

  }
}


function operatorReplacement(id) {

  str = $('#display').val();
  //if operator button pressed, and the other operator button was pressed after it
  //then replace older one with the new one (to prevent multiple operators one
  //after another)
  $('#display').val(str.slice(0, -1)+$('#'+id).val());

}
