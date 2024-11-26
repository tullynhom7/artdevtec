art.pages.push({
    name: 'Configurações',
    icon: 'settings',
    showInNavigation: true,
    main() {
        const mMain = document.querySelector(`#m-main`)
        mMain.innerHTML = `
            <section id="page-config" class="pieces-surface bg"></section>
        `

        this.hslslider("#page-config")
        this.tema("#page-config")
        this.paletas("#page-config")
    },
    hslslider(id, seth){

        let templateFragment = `
            <style>
                #page-config>#main-color {
                    border-radius: 16px;
                    padding: 16px;
                    h1 {font-size:20px;font-weight:900;}
                    #colorpicker1 {
                        width: min-content;
                        justify-self: center;
                    }

                    #sContainer {
                        width: 200px;
                        height: 200px;
                        position: relative;
                        margin: auto;
                        display: grid;
                        place-content: center;
                    }

                    #sValue {
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        font-family: Arial, sans-serif;
                        font-size: 16px;
                        font-weight: 900;
                    }
                }
            </style>
            <div id="main-color" class="pieces-surface background-color-mg">
                <h1>Cor Principal</h1>
                <div id="sContainer">
                    <canvas id="slider" width="200" height="200"></canvas>
                <div id="sValue"></div>
            </div>  
        `
        document.querySelector(id).appendChild(tools.create(templateFragment))

        const canvas = document.getElementById('slider');
        const ctx = canvas.getContext('2d');
        const val = document.getElementById('sValue');
        const x = canvas.width / 2;
        const y = canvas.height / 2;
        const r = 80;
        // let a = -Math.PI / 2; // Inicia no topo do círculo
        setAngle(art.HUEMainColor.get());
        drawFn();
        valFn();

        // Adicionando event listeners para mouse
        canvas.addEventListener('mousedown', dragStart);
        canvas.addEventListener('mousemove', drag);
        canvas.addEventListener('mouseup', dragEnd);
        canvas.addEventListener('mouseleave', dragEnd);

        // Adicionando event listeners para toque
        canvas.addEventListener('touchstart', dragStart);
        canvas.addEventListener('touchmove', drag);
        canvas.addEventListener('touchend', dragEnd);
        canvas.addEventListener('touchcancel', dragEnd);

        // Função para definir o ângulo inicial em graus (de 0 a 360)
        function setAngle(degrees) {
            // Converter graus para radianos e ajustar para o topo do círculo
            const radians = (degrees - 90) * Math.PI / 180;
            // Ajustar o ângulo 'a' para o valor convertido
            a = radians;
            // Redesenhar o seletor e atualizar o valor exibido
            drawFn();
            valFn();
        }

        function drawFn() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Criar um gradiente cônico do vermelho ao violeta e voltando ao vermelho
            const gradient = ctx.createConicGradient(-Math.PI / 2, x, y);
            gradient.addColorStop(0, '#f00');
            gradient.addColorStop(1 / 6, '#ff0');
            gradient.addColorStop(2 / 6, '#0f0');
            gradient.addColorStop(3 / 6, '#0ff');
            gradient.addColorStop(4 / 6, '#00f');
            gradient.addColorStop(5 / 6, '#f0f');
            gradient.addColorStop(1, '#f00');
            
            ctx.beginPath();
            ctx.arc(x, y, r, 0, Math.PI * 2);
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 20;
            ctx.stroke();

            // Calcular posição do seletor baseado no ângulo atual 'a'
            const handleX = x + Math.cos(a) * r;
            const handleY = y + Math.sin(a) * r;

            ctx.beginPath();
            ctx.arc(handleX, handleY, 8, 0, Math.PI * 2);
            ctx.fillStyle = 'white';
            ctx.fill();
        }

        function valFn() {
            let degrees = (a + Math.PI / 2) * 180 / Math.PI;
            if (degrees < 0) degrees += 360;
            degrees = Math.round(degrees);
            val.textContent = `${degrees}`;

            let h = degrees

            localStorage.quiverExtentionColor = h
            document.querySelector("html").style.setProperty('--main-color', h)
            document.querySelector("html").style.setProperty('--main-color-deg', -h+"deg")
            art.HUEMainColor.set(h)
        }

        let isDragging = false;

        function dragStart(e) {
            isDragging = true;
            drag(e);
        }

        function drag(e) {
            if (!isDragging) return;
            e.preventDefault();
            const rect = canvas.getBoundingClientRect();
            const clientX = e.clientX || e.touches[0].clientX;
            const clientY = e.clientY || e.touches[0].clientY;
            a = Math.atan2(clientY - rect.top - y, clientX - rect.left - x);
            drawFn();
            valFn();
        }

        function dragEnd() {
            isDragging = false;
        }

        if(!seth) seth = 240

        // Exemplo: definir o ângulo inicial para 180 graus ao carregar a página
        setAngle(art.HUEMainColor.get());
    },
    tema(id) {
        let templateFragment = `
            <style>
                #page-config>#tema {
                    display: grid;
                    border-radius: 16px;
                    padding: 16px;
                    gap: 16px;
                    grid-template-rows: auto 1fr;
                    h1 {font-size:20px;font-weight:900;}
                    #tgg-mm {
                        place-self: center;
                        height:40px;
                        border-radius: 40px;
                        display: grid;
                        grid-template-columns: repeat(2, 1fr);
                        padding:4px;
                        gap: 4px;
                        cursor: var(--cursor-pointer);
                        & *:active {pointer-events: none;}
                        & .label {
                            display: grid;
                            place-content: center;
                            border-radius: 40px;
                            font-weight: 700;
                            font-size: 14px;
                            z-index: 1;
                            padding: 0 16px;
                            text-wrap: nowrap;
                        }
                        & input {display: none;}
                        .active-indicator {
                            border-radius: 40px;
                            position: absolute;
                            width: calc(50% - 8px);
                            height: calc(100% - 8px);
                            top: 4px;
                            left: 4px;
                            transition: left .3s;
                            z-index: 1;
                        }
                        &:has(input:checked) {
                            .active-indicator {
                                left: calc(50% + 4px);
                            }
                        }
                    }
                }
            </style>
            <div id="tema" class="pieces-surface background-color-mg">
                <h1>Tema</h1>
                <label id="tgg-mm" class="
                    pieces-surface

                    background-color-fg
                    background-color-hover-to-fg
                    
                    ripple-to-fg
                ">
                    <span class="pieces-ripple"></span>
                    <input type="checkbox" name="tema" class="surface-controller">
                    <!-- <span class="pieces-surface surface-parent background-color-bg active-indicator"></span> -->
                    <span class="
                        pieces-surface
                        surface-parent
                        label
                        background-color-bg
                        background-color-fg-active
                        background-color-hover-to-bg
                        background-color-hover-toned-active
                        text-color-accent
                        text-color-to-fg-active
                    ">Claro</span>
                    <span class="
                        pieces-surface
                        surface-parent
                        label
                        background-color-fg
                        background-color-bg-active
                        background-color-hover-toned
                        background-color-hover-to-bg-active
                        text-color-accent-active
                        text-color-to-fg
                    ">Escuro</span>
                </label>
            </div>
        `
        document.querySelector(id).appendChild(tools.create(templateFragment))
        let tema = document.querySelector('#page-config #tema input')
        if(art.darkMode.get()) tema.setAttribute('checked', true)
            document.querySelector("#page-config #tema input").addEventListener('click', (e)=>{
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
    },
    paletas(id){
        let templateFragment = `
            <style>
                #page-config {
                    #paletas {
                        display: grid;
                        gap: 16px;
                        border-radius: 16px;
                        padding: 16px;
                        grid-template-rows: auto 1fr;
                        h1 {font-size:20px;font-weight:900;}
                        &>div {
                            display: grid;
                            place-content: center;
                            grid-auto-flow: column;
                            gap: 16px;
                        }

                        .circle {
                            width: 100px;
                            height: 100px;
                            border-radius: 100%;
                            position: relative;
                            overflow: hidden;
                            display: grid;
                            place-items: center;
                            cursor: var(--cursor-pointer);
                            &>span {
                                width: 100px;
                                height: 100px;
                                display: block;
                                position: absolute;
                                &:nth-child(1) {
                                    top: -50px;
                                }
                                &:nth-child(2) {
                                    bottom: -50px;
                                    left: -50px;
                                }
                                &:nth-child(3) {
                                    bottom: -50px;
                                    right: -50px;
                                }
                            }

                            .icon {
                                border-radius: 100%;
                                padding: 16px;
                                width: min-content;
                                height: min-content;
                                display: block;
                                opacity: 0;
                            }
                            &:has(input:checked) .icon {
                                opacity: 1;
                            }

                        }
                        .font {
                                display: grid;
                                width: 360px;
                            }
                        }
                    }
                }
            </style>
            <section id="paletas" class="pieces-surface background-color-mg">
                <h1>Tema</h1>
                <div>
                    <label class="circle analoga">
                        <span class="pieces-surface background-color-fg primary"></span>
                        <span class="pieces-surface background-color-fg secondary"></span>
                        <span class="pieces-surface background-color-fg tertiary"></span>
                        <span class="material-symbols-rounded icon pieces-surface background-color-fg text-color-to-fg inverse" translate="no">done</span>
                        <input type="radio" name="paleta" value="analoga"/>
                    </label>
                    <label class="circle triade">
                        <span class="pieces-surface background-color-fg primary"></span>
                        <span class="pieces-surface background-color-fg secondary"></span>
                        <span class="pieces-surface background-color-fg tertiary"></span>
                        <span class="material-symbols-rounded icon pieces-surface background-color-fg text-color-to-fg inverse" translate="no">done</span>
                        <input type="radio" name="paleta" value="triade"/>
                    </label>
                    <label class="circle complementar">
                        <span class="pieces-surface background-color-fg primary"></span>
                        <span class="pieces-surface background-color-fg secondary"></span>
                        <span class="pieces-surface background-color-fg tertiary"></span>
                        <span class="material-symbols-rounded icon pieces-surface background-color-fg text-color-to-fg inverse" translate="no">done</span>
                        <input type="radio" name="paleta" value="complementar"/>
                    </label>
                </div>
            </section>
        `
        document.querySelector(id).appendChild(tools.create(templateFragment))
        document.querySelector(`#paletas input[value="${art.paleta.get()}"]`).setAttribute('checked', true)
        let paletas = document.querySelectorAll("#paletas input")
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