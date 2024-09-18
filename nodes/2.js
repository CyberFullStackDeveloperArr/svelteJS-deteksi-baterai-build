

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.QSCJB1cC.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.NXekTHeV.js"];
export const stylesheets = ["_app/immutable/assets/2.DlBHkk1W.css"];
export const fonts = [];
