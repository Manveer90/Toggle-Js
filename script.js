const togglebg = document.getElementById('toggleDark')
const body = document.querySelector('body')
const icon = document.getElementById('icon')
const password = document.getElementById('password')
const box = document.getElementById('box')
const card = document.getElementById('card')
const text = document.getElementById('text')

togglebg.addEventListener('click' , function(){
    this.classList.toggle('bi-moon')
    if (this.classList.toggle('bi-brightness-high-fill')) {
        body.style.background = 'white'
        body.style.color = 'black'
        body.style.transition = '2s'
        password.style.background = 'white'
        box.style.border = '2px solid black'
        text.textContent = 'JavaScript Toggle Light Mode'
        text.style.transition = '2s'
    }else{
       body.style.background = 'black'
        body.style.color = 'white'
        body.style.transition = '2s'
        box.style.border = '2px solid white'
        text.textContent = 'JavaScript Toggle Dark Mode'
        text.style.transition = '2s'
    }
})

icon.addEventListener('click' , function () {
      if(password.type === 'password'){
        password.type = 'text'
        this.src = 'eye-open.png'
    }else{
        password.type = 'password'
        this.src = 'eye-close.png'
    }
})

card.addEventListener('click', () => {
    card.classList.toggle('flipped');
});


