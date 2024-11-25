art.pages.push({
    name: 'Início',
    icon: 'home',
    showInNavigation: true,
    main() {
        //m-main
        const mMain = document.querySelector(`#m-main`)
        //inserir m-layout da pagina
        mMain.innerHTML = `
            <section id="page-home" class="pieces-surface bg">
                <div class="pieces-surface mg">
                    <h1>Adaptável e Fexível
                        como, Peças!
                    </h1>
                    <p>Stay connected with ease, share memories and have fun with our user-friendly
                        messaging app designed to simplify communication for everyone.</p>
                    <button class="pieces-button accent inverse gradient">
                        <span class="label">Get Started for Free</span>
                        <span class="ripple"></span>
                    </button>
                </div>
            </section>
        `
    }
})