function redirectToWhatsApp(phoneNumber, message) {
    const formattedNumber = phoneNumber.replace(/\D/g, '');
    let whatsappUrl = `https://wa.me/${formattedNumber}`;

    if (message) {
        const encodedMessage = encodeURIComponent(message);
        whatsappUrl += `?text=${encodedMessage}`;
    }

    window.open(whatsappUrl, '_blank');
}

const whatsappBtn = document.getElementById('whatsapp-btn');
whatsappBtn.addEventListener('click', () => {
    redirectToWhatsApp('919974960604', 'Hello! I would like to chat with you.');
});

const whatsappIcon = document.getElementById('whatsapp_icon');
whatsappIcon.addEventListener('click', () => {
    redirectToWhatsApp('919974960604', 'Hello! I would like to chat with you.');
});
