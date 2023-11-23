
const circleSvg = document.querySelector('svg')
const btn = document.querySelector('button')

let mouseX = 0
let mouseY = 0

window.addEventListener('mousemove', (event) => {
    mouseY = (event.pageY / 16) - (45 / 16) + 'rem'
    mouseX = (event.pageX / 16) - (45 / 16) + 'rem'
})

const mouseMove = () => {
    circleSvg.style.top = mouseY
    circleSvg.style.left = mouseX

    window.requestAnimationFrame(mouseMove)
}

mouseMove()

var tl = gsap.timeline({ defaults: { ease: "power2.inOut" } })

tl.to(circleSvg, { width: 0, opacity: 0 })
tl.to('body, button', { background: 'white' })
tl.pause()

btn.addEventListener('click', () => {
    tl.play()
})
