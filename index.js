import{a as u,S as d,i}from"./assets/vendor-D-1act8A.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const p="49321124-d9248d4be3ea0dc21aad93268",f="https://pixabay.com/api/";function m(n){return u.get(f,{params:{key:p,q:n,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data.hits).catch(r=>(console.error("Error fetching images:",r),[]))}function h(n){const r=document.querySelector(".gallery");r.innerHTML=n.map(o=>`
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
  `).join(""),new d(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}const l=document.querySelector(".form"),c=document.querySelector(".loader"),y=l.querySelector("input[name='search-text']"),g=document.querySelector(".gallery");function L(){c.classList.remove("hidden")}function S(){c.classList.add("hidden")}l.addEventListener("submit",function(n){n.preventDefault();const r=y.value.trim();if(g.innerHTML="",!r){i.error({message:"Please enter a search query!"});return}L(),m(r).then(s=>{s.length===0?i.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):h(s)}).catch(s=>{i.error({message:"Something went wrong. Please try again later!",position:"topRight"}),console.error("Error fetching images:",s)}).finally(()=>S())});
//# sourceMappingURL=index.js.map
