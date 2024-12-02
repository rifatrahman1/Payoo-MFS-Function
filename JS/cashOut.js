
document.getElementById ('cash_out_btn').addEventListener ('click', function (event) {
    event.preventDefault ();
    
    const cash_out = getInputFieldValueById ('input_amount');
    const pin_number = getInputFieldValueById ('input_pin');

    if (pin_number === 1234) {

        const balance = getTextFieldValueByid ('account_balance');
        const new_balance = balance - cash_out;
        document.getElementById ('account_balance').innerText = new_balance.toFixed(2);
        alert(`Successfully cash out ${cash_out} to your account!`);

        const p = document.createElement ('p');
        p.innerText = `Cash Out: ${cash_out} New Balance: ${new_balance}`;
        document.getElementById ('transection_container').appendChild(p);
    }
    else {
        alert ('wrong your pin number, please try again !');
    }
})