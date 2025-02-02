export const canUseDOM = !!(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
);

export const canUseEventListeners: boolean = canUseDOM && !!window.addEventListener;

export function onDOMLoaded(callback: (...args: any[]) => any) {
  if (document.readyState !== 'loading') {
    callback();
  } else {
    document.addEventListener('DOMContentLoaded', callback);
  }
}
