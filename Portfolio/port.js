// animated background follow cursor
document.addEventListener('mousemove', e=>{
  const x=e.clientX/window.innerWidth*100;
  const y=e.clientY/window.innerHeight*100;
  document.body.style.background=`radial-gradient(circle at ${x}% ${y}%, #d7b6ff, #8066ff 80%)`;
});
// fade-in on scroll
const sections=document.querySelectorAll('section');
window.addEventListener('scroll',()=>{
  const trigger=window.innerHeight*0.85;
  sections.forEach(s=>{
    const top=s.getBoundingClientRect().top;
    if(top<trigger)s.classList.add('visible');
  });
// fade-in sections when they enter view
const sections = document.querySelectorAll('section');
window.addEventListener('scroll', () => {
  const trigger = window.innerHeight * 0.8;
  sections.forEach(sec => {
    const top = sec.getBoundingClientRect().top;
    if (top < trigger) sec.classList.add('visible');
  });
});

});
