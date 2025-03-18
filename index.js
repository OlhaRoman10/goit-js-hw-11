import{a as u,S as d,i}from"./assets/vendor-D-1act8A.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const p="49321124-d9248d4be3ea0dc21aad93268",f="https://pixabay.com/api/";function m(s){return u.get(f,{params:{key:p,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(t=>t.data.hits).catch(t=>(console.error("Error fetching images:",t),[]))}function h(s){const t=document.querySelector(".gallery");t.innerHTML="",t.innerHTML=s.map(o=>`
    <li class="gallery-item">
      <a href="${o.largeImageURL}" class="gallery-link">
        <img src="${o.webformatURL}" alt="${o.tags}" loading="lazy">
      </a>
      <div class="info">
        <p><span class="matter">Likes</span> ${o.likes}</p>
        <p><span class="matter">Views</span> ${o.views}</p>
        <p><span class="matter">Comments</span> ${o.comments}</p>
        <p><span class="matter">Downloads</span> ${o.downloads}</p>
      </div>
    </li>
  `).join(""),new d(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}const c=document.querySelector(".form"),l=document.querySelector(".loader"),y=c.querySelector("input[name='search-text']");function g(){l.classList.remove("hidden")}function L(){l.classList.add("hidden")}c.addEventListener("submit",function(s){s.preventDefault();const t=y.value.trim();if(!t){i.error({message:"Please enter a search query!"});return}g(),m(t).then(n=>{n.length===0?i.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):h(n)}),L()});
//# sourceMappingURL=index.js.map
