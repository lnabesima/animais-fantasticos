import SmoothScroll from './modules/smoothScroll.js';
import Accordion from './modules/accordion.js';
import TabMenu from './modules/tabMenu.js';
import Modal from './modules/modal.js';
import Tooltip from './modules/tooltip.js';
import fetchAnimals from './modules/fetchAnimals.js';
import fetchBitcoinPrice from './modules/fetchBitcoinPrice.js';
import AnimateScroll from './modules/animateScroll.js';
import DropDownMenu from './modules/dropDownMenu.js';

import initMobileMenu from './modules/mobileMenu.js';
import initWorkingHours from './modules/workingHours.js';

const smoothScroll = new SmoothScroll('[data-menu] a[href^="#"]');
smoothScroll.init();

const accordion = new Accordion('[data-accordion] dt');
accordion.init();

const tabMenu = new TabMenu('[data-tabmenu] li', '[data-tabcontent] section');
tabMenu.init();

const modal = new Modal(
  '[data-modal=open]',
  '[data-modal=close]',
  '[data-modal=container]'
);
modal.init();

const tooltip = new Tooltip('[data-tooltip]');
tooltip.init();

fetchAnimals('./src/animaisApi.json', '.numeros-grid');
fetchBitcoinPrice(`https://blockchain.info/ticker`, '.btc-price');

const animateScroll = new AnimateScroll('[data-scroll]');
animateScroll.init();

const dropDownMenu = new DropDownMenu('[data-dropdown]', "active");
dropDownMenu.init();

initMobileMenu();
initWorkingHours();
