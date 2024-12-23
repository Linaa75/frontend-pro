function button() {
    const btnFirst = document.getElementById('btn-first');
    const btnSecond = document.getElementById('btn-second');
    let url = '';

    btnFirst.addEventListener('click', function() {
       url = prompt("Enter the link you would like to open");

        try {
            new URL(url);
            alert("Valid URL!");
        } catch (e) {
            alert("Invalid URL! Please enter a valid URL.");
            url = ''; 
        }
    });

    btnSecond.addEventListener('click', function() {
        if (url) {
            location.href = url;
        } else {
            alert("No valid URL entered!");
        }
    });
}

button();