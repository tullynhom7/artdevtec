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
            <section id="page-home" class="
                piece-surface
                background-color-096
                text-color-to-004
                scrollbar-track-outline-color-080
                scrollbar-thumb-background-color-080
                scrollbar-thumb-border-color-096
                webkit-scrollbar-display-1

            ">
                <section id="recents">
                    <article
                        id="banner-pieces"
                        class="
                            piece-surface
                            background-color-096
                            text-color-to-004
                            border-color-080
                        "
                    >
                        <h1 class="s-40">Adaptável e fexível, como <span class="piece-surface text-color-044" style="background:transparent;">Peças</span>!
                        </h1>
                        <p class="s-40">Stay connected with ease, share memories and have fun with our user-friendly
                            messaging app designed to simplify communication for everyone.</p>
                        <label for="nav-btn-1" class="piece-surface text-color-100 piece-button accent gradient s-40">
                            <span class="piece-label">Conheça agora o Material Pieces</span>
                            <span class="piece-ripple"></span>
                        </label>
                    </article>
                    <article class="piece-surface background-color-088 border-color-080"></article>
                    <article class="piece-surface background-color-088 border-color-080"></article>
                    <article class="piece-surface background-color-088 border-color-080"></article>
                    <article class="piece-surface background-color-088 border-color-080"></article>
                    <article class="piece-surface background-color-088 border-color-080"></article>
                    <article class="piece-surface background-color-088 border-color-080"></article>
                    <article class="piece-surface background-color-088 border-color-080"></article>
                </section>
                <section id="harpa" style="height: calc(100vh - 81px);"></section>
            </section>
        `
    }
})