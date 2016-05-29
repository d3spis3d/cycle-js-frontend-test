import Cycle from '@cycle/core';
import { makeDOMDriver, hJSX } from '@cycle/dom';
import { Observable } from 'rx';

function main(drivers) {
    return {
        DOM: Observable.interval(1000)
                .map(i =>
                    <div>
                        <h1>Hello was {i} seconds ago</h1>
                    </div>
                )
    };
}

const drivers = {
    DOM: makeDOMDriver('#app')
}

Cycle.run(main, drivers);
