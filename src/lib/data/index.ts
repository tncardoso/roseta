import lunr from 'lunr';
import prompts_raw from '$lib/data/prompts.json';

export let prompts = prompts_raw;

export let index = lunr(function() {
    this.ref('id');
    this.field('title');
    this.field('prompt');
    this.field('tags');

    for (let i = 0; i < prompts.length; i++) {
        prompts[i]['id'] = i;
        this.add(prompts[i]);
    }
});

export function search(query) {
    let result = []
	const res = index.search(query);
	res.forEach(doc => {
	    result.push(prompts[parseInt(doc.ref)]);
    });
    return result;
}

export function getPrompt(i) {
    return prompts[i];
}