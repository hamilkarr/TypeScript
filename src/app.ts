function Logger(logString: string) {
    console.log('LOGGER FACTORY');
    return function (constructor: Function) {
        console.log(logString);
        console.log(constructor);
    };
}

function WidthTemplate(template: string, hookId: string) {
    console.log('TEMPLATE FACTORY');
    return function (_: Function) {
        console.log('Rendering template');
        const hookEl = document.getElementById(hookId);
        if (hookEl) {
            hookEl.innerHTML = template;
        }
    };
}

// @Logger('LOGGING - PERSON')
@Logger('LOGGING')
@WidthTemplate('<h1>My Person Object</h1>', 'app')
class Person {
    name = 'Max';
    constructor() {
        console.log('Creating person object...');
    }
}

const person = new Person();
console.log(person);
