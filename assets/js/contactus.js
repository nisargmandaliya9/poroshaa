let form = document.forms['contact-form'];
let formMessages = document.getElementById('form-messages');
form.addEventListener('submit', function(event) {
    event.preventDefault();

    fetch('https://script.google.com/macros/s/AKfycbyWrxYZXSatIXDs9PBNWjIXEayyYAaS5fMHSbxSD2QDDl_3DioQqlU15VW-xQoWMTnw/exec', {
        method: 'POST',
        body: new FormData(form)
    })
    // .then(response => {
    //     if (!response.ok) {
    //         throw new Error('Network response was not ok ' + response.statusText);
    //     }
    //     return response.json();
    // })
    .then(data => {
        form.reset();
        formMessages.textContent = 'Your message has been sent successfully!';
        formMessages.style.color = '#2eb50d';
        formMessages.style.fontWeight = '600';
        setTimeout(() => {
            formMessages.textContent = '';
            formMessages.style.color = '';
        }, 5000);
    })
    .catch(error => {
        formMessages.textContent = 'Could not send message, please try again.';
        formMessages.style.color = '#d10c08';
        formMessages.style.fontWeight = '600';
        setTimeout(() => {
            formMessages.textContent = '';
            formMessages.style.color = '';
        }, 5000);
    });
});