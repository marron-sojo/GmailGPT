console.log('----------RUN----------');
// const composeButton = document.querySelector('div[aria-label="Compose"]');
// const composeButton = document.querySelector('.T-I, .T-I-KE, .L3');
document.addEventListener('click', function() {
    const composeButton = document.getElementsByClassName("T-I T-I-KE L3")[0];
    console.log(composeButton)

    // composeButton.addEventListener('click', function() {
        console.log("clicked")
        const newMessage = document.querySelector('div[aria-label="New Message"]');
        if (newMessage) {
            const sendButton = document.querySelector('div[data-tooltip*="Send"]');
            console.log('newMessage');
            // Create a new icon element
            const icon = document.createElement('span');
            icon.innerHTML = '🚀';
            icon.title = 'Click here to launch your email!';

            // Add the icon to the parent element of the Send button
            sendButton.parentNode.insertBefore(icon, sendButton);
        }
    // });
});
