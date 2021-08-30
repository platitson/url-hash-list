import React from 'react';
import styles from './Tags.module.scss';

function Tags({ tags }) {
    const addNewTag = (evt) => {
        evt.preventDefault();
        const tag = evt.target.tag.value;
        window.location.href = `${window.location.hash},${tag}`;
    }

    const deleteTag = (event) => {
        let tag = event.target.closest('LI');
        if (!tag) return;
        let tagList = event.target.closest('UL');
        tagList.removeChild(tag);
        const tagsArray = Array.from(tagList.childNodes)
            .map(item => item.innerHTML);
        window.location.href = `#tags=${tagsArray}`;
    }

    return (
        <div className={styles.container}>
            <h2>Tag list</h2>
            <ul onClick={deleteTag}>
                {tags.map((item, idx) => {
                    return <li key={idx}>{item}</li>
                })}
            </ul>
            <h2>Add your own tag</h2>
            <form onSubmit={addNewTag}>
                <input name="tag" type="text" placeholder="Type your tag" />
                <button type='submit'>Add tag</button>
            </form>
        </div>
    )
}

export default Tags;