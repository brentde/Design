const emailInput = document.getElementById('email-input');
const pwInput = document.getElementById('password-input');

emailInput.addEventListener('change', event => {
    const value = event.value;


})

pwInput.addEventListener('change', event => {
    const value = event.target.value;
    console.log(value);

    if(value.length < 6)
        document.getElementById('pw-error').style.display = 'inline-block';
    else
        document.getElementById('pw-error').style.display = 'none';

    console.log(document.getElementById('pw-error').style.display);
    })