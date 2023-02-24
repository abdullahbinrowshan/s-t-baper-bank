const requiredEmail = "ami@dam.cele";
const requiredPass = "adamAmarBABA"
alert(`
    Email: ${requiredEmail}
    Password: ${requiredPass}
`)

function getInputValue(elementID) {
    return document.getElementById(elementID).value;
}


document.getElementById('form-submit').addEventListener('click', function () {
    const email = getInputValue('email');
    const password = getInputValue('password');
    if (email === requiredEmail && password === requiredPass) {
        window.location.pathname = '/bank.html'
        console.log(email, password);
    } else {
        console.log(email, password);
        alert('tui lawarish')
    }
})