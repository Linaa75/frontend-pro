"use strict";
const userName = document.getElementById('name');
const spanTextName = document.getElementById('name-span'); 

const textArea = document.getElementById('textarea');
const spanText = document.getElementById('text-span'); 

const email = document.getElementById('email');
const spanTextEmail = document.getElementById('email-span');

const phone = document.getElementById('phone');
const spanTextPhone = document.getElementById('phone-span'); 

const btnSubmit = document.getElementById('button');

function nameCheck(nameValue) {
    if (nameValue.trim() === '') {
        spanTextName.innerText = "Invalid name. Please, try again.";
        spanTextName.style.color = "red";
        return false;
    } else {
        spanTextName.innerText = "Valid!";
        spanTextName.style.color = "green";
        return true;
    }
}

function textAreaCheck(textValue) {
    if (textValue.length < 5) {
        spanText.innerText = "Message must be at least 5 characters long. Your message is too short.";
        spanText.style.color = "red";
        spanText.style.display = "block";
        return false;
    } else {
        spanText.style.display = "none";
        return true;
    }
}

function emailCheck(emailValue) {
    if (!/^[\w-]+(\.[\w-]+)*@[\w-]+\.[a-z]{2,3}$/.test(emailValue)) {
        spanTextEmail.innerText = "Invalid email address. Please, try again.";
        spanTextEmail.style.color = "red";
        return false;
    } else {
        spanTextEmail.innerText = "Valid!";
        spanTextEmail.style.color = "green";
        return true;
    }
}

function phoneCheck(phoneValue) {
    if (!/^\+380\d+$/.test(phoneValue)) {
        spanTextPhone.innerText = "Invalid phone number. Please, try again.";
        spanTextPhone.style.color = "red";
        return false;
    } else {
        spanTextPhone.innerText = "Valid!";
        spanTextPhone.style.color = "green";
        return true;
    }
}

userName.addEventListener('input', () => nameCheck(userName.value));
textArea.addEventListener('input', () => textAreaCheck(textArea.value));
email.addEventListener('input', () => emailCheck(email.value));
phone.addEventListener('input', () => phoneCheck(phone.value));

btnSubmit.addEventListener('click', (e) => {
    e.preventDefault();

    if (!userName.value.trim()) {
        spanTextName.innerText = "Name is required!";
        spanTextName.style.color = "red";
        userName.classList.add('invalid');
    }
    if (!email.value.trim()) {
        spanTextEmail.innerText = "Email is required!";
        spanTextEmail.style.color = "red";
        email.classList.add('invalid');
    }
    if (!phone.value.trim()) {
        spanTextPhone.innerText = "Phone is required!";
        spanTextPhone.style.color = "red";
        phone.classList.add('invalid');
    }
    
    if (nameCheck(userName.value) && emailCheck(email.value) && phoneCheck(phone.value)) {
        const formData = {
            name: userName.value,
            email: email.value,
            phone: phone.value,
            message: textArea.value
        };
        console.log("Form data submitted:", formData);
    } else {
        console.log("Form has errors.");
    }
});
