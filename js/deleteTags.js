const htmlElements = {
    tagList: document.querySelector('ul.tag-list')
}

const deleteTag = (event) => {
    let tag = event.target.closest('LI');
    if (!tag) return;
    htmlElements.tagList.removeChild(tag);
    const tagsArray = Array.from(htmlElements.tagList.childNodes)
        .map(item => item.innerHTML);
    location.href = `#tags=${tagsArray}`;
}

htmlElements.tagList.addEventListener('click', deleteTag);