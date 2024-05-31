if (process.client) {
    document.addEventListener('mousemove', (event) => {
        let { clientX : mouseX, clientY: mouseY } = event
        document.querySelectorAll('.plan').forEach(plan => {
            let { x: planX, y: planY } = plan.getBoundingClientRect()
            let { clientHeight: planHeight, clientWidth: planWidth } = plan

            if ( 
                mouseY >= (planY - 300) &&
                mouseY <= (planY + planHeight + 300) && 
                mouseX >= (planX - 300) &&
                mouseX <= (planX + planWidth + 300)
             ) {
                const light = plan.querySelector('.light > .hole')
                light.style.top = (mouseY - planY) + 'px'
                light.style.left = (mouseX - planX) + 'px'
             }

        })
    })
}