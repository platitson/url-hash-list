const htmlElements = {
    input: document.querySelector('input[type="text"]'),
    button: document.querySelector('button'),
}

const addNewTag = () => {
    const newTag = htmlElements.input.value;
    location.href = `${location.hash},${newTag}`;
}

htmlElements.button.addEventListener('click', addNewTag);