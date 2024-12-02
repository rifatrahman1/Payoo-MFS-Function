
function getInputFieldValueById () {
    console.log('will get value by id');
    
    // const addMoney = document.getElementById ('input_field_amount').value;
    // return addMoney;
}

function getInputFieldValueById (id) {
    const value_input = document.getElementById (id).value;
    const input_number = parseFloat (value_input);
    return input_number;
}

function getTextFieldValueByid (id) {
    const value_text = document.getElementById ('account_balance').innerText;
    const value_number = parseFloat (value_text);
    return value_number;
}