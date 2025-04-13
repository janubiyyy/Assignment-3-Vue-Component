import { createApp } from "vue";
import Greeter from "./Greeter.vue";

const GreeterAPI = {
  init(selector, props = {}) {
    const container = document.querySelector(selector);
    if (!container) {
      console.error("Selector not found:", selector);
      return;
    }
    const app = createApp(Greeter, props);
    app.mount(container);
  },
};

if (typeof window !== "undefined") {
  window.Greeter = GreeterAPI;
}

export default GreeterAPI;
