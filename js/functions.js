function insertValues(id, num_count) {

  //if input values limit reached - throw Error, otherwise - display values
  if (num_count>40) {

    $('#display').val('Symbol\'s limit reached')

  } else {

  //field value consist of it previous value and concatenate with the new one
  // which consisting in clicked button 'value' attr; button determined by id
  $('#display').val($('#display').val()+$('#'+id).val());

  }
}

function checkResultButtonPressed(flag) {

  //function gets current flag's value. if it true then "=" was pressed before;
  // if "=" was pressed before, then clear the field
  if (flag === true) {


    $('#display').val('');

    //set and return flag to false again to prevent wrong field clearing
    return flag = false;

  } else {

    return flag = false;

  }
}

function operatorSelectedIndicator() {

  //when operator button pressed, this function temporarily disable operator buttons
  //by adding a new class and remove previous until number buttons is pressed

  $('input.oper-but').addClass('disabled-class');
  $('input').removeClass('oper-but');
  return oper_flag = true;

}

function operatorUnselectedIndicator() {

  //when number button pressed, this function returns fuctionality to operator
  //buttons

  $('input.disabled-class').addClass('oper-but');
  $('input').removeClass('disabled-class');
  return oper_flag = false;
}

function operatorsErrorsManagingAndCalculation(str) {

  //if the last or the first chars an operators (except "-" in 2nd case) or
  //division by 0 or incorrect number with many nulls at the beginning (002 etc)
  //then throw Error. Otherwise - convert string to expression and calculate it
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
    var expr = eval(str);

  //convert it back to str
    var exprStr = ""+expr;

  //if answer is float, then round the number
    if (exprStr.match(/[.]/)) {

      exprStr = ""+expr.toFixed(5);

    }

  // if answer length is to big - throw the exception, otherwise - display it

  var displayValue = ( exprStr.length > 15) ? 'Overlimit number' : exprStr;
  $('#display').val(displayValue);

  }
}

function operatorReplacement(id) {

  var displayBlock = $('#display');
  var str = displayBlock.val();

  //if operator button pressed, and the other operator button was pressed after it
  //then replace older one with the new one (to prevent multiple operators one
  //after another)
  displayBlock.val(str.slice( 0, -1 ) + $( '#' + id ).val());

}
