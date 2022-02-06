import SmoothScroll from './modules/smoothScroll.js';
import Accordion from './modules/accordion.js';

import initTabMenu from './modules/tabMenu.js';
import initAnimateScroll from './modules/animateScroll.js';
import initModal from './modules/modal.js';
import initTooltip from './modules/tooltip.js';
import initDropDownMenu from './modules/dropDownMenu.js';
import initMobileMenu from './modules/mobileMenu.js';
import initWorkingHours from './modules/workingHours.js';
import initFetchAnimals from './modules/fetchAnimals.js';
import initNumberAnimation from './modules/numberAnimation.js';
import initFetchBitcoinPrice from './modules/fetchBitcoinPrice.js';

const smoothScroll = new SmoothScroll('[data-menu] a[href^="#"]');
smoothScroll.init();

const accordion = new Accordion('[data-accordion] dt');
accordion.init();

initTabMenu();
initAnimateScroll();
initModal();
initTooltip();
initDropDownMenu();
initMobileMenu();
initWorkingHours();
initFetchAnimals();
initNumberAnimation();
initFetchBitcoinPrice();
