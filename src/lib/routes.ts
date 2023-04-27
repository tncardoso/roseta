import { goto } from '$app/navigation';
import { base } from '$app/paths';

export function search(query) {
    console.log('sear');
    //let params = $page.url.searchParams;
    //console.log(params.toString());
    //params.set('q', query);
    //console.log(params.toString());
    //goto(`?${params.toString()}`);    
    //goto(`?q=${query}`, { invalidateAll: true });

    let gparams = { keepFocus: true }
    if (query) {
      goto(`${base}/?q=${query}`, gparams);
    } else {
      goto(`${base}/?q=*`, gparams);
    }
  }

