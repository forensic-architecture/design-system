import "./styles/main.scss";
import Button from "./components/Button/Button.vue";


const exportedComponents = {
  Button,
}

export function install(Vue) {
	if (install.installed) return;
	install.installed = true;
  Object.keys(exportedComponents).forEach(comp => {
    Vue.component(comp, exportedComponents[comp])
  })
}

// Create module definition for Vue.use()
const plugin = {
	install,
};

// Auto-install when vue is found (eg. in browser via <script> tag)
let GlobalVue = null;
if (typeof window !== 'undefined') {
	GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
	GlobalVue = global.Vue;
}
if (GlobalVue) {
	GlobalVue.use(plugin);
}

// To allow use as module (npm/webpack/etc.) export component
export default exportedComponents;

