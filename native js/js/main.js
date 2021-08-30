import { initialTags } from './initialTags.js';
import { buildTagsList } from './tagsListBuilder.js';
import './addTags.js';
import './deleteTags.js';

window.addEventListener('load', () => {
    if (location.hash && location.hash != `#tags=${initialTags}`) {
        const tagsArray = location.hash
            .split('#tags=')[1]
            .split(',')
            .map(item => item.replace('%20', ''))
            .filter(item => item.length > 0);
        location.href = `#tags=${tagsArray}`;
        buildTagsList(tagsArray);
    } else {
        location.href = `#tags=${initialTags}`;
        buildTagsList(initialTags);
    }
})

window.addEventListener('hashchange', () => {
    location.reload();
})