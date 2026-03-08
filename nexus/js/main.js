// ── CURSOR ──
const cursor = document.getElementById('cursor');
const ring = document.getElementById('cursorRing');
let mx = 0, my = 0, rx = 0, ry = 0;
if (cursor && ring) {
  document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; cursor.style.left = mx+'px'; cursor.style.top = my+'px'; });
  function animRing() { rx += (mx-rx)*.12; ry += (my-ry)*.12; ring.style.left=rx+'px'; ring.style.top=ry+'px'; requestAnimationFrame(animRing); }
  animRing();
  document.querySelectorAll('a,button,input,textarea,select').forEach(el => {
    el.addEventListener('mouseenter',()=>{ cursor.style.width='16px'; cursor.style.height='16px'; ring.style.width='52px'; ring.style.height='52px'; });
    el.addEventListener('mouseleave',()=>{ cursor.style.width='10px'; cursor.style.height='10px'; ring.style.width='36px'; ring.style.height='36px'; });
  });
}
window.addEventListener('scroll',()=>{ const n=document.querySelector('nav'); if(n) n.style.borderBottomColor=window.scrollY>60?'rgba(200,255,0,.1)':'rgba(255,255,255,.07)'; });
const toggle=document.getElementById('navToggle'); const navLinks=document.getElementById('navLinks');
if(toggle&&navLinks) toggle.addEventListener('click',()=>navLinks.classList.toggle('open'));
const reveals=document.querySelectorAll('.reveal');
const obs=new IntersectionObserver(entries=>entries.forEach(e=>{ if(e.isIntersecting) e.target.classList.add('visible'); }),{threshold:0.1});
reveals.forEach(el=>obs.observe(el));
const path=window.location.pathname.split('/').pop()||'index.html';
document.querySelectorAll('.nav-links a').forEach(a=>{ const href=a.getAttribute('href'); if(href===path||(path===''&&href==='index.html')) a.classList.add('active'); });
function showToast(msg){ const t=document.createElement('div'); t.style.cssText='position:fixed;bottom:2rem;right:2rem;background:var(--acid);color:#080808;font-family:JetBrains Mono,monospace;font-size:.78rem;padding:.8rem 1.5rem;z-index:9000;letter-spacing:.1em;'; t.textContent=msg; document.body.appendChild(t); setTimeout(()=>t.remove(),3000); }
const s=document.createElement('style'); s.textContent='@keyframes fadeInUp{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}'; document.head.appendChild(s);
