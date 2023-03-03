// let isBtnShowing = false;

// document.addEventListener('click', function(e) {
//     // 0. new message label
//     const newMessage = document.querySelector('div[aria-label="New Message"]');

//     // 1. compose button
//     const composeButton = document.getElementsByClassName("T-I T-I-KE L3")[0];
//     // 2. reply button

//     // 3. forward button

//     // const newMessage = document.querySelector('div[aria-label="New Message"]');
    // if (newMessage && !isBtnShowing) {
    //     const sendButton = document.querySelector('div[data-tooltip*="Send"]');
    //     // Create a new icon element
    //     const icon = document.createElement('div');
    //     icon.innerHTML = '🚀';
    //     icon.title = 'Click here to launch your email!';

    //     // Add the icon to the parent element of the Send button
    //     // sendButton.parentNode.insertBefore(icon, sendButton);
    //     (sendButton.parentNode.parentNode.parentNode).insertAdjacentElement('afterend', icon);

    //     // // Add the icon to the parent element of the Send button
    //     // sendButton.parentNode.insertBefore(icon, sendButton);
    //     isBtnShowing = true;
    // }
// });



// select the body element
const body = document.querySelector('body');

// create a new MutationObserver object and pass it a callback function
const observer = new MutationObserver(function(mutationsList, observer) {
  // iterate through each mutation in the mutations list
  for (const mutation of mutationsList) {
    // check if a new element has been added to the body
    if (mutation.type === 'childList' && mutation.addedNodes.length > 0 && mutation.target === body) {
      // do something with the new element, such as log a message to the console
    //   console.log('A new element was added to the body:', mutation.addedNodes[0]);
      
        const newWindow = mutation.addedNodes[0].closest('div[aria-label="New Message"]')
        console.log(newWindow)
        if (newWindow) {
            const sendButton = document.querySelector('div[data-tooltip*="Send"]');
            // Create a new icon element
            const icon = document.createElement('div');
            icon.innerHTML = '🚀';
            icon.title = 'Click here to launch your email!';
    
            // Add the icon to the parent element of the Send button
            // sendButton.parentNode.insertBefore(icon, sendButton);
            (sendButton.parentNode.parentNode.parentNode).insertAdjacentElement('afterend', icon);
        }
    }
  }
});

// call the observer's observe method to start watching for changes to the DOM
observer.observe(body, { childList: true });




// // select the div element with ID "no"
// // const noDiv = document.getElementsByClassName("dw")[0];

// console.log('script.js started running');

// // write a function that will be called when the DOM is loaded
// function domLoaded() {
//     console.log('The DOM has loaded');
// }

// const setTimeout(domLoaded(), 10000);


// console.log('AFTER!!!!');

// const noDiv = document.querySelector("div.dw");
// console.log(noDiv);
// // create a new MutationObserver object and pass it a callback function
// const observer = new MutationObserver(function(mutationsList, observer) {
//     console.log('mutation observer was created');
//   // iterate through each mutation in the mutations list
//   for (const mutation of mutationsList) {
//     // check if a new div element has been added to the div with ID "no"
//     if (mutation.type === 'childList' && mutation.addedNodes.length > 0 && mutation.target === noDiv) {
//       // iterate through each added node and check if it is a div element
//       mutation.addedNodes.forEach(function(node) {
//         if (node.nodeType === Node.ELEMENT_NODE && node.nodeName === 'DIV') {
//             console.log('The new div element was found');

//           // do something with the new div element, such as add an event listener
//           node.addEventListener('click', function() {
//             console.log('The new div element was clicked');
//           });
//         }
//       });
//     }
//   }
// });

// // call the observer's observe method to start watching for changes to the DOM
// observer.observe(noDiv, { childList: true });