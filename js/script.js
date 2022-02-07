import SmoothScroll from './modules/smoothScroll.js';
import Accordion from './modules/accordion.js';
import TabMenu from './modules/tabMenu.js';
import Modal from './modules/modal.js';
import Tooltip from './modules/tooltip.js';

import initAnimateScroll from './modules/animateScroll.js';
import initDropDownMenu from './modules/dropDownMenu.js';
import initMobileMenu from './modules/mobileMenu.js';
import initWorkingHours from './modules/workingHours.js';
import fetchAnimals from './modules/fetchAnimals.js';
import initFetchBitcoinPrice from './modules/fetchBitcoinPrice.js';

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

initAnimateScroll();
initDropDownMenu();
initMobileMenu();
initWorkingHours();
fetchAnimals('./src/animaisApi.json', '.numeros-grid');
initFetchBitcoinPrice();
