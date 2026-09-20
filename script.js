const glow=document.querySelector(".cursor-glow");if(glow){window.addEventListener("pointermove",e=>{glow.style.left=e.clientX+"px";glow.style.top=e.clientY+"px"})}
const items=document.querySelectorAll(".reveal");const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("in")}),{threshold:.15});items.forEach(x=>observer.observe(x));
document.querySelectorAll("a[href^='#']").forEach(a=>a.addEventListener("click",e=>{const t=document.querySelector(a.getAttribute("href"));if(t){e.preventDefault();t.scrollIntoView({behavior:"smooth"})}}));
const header=document.querySelector("header");let last=0;window.addEventListener("scroll",()=>{const y=window.scrollY;header.style.transform=y>last&&y>80?"translateY(-100%)":"translateY(0)";header.style.transition="transform .35s ease";last=y});
document.querySelector(".menu")?.addEventListener("click",()=>{document.querySelector("nav").classList.toggle("open")});
