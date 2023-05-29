import './styles/main.scss';
import { showMessage } from './lib/dom';

async function bake() {
    const title = 'Baking cookies';
    let counter = 0;

    console.clear();
    console.group(title);

    counter++;
    console.log(`${counter} - Add ingredients`);
    showMessage(`${counter} - Add ingredients`, title);

    counter++;
    console.log(`${counter} - Mix ingredients`);
    showMessage(`${counter} - Mix ingredients`, title, true);

    function bakeInOven(cb: () => void) {
        setTimeout(() => {
            counter++;
            console.log(`${counter} - Bake at 200 degrees for 10 minutes`);
            showMessage(
                `${counter} -Bake at 200 degrees for 10 minutes`,
                title,
                true,
            );
            cb();
        }, 3000);
    }
    bakeInOven(eat);
    function eat() {
        counter++;
        console.log(`${counter} - Eat cookies`);
        showMessage(`${counter} - Eat cookies`, title, true);

        console.groupEnd();
    }

    counter++;
    console.log(`${counter} - Eat cookies`);
    showMessage(`${counter} - Eat cookies`, title, true);

    console.groupEnd();
}
// @ts-ignore
document.querySelector('#bake-cookies').addEventListener('click', async () => {
    bake();
});
