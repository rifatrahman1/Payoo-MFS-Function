
function getInputFieldValueById () {
    console.log('will get value by id');
    
    // const addMoney = document.getElementById ('input_field_amount').value;
    // return addMoney;
};

function getInputFieldValueById (id) {
    const value_input = document.getElementById (id).value;
    const input_number = parseFloat (value_input);
    return input_number;
};

function getTextFieldValueByid (id) {
    const value_text = document.getElementById (id).innerText;
    const value_number = parseFloat (value_text);
    return value_number;
};


function showSectionById (id) {
    document.getElementById ('add_money_form').classList.add('hidden');
    document.getElementById ('cash_out_form').classList.add('hidden');
    document.getElementById ('transection').classList.add('hidden');

    document.getElementById (id).classList.remove('hidden');
};