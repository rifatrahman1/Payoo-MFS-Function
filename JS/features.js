

document.getElementById ('send_money').addEventListener ('click', function () {
    console.log('add money form')
    showSectionById ('add_money_form');
});


document.getElementById ('cash_out').addEventListener ('click', function () {
    console.log('cash out form')
    showSectionById ('cash_out_form');
});


document.getElementById ('transection_button').addEventListener ('click', function () {
    console.log('transection section form')
    showSectionById ('transection')
});