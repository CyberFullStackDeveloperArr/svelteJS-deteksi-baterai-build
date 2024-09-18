

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.HYKoVDu7.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.NXekTHeV.js","_app/immutable/chunks/entry.DGD-zQtL.js"];
export const stylesheets = [];
export const fonts = [];
