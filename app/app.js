import Cycle from '@cycle/core';
import { makeDOMDriver, hJSX } from '@cycle/dom';
import { Observable } from 'rx';

import Counter from './components/counter';

function main(sources) {
    return Counter(sources);
}

const drivers = {
    DOM: makeDOMDriver('#app')
};

Cycle.run(main, drivers);
