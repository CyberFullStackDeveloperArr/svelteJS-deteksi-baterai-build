import { c as create_ssr_component, v as validate_component } from "../../chunks/ssr.js";
import { e as escape } from "../../chunks/escape.js";
const css = {
  code: "@import './Battery.css';",
  map: `{"version":3,"file":"Battery.svelte","sources":["Battery.svelte"],"sourcesContent":["<script>\\r\\n    import { onMount } from 'svelte';\\r\\n\\r\\n    let batteryLevel = 0;\\r\\n    let batteryPercentage = '0%';\\r\\n\\r\\n    function updateBatteryStatus(battery) {\\r\\n     batteryLevel = Math.min(battery.level * 100, 100);\\r\\n     batteryPercentage = \`\${Math.round(battery.level * 100)}%\`;\\r\\n    }\\r\\n\\r\\n    onMount(() => {\\r\\n        navigator.getBattery().then((battery) => {\\r\\n         updateBatteryStatus(battery);\\r\\n\\r\\n            battery.addEventListener('levelchange', () => {\\r\\n             updateBatteryStatus(battery);\\r\\n            });\\r\\n            \\r\\n        });\\r\\n    });\\r\\n<\/script>\\r\\n\\r\\n<div class=\\"battery\\">\\r\\n    <div class=\\"top\\"></div>\\r\\n    <div class=\\"charge1\\" style=\\"width: {Math.min(batteryLevel * 3.26, 326)}px;\\"></div>\\r\\n    <div class=\\"container\\">\\r\\n     <h2>{batteryPercentage}</h2>\\r\\n     <h4>&copy; 2024 Ghost Code Night. All rights reserved</h4>\\r\\n     <b>Battery Detection Device</b>\\r\\n     <h1>Svelte Js</h1>\\r\\n    </div>\\r\\n</div>\\r\\n\\r\\n<style>\\r\\n   @import './Battery.css';\\r\\n</style>"],"names":[],"mappings":"AAmCG,QAAQ,eAAe"}`
};
const Battery = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let batteryLevel = 0;
  let batteryPercentage = "0%";
  $$result.css.add(css);
  return `<div class="battery"><div class="top"></div> <div class="charge1" style="${"width: " + escape(Math.min(batteryLevel * 3.26, 326), true) + "px;"}"></div> <div class="container"><h2>${escape(batteryPercentage)}</h2> <h4 data-svelte-h="svelte-trxsns">© 2024 Ghost Code Night. All rights reserved</h4> <b data-svelte-h="svelte-szezsw">Battery Detection Device</b> <h1 data-svelte-h="svelte-3w38rk">Svelte Js</h1></div> </div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-28km23_START -->${$$result.title = `<title>Battery Deteksi || Ghost Code Night</title>`, ""}<meta name="description" content="GhostCodeNight"><!-- HEAD_svelte-28km23_END -->`, ""} <section>${validate_component(Battery, "Battery").$$render($$result, {}, {}, {})}</section>`;
});
export {
  Page as default
};
