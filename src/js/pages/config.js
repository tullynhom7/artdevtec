art.pages.push({
    name: 'Configurações',
    icon: 'settings',
    showInNavigation: true,
    main() {
        const mMain = document.querySelector(`#m-main`)
        mMain.innerHTML = `
            <section id="page-config" class="pieces-surface bg">
                <form class="hsl" oninput="result.value=hue.value">
                    <output name="result" for="hue">248</output>
                    <input id="hue" type="range" min="0" max="360" step="4">
                </form>
                <section class="tema">
                    <label class="pieces-surface mg">
                        <span class="indicator pieces-surface accent">indicator</span>
                        <span class="">Light</span>
                        <span class="">Dark</span>
                        <input type="checkbox" name="tema"/>
                    </label>
                </section>
                <section class="paletas">
                    <label class="circle analoga">
                        <span class="pieces-surface fg primary"></span>
                        <span class="pieces-surface fg secondary"></span>
                        <span class="pieces-surface fg tertiary"></span>
                        <span class="material-symbols-rounded icon pieces-surface fg inverse" translate="no">done</span>
                        <input type="radio" name="paleta" value="analoga"/>
                    </label>
                    <label class="circle triade">
                        <span class="pieces-surface fg primary"></span>
                        <span class="pieces-surface fg secondary"></span>
                        <span class="pieces-surface fg tertiary"></span>
                        <span class="material-symbols-rounded icon pieces-surface fg inverse" translate="no">done</span>
                        <input type="radio" name="paleta" value="triade"/>
                    </label>
                    <label class="circle complementar">
                        <span class="pieces-surface fg primary"></span>
                        <span class="pieces-surface fg secondary"></span>
                        <span class="pieces-surface fg tertiary"></span>
                        <span class="material-symbols-rounded icon pieces-surface fg inverse" translate="no">done</span>
                        <input type="radio" name="paleta" value="complementar"/>
                    </label>
                </section>
                <section class="font">
                    <div class="pieces-input">
                        <input type="range" min="1" max="5">
                        <div class="ticks">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                </section>
            </section>
        `

        document.querySelector('#hue').value = art.HUEMainColor.get()

        document.querySelector(`.paletas input[value="${art.paleta.get()}"]`).setAttribute('checked', true)

        let tema = document.querySelector('.tema input')
        if(art.darkMode.get()) tema.setAttribute('checked', true)

        let h = document.querySelector("#hue")
        h.addEventListener('input', ()=>{
            localStorage.quiverExtentionColor = h.value
            document.querySelector("html").style.setProperty('--main-color', h.value)
            art.HUEMainColor.set(h.value)
        })
        document.querySelector(".tema input").addEventListener('click', (e)=>{
            let body = document.body
            let isDark = body.classList.contains('dark')
            if (isDark) {
                body.classList.remove('dark')
                body.classList.add('light')
            } else {
                body.classList.remove('light')
                body.classList.add('dark')
            }
            art.darkMode.set()
        })
        let paletas = document.querySelectorAll(".paletas input")
        paletas.forEach(paleta=>{
            paleta.addEventListener('click', ()=>{
                const body = document.body.classList
                Array.from(paletas)
                .map(value => value.value)
                .forEach(p=>{
                    if(body.contains(p)) body.remove(p)
                })
                body.add(paleta.value)
                art.paleta.set(paleta.value)
            })
        })
    }
})