import{a as l,i as a}from"./assets/vendor-BECR_FLZ.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const u="49321124-d9248d4be3ea0dc21aad93268",f="https://pixabay.com/api/";function d(n){return l.get(f,{params:{key:u,q:n,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(function(o){return o.data.hits})}function p(n){const o=document.querySelector(".gallery");o.innerHTML=n.map(t=>`
    <li class="gallery-item">
      <a href="${t.largeImageURL}" target="_blank">
        <img src="${t.webformatURL}" alt="${t.tags}" loading="lazy">
      </a>
      <div class="info">
        <p>👍 ${t.likes}</p>
        <p>👁 ${t.views}</p>
        <p>💬 ${t.comments}</p>
        <p>⬇️ ${t.downloads}</p>
      </div>
    </li>
  `).join("")}const c=document.querySelector(".form"),m=c.querySelector("input[name='search-text']");c.addEventListener("submit",function(n){n.preventDefault();const o=m.value.trim();if(!o){a.error({message:"Please enter a search query!"});return}d(o).then(t=>{t.length===0?a.error({message:"Something went wrong. Please try again later."}):p(t)})});
//# sourceMappingURL=index.js.map
