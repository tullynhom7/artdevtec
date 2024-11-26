art.pages.push({
    name: 'Início',
    icon: 'home',
    showInNavigation: true,
    main() {
        //m-header
        document.querySelector('#m-header #titulo h2').innerText = this.name
        //m-main
        const mMain = document.querySelector(`#m-main`)
        //inserir m-layout da pagina
        mMain.innerHTML = /*html*/`
            <section id="page-home" class="pieces-surface bg ripple-to-accent">
                <div class="pieces-surface mg">
                    <h1>Adaptável e Fexível
                        como, Peças!
                    </h1>
                    <p>Stay connected with ease, share memories and have fun with our user-friendly
                        messaging app designed to simplify communication for everyone.</p>
                    <label for="nav-btn-1" class="pieces-surface pieces-button accent inverse gradient">
                        <span class="label">Conheça Agora</span>
                        <span class="pieces-ripple"></span>
                    </label>
                </div>
            </section>
        `
    }
})