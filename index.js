import{a as l,S as u,i}from"./assets/vendor-D-1act8A.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const p="49321124-d9248d4be3ea0dc21aad93268",f="https://pixabay.com/api/";function d(o){return l.get(f,{params:{key:p,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(t=>t.data.hits).catch(t=>(console.error("Error fetching images:",t),[]))}function m(o){const t=document.querySelector(".gallery");t.innerHTML="",t.innerHTML=o.map(s=>`
    <li class="gallery-item">
      <a href="${s.largeImageURL}" class="gallery-link">
        <img src="${s.webformatURL}" alt="${s.tags}" loading="lazy">
      </a>
      <div class="info">
        <p><span class="matter">Likes</span> ${s.likes}</p>
        <p><span class="matter">Views</span> ${s.views}</p>
        <p><span class="matter">Comments</span> ${s.comments}</p>
        <p><span class="matter">Downloads</span> ${s.downloads}</p>
      </div>
    </li>
  `).join(""),new u(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}const c=document.querySelector(".form"),y=c.querySelector("input[name='search-text']");c.addEventListener("submit",function(o){o.preventDefault();const t=y.value.trim();if(!t){i.error({message:"Please enter a search query!"});return}d(t).then(n=>{n.length===0?i.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):m(n)})});
//# sourceMappingURL=index.js.map
