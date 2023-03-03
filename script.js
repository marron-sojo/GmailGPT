let isBtnShowing = false;

document.addEventListener('click', function(e) {
    // 0. new message label
    const newMessage = document.querySelector('div[aria-label="New Message"]');

    // 1. compose button
    const composeButton = document.getElementsByClassName("T-I T-I-KE L3")[0];
    // 2. reply button

    // 3. forward button

    // const newMessage = document.querySelector('div[aria-label="New Message"]');
    if (newMessage && !isBtnShowing) {
        const sendButton = document.querySelector('div[data-tooltip*="Send"]');
        // Create a new icon element
        const icon = document.createElement('div');
        icon.innerHTML = '🚀';
        icon.title = 'Click here to launch your email!';

        // Add the icon to the parent element of the Send button
        // sendButton.parentNode.insertBefore(icon, sendButton);
        (sendButton.parentNode.parentNode.parentNode).insertAdjacentElement('afterend', icon);

        // // Add the icon to the parent element of the Send button
        // sendButton.parentNode.insertBefore(icon, sendButton);
        isBtnShowing = true;
    }
});