import isolate from '@cycle/isolate';
import { hJSX } from '@cycle/dom';
import { Observable } from 'rx';

function intent(DOMSource) {
    return {
        increment$: DOMSource.select('.increment').events('click')
            .map(ev => +1),
        decrement$: DOMSource.select('.decrement').events('click')
            .map(ev => -1)
    };
}

function model(changes$) {
    const { increment$, decrement$ } = changes$;
    return Observable.of(0).merge(increment$)
            .merge(decrement$)
            .scan((prev, curr) => prev + curr);
}

function view(values$) {
    return values$.map(i =>
        <div>
            <button className='decrement'>-</button>
            <span>{i}</span>
            <button className='increment'>+</button>
        </div>
    );
}

function counter(sources) {
    const change$ = intent(sources.DOM);
    const values$ = model(change$);
    const vtree$ = view(values$);
    return {
        DOM: vtree$
    };
}

export default sources => isolate(counter)(sources);
