console.log("script loaded");

function injectScript() {
    const script = document.createElement('script');
    script.src = browser.runtime.getURL('dist/custom_script.js');
    (document.head || document.documentElement).appendChild(script);
}

injectScript();

window.addEventListener('load', injectScript);