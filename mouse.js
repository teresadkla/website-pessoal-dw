
const circleSvg = document.querySelector('svg')
const btn = document.querySelector('button')

let mouseX = 0
let mouseY = 0
//let intv = 0

window.addEventListener('mousemove', (event) => {
    // circleSvg.style.top = event.clientY - 45;
    // circleSvg.style.left = event.clientX - 45;

    mouseY = (event.clientY / 16) - (45 / 16) + 'rem'
    mouseX = (event.clientX / 16) - (45 / 16) + 'rem'
})

const mouseMove = () => {
    //intv += 1
    
    circleSvg.style.top = mouseY
    circleSvg.style.left = mouseX

    //circleSvg.style.opacity = 1 + Math.sin(intv * .04)
    //console.log(Math.sin(intv * .04))

    window.requestAnimationFrame(mouseMove)
}

mouseMove()

var tl = gsap.timeline({defaults: {ease: "power2.inOut"}})

tl.to(circleSvg, {width: 0, opacity: 0})
tl.to('body, button', {background: 'white'})
tl.pause()

btn.addEventListener('click', () => {
    tl.play()
})