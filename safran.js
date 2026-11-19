(()=>{
/* lightbox voor alle [data-lb] knoppen, per groep */
const lb=document.createElement('div');lb.className='lb';lb.hidden=true;lb.innerHTML='<button class="x" aria-label="Fermer">×</button><button class="pv" aria-label="Précédent">‹</button><img alt=""><div class="cap"></div><button class="nx" aria-label="Suivant">›</button>';document.body.appendChild(lb);
const im=lb.querySelector('img'),cap=lb.querySelector('.cap');let list=[],i=0;
const show=()=>{const b=list[i];im.src=b.dataset.lb;im.alt=b.querySelector('img')?.alt||'';cap.innerHTML=b.dataset.cap||''};
document.addEventListener('click',e=>{const b=e.target.closest('[data-lb]');if(!b)return;e.preventDefault();const g=b.dataset.g||'all';list=[...document.querySelectorAll('[data-lb]')].filter(x=>(x.dataset.g||'all')===g&&!x.closest('[hidden]'));i=list.indexOf(b);show();lb.hidden=false});
const close=()=>{lb.hidden=true;im.src=''};
lb.addEventListener('click',e=>{if(e.target===lb||e.target.classList.contains('x'))close();if(e.target.classList.contains('nx')){i=(i+1)%list.length;show()}if(e.target.classList.contains('pv')){i=(i-1+list.length)%list.length;show()}});
addEventListener('keydown',e=>{if(lb.hidden)return;if(e.key==='Escape')close();if(e.key==='ArrowRight'){i=(i+1)%list.length;show()}if(e.key==='ArrowLeft'){i=(i-1+list.length)%list.length;show()}});
/* galerijfilter */
document.querySelectorAll('.gf').forEach(f=>f.addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;f.querySelectorAll('button').forEach(x=>x.classList.toggle('on',x===b));const c=b.dataset.c;document.querySelectorAll('.gg3 figure').forEach(fg=>fg.hidden=!(c==='all'||fg.dataset.c===c))}));
})();