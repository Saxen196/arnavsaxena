import{highlightSearchTerm}from"./highlight-search-term.js";document.addEventListener("DOMContentLoaded",(function(){const e=e=>{if(document.querySelectorAll(".bibliography, .unloaded").forEach((e=>e.classList.remove("unloaded"))),CSS.highlights){const t=highlightSearchTerm({search:e,selector:".bibliography > li"});if(null==t)return;t.forEach((e=>{e.classList.add("unloaded")}))}else document.querySelectorAll(".bibliography > li").forEach((t=>{-1==t.innerText.toLowerCase().indexOf(e)&&t.classList.add("unloaded")}));document.querySelectorAll("h2.bibliography").forEach((function(e){let t=e.nextElementSibling,l=!0;for(;t&&"H2"!==t.tagName;){if("OL"===t.tagName){const e=t,n=e.querySelectorAll(":scope > li.unloaded"),o=e.querySelectorAll(":scope > li");n.length===o.length?(e.previousElementSibling.classList.add("unloaded"),e.classList.add("unloaded")):l=!1}t=t.nextElementSibling}l&&e.classList.add("unloaded")}))},t=()=>{const t=decodeURIComponent(window.location.hash.substring(1));document.getElementById("bibsearch").value=t,e(t)};let l;document.getElementById("bibsearch").addEventListener("input",(function(){clearTimeout(l);const t=this.value.toLowerCase();l=setTimeout(e(t),300)})),window.addEventListener("hashchange",t),t()}));