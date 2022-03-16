'use strict';

let nombre = prompt('Dime tu nombre y tu primer apellido');
const result = confirm('¿Te apetece un cafe?');

if (result === true) {
    alert(
        `¡Bienvenid@ ${nombre}! En breves recibirá su café calentito en casa.`
    );
    console.log(
        `¡Bienvenid@ ${nombre}! En breves recibirá su café calentito en casa.`
    );
} else {
    alert('¡Bienvenid@ ! Hoy no hay café.');
    console.log('¡Bienvenid@ ! Hoy no hay café.');
}
