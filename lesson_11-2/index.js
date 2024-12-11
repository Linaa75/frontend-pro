document.addEventListener('DOMContentLoaded', () => {

const text = document.getElementById('text');
const button = document.getElementById('btn');
const defaultColor = window.getComputedStyle(text).color;

    button.addEventListener('click', () => {
        if (text.style.color === "red") {
            text.style.color = defaultColor;
        } else {
            text.style.color = "red";
        }
    });
});

 