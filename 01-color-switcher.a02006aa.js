const t={startBtn:document.querySelector("[data-start]"),stopBtn:document.querySelector("[data-stop]")};let n=null;function e(){return`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}function o(n,e){t.startBtn.disabled=n,t.stopBtn.disabled=e}t.startBtn.addEventListener("click",(function(){o(!0,!1),document.body.style.backgroundColor=e(),n=setInterval((()=>{document.body.style.backgroundColor=e()}),1e3)})),t.stopBtn.addEventListener("click",(function(){o(!1,!0),clearInterval(n)}));
//# sourceMappingURL=01-color-switcher.a02006aa.js.map
