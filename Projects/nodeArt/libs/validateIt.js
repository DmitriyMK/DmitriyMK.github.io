function validateFormOnSubmit(callback) {
    reason = "";
    reason += validateName(callback.name);
    reason += validateEmail(callback.email);
    reason += validatePhone(callback.phone);


    if (reason.length > 0) {
        return false;
    } else {
        return false;
    }
}



function validateName(name) {
    let error = "";

    if (name.value.length == 0) {
        name.style.boxShadow = 'inset 0px 0px 13px 0px rgba(228, 106, 106, 0.75)';
        name.style.borderColor = 'red';
        document.getElementById('name-error').innerHTML = "Поле обязательно для заполнения";
        let error = "1";
    } else {
        name.style.boxShadow = 'inset 0px 0px 13px 0px rgba(228, 106, 106, 0)';
        name.style.borderColor = "green";
        document.getElementById('name-error').innerHTML = '';
    }

    return error;
}



function validatePhone(phone) {
    let error = "";
    let stripped = phone.value.replace(/[\(\)\.\-\ ]/g, '');

    if (phone.value == "") {
        document.getElementById('phone-error').innerHTML = "Поле обязательно для заполнения";
        phone.style.boxShadow = 'inset 0px 0px 13px 0px rgba(228, 106, 106, 0.75)';
        phone.style.borderColor = 'red';
        let error = '6';
    } else if (isNaN(parseInt(stripped))) {
        let error = "5";
        document.getElementById('phone-error').innerHTML = "Неверный формат символов";
        phone.style.boxShadow = 'inset 0px 0px 13px 0px rgba(228, 106, 106, 0.75)';
        phone.style.borderColor = 'red';
    } else if (stripped.length < 10) {
        let error = "6";
        document.getElementById('phone-error').innerHTML = "Телефонный номер слишком короткий";
        phone.style.boxShadow = 'inset 0px 0px 13px 0px rgba(228, 106, 106, 0.75)';
        phone.style.borderColor = 'red';
    } else {
        phone.style.boxShadow = 'inset 0px 0px 13px 0px rgba(228, 106, 106, 0)';
        phone.style.borderColor = 'green';
        document.getElementById('phone-error').innerHTML = '';
    }
    return error;
}



function trim(s) {
    return s.replace(/^\s+|\s+$/, '');
}

function validateEmail(email) {
    let error = "";
    let temail = trim(email.value);
    let emailFilter = /^[^@]+@[^@.]+\.[^@]*\w\w$/;
    let illegalChars = /[\(\)\<\>\,\;\:\\\"\[\]]/;

    if (email.value == "") {
        email.style.boxShadow = 'inset 0px 0px 13px 0px rgba(228, 106, 106, 0.75)';
        email.style.borderColor = 'red';
        document.getElementById('email-error').innerHTML = "Поле обязательно для заполнения";
        let error = "2";
    } else if (!emailFilter.test(temail)) { //test email for illegal characters
        email.style.boxShadow = 'inset 0px 0px 13px 0px rgba(228, 106, 106, 0.75)';
        email.style.borderColor = 'red';
        document.getElementById('email-error').innerHTML = "Введите корректный емейл";
        let error = "3";
    } else if (email.value.match(illegalChars)) {
        email.style.boxShadow = 'inset 0px 0px 13px 0px rgba(228, 106, 106, 0.75)';
        email.style.borderColor = 'red';
        let error = "4";
        document.getElementById('email-error').innerHTML = "Неверный формат символов";
    } else {
        email.style.boxShadow = 'inset 0px 0px 13px 0px rgba(228, 106, 106, 0)';
        email.style.borderColor = 'green';
        document.getElementById('email-error').innerHTML = '';
    }
    return error;
};