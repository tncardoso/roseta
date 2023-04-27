import { goto } from '$app/navigation';

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
      goto(`/?q=${query}`, gparams);
    } else {
      goto(`/?q=*`, gparams);
    }
  }

