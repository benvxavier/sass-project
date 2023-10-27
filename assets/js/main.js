console.log('Executing main.js');

import "./utils.js";
import "./menu.js";
import "./scroll-swipe.js";

import { registerHeadComponent } from "./components/head.js";
import { registerHeaderComponent } from "./components/header.js";
import { registerFooterComponent } from "./components/footer.js";
import { registerCardComponent } from "./components/card.js";

// Register components

registerHeadComponent();
registerHeaderComponent();
registerFooterComponent();

registerCardComponent();

