function toggleMobileMenu(){
  const nav = document.querySelector('nav ul')
  const btn = document.querySelector('.hamburger')
  const expanded = btn.getAttribute('aria-expanded') === 'true'
  btn.setAttribute('aria-expanded', !expanded)
  if(nav.style.display === 'flex') nav.style.display = 'none'; else nav.style.display = 'flex'
  nav.style.flexDirection = 'column'
  nav.style.position = 'absolute'
  nav.style.right = '20px'
  nav.style.top = '70px'
  nav.style.background = 'linear-gradient(180deg, rgba(10,11,18,0.95), rgba(10,11,18,0.9))'
  nav.style.padding = '12px'
  nav.style.borderRadius = '12px'
  nav.style.minWidth = '200px'
}
const revealEls = document.querySelectorAll('.reveal')
const io = new IntersectionObserver(entries => {
  entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('visible') })
},{threshold:0.12})
revealEls.forEach(el=>io.observe(el))
function handleSubmit(e){
  e.preventDefault()
  const form = e.target
  const data = {name:form.name.value,email:form.email.value,phone:form.phone.value,message:form.message.value}
  alert('Bedankt ' + data.name + '! We hebben je bericht ontvangen en nemen binnen 24 uur contact op.')
  form.reset()
  document.getElementById('contact').scrollIntoView({behavior:'smooth'})
}
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const href = a.getAttribute('href')
    if(href.length>1){
      e.preventDefault()
      const el = document.querySelector(href)
      if(el) el.scrollIntoView({behavior:'smooth'})
    }
  })
})
