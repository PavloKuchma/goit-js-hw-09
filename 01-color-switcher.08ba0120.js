const t={startBtn:document.querySelector("[data-start]"),stopBtn:document.querySelector("[data-stop]")};function n(){return`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}function e(n,e){t.startBtn.disabled=n,t.stopBtn.disabled=e}t.startBtn.addEventListener("click",(function(){e(!0,!1),document.body.style.backgroundColor=n(),setIntervalFn=setInterval((()=>{document.body.style.backgroundColor=n()}),1e3)})),t.stopBtn.addEventListener("click",(function(){e(!1,!0),clearInterval(setIntervalFn)}));
//# sourceMappingURL=01-color-switcher.08ba0120.js.map
