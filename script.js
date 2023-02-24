const requiredEmail = "ami@dam.cele";
const requiredPass = "adamAmarBABA";

function getValue(elementID) {
    return document.getElementById(elementID).value;
};

function formSubmit() {
    const email = getValue('email');
    const password = getValue('password');
    if (email === requiredEmail && password === requiredPass) {
        window.location.pathname = '/bank.html'
        console.log(email, password);
    } else {
        console.log(email, password);
        alert('tui lawarish naki? 🤨')
    }
};


function getFloatValue(elementID) {
    const inputValue = parseFloat(document.getElementById(elementID).value);
    document.getElementById(elementID).value ='';
    return inputValue;
};

function getFloatText(elementID) {
    return parseFloat(document.getElementById(elementID).innerText);
};

function showToDOM(elementID, value2) {
    document.getElementById(elementID).innerText = value2;
}

function deposit() {
    const depositAmount = getFloatValue('deposit-input');
    const totalDeposit = getFloatText('current-deposit') + depositAmount;
    const totalBalance = getFloatText('current-balance') + depositAmount;
    showToDOM('current-deposit', totalDeposit);
    showToDOM('current-balance', totalBalance);
};

function withdraw() {
    const withdrawAmount = getFloatValue('withdraw-input');
    const totalWithdraw = getFloatText('current-withdraw') + withdrawAmount;
    let totalBalance = getFloatText('current-balance');
    if (totalWithdraw > totalBalance) {
        alert("BABA you won't get any more money than your monthly pocket expenses. Please see you next month");
        return
    } else {
        totalBalance - totalWithdraw;
    }

    showToDOM('current-withdraw', totalWithdraw);
    showToDOM('current-balance', totalBalance);
}
