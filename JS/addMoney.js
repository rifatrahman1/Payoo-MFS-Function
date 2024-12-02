
document.getElementById ('send_money_btn').addEventListener ('click', function (event) {
    event.preventDefault ();
    // const addMoney = getInputFieldValueById ();
    // console.log(addMoney);

    const add_money = getInputFieldValueById ('input_field_amount');
    const pin_number = getInputFieldValueById ('input_field_pin');

    if (pin_number === 1234) {
        const  balance = getTextFieldValueByid ('account_balance');
        const new_balance = balance + add_money;
        document.getElementById ('account_balance').innerText = new_balance.toFixed(2);
        alert(`Successfully added ${add_money} to your account!`);

        const p = document.createElement('p');
        p.innerText = `Added: ${add_money} TK. New Balance: ${new_balance}`;
        document.getElementById ('transection_container').appendChild(p);
        
    }
    else {
        alert ('wrong your pin number, please try again');
    };
});