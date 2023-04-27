import {getPrompt} from '$lib/data/index.ts';

export function load({ params }) {
    return getPrompt(params.id);
}