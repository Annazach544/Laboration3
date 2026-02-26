import '../scss/style.scss';
import javascriptLogo from '../assets/javascript.svg';
const viteLogo = '/vite.svg'; // ligger i public
import { setupCounter } from './counter.js';

document.querySelector('#app').innerHTML = `
  <div>
    <img src="${viteLogo}" class="logo" alt="Vite logo" />
    <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
  </div>
`;

setupCounter(document.querySelector('#counter'));