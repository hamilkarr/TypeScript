const button = document.querySelector('button')!;

function clickHandler(message: string) {
    console.log('Clicked! ' + message);
}

// a comment
button.addEventListener('click', clickHandler.bind(null, "You're welcome!"));
