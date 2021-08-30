const htmlElements = {
    tagList: document.querySelector('ul.tag-list')
}

function buildTagsList(tagsArray) {
    tagsArray.map(item => {
        const li = document.createElement('li');
        li.textContent = item;
        return li;
    })
        .forEach(item => {
            htmlElements.tagList.appendChild(item);
        })
}

export { buildTagsList };