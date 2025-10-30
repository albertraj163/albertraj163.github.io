
// Small enhancement: if profile.jpg is empty, show initials background instead
window.addEventListener('DOMContentLoaded', ()=>{
  const img = document.getElementById('profileImg');
  fetch(img.src).then(resp=>{
    if(resp.status===200 && resp.headers.get('Content-Length')!=='0'){
      // image exists - nothing to do
    } else {
      // replace with initial-style placeholder
      img.remove();
      const wrap = document.querySelector('.photo-wrap');
      const el = document.createElement('div');
      el.className = 'initials';
      el.textContent = 'AR';
      el.style.fontSize='48px';
      el.style.fontWeight='800';
      wrap.appendChild(el);
      wrap.style.background = 'linear-gradient(135deg,#0ea5e9,#7c3aed)';
      wrap.style.display='flex';
      wrap.style.alignItems='center';
      wrap.style.justifyContent='center';
    }
  }).catch(err=>{
    img.remove();
    const wrap = document.querySelector('.photo-wrap');
    const el = document.createElement('div');
    el.className = 'initials';
    el.textContent = 'AR';
    el.style.fontSize='48px';
    el.style.fontWeight='800';
    wrap.appendChild(el);
  });
});
