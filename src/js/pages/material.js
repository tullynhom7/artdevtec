art.pages.push({
    name: 'Material',
    icon: 'extension',
    showInNavigation: true,
    main() {
        //m-main
        const mMain = document.querySelector(`#m-main`)
        //inserir m-layout da pagina
        mMain.innerHTML = `
            <section id="page-material" class="pieces-surface bg">
                <style>

                    #m-main {
                        place-content: center;
                        place-self: center;
                        grid-template-columns: repeat(2, auto);
                        gap: 16px;
                    }

                    #dad {
                        display: grid;
                        place-content: center;
                        place-self: center;
                        gap: 16px;
                        grid-template-columns: repeat(2, auto);
                        width: 300px;
                        height: 300px;
                        border-radius: 50px;
                        border-width: 16px;
                        border-style: solid;
                        transition: .3s;

                        &:has(input:checked) {
                            .pieces-parent {
                                height: 100px;
                            }
                        }
                    }

                    input { display: none;}

                    .pieces-parent {
                        width: 50px;
                        height: 10px;
                        border-radius: 16px;
                        transition: .3s;
                    }
                </style>
                <label id="dad" class="
                    pieces-surface
                    
                    background-color-fg

                    surface-background-color-secondary-active
                    background-color-accent-active

                    surface-border-color-secondary-active
                    border-color-mg
                    border-color-accent-active

                    ripple-to-fg
                    ripple-to-accent-active
                ">
                    <span class="pieces-ripple"></span>
                    <input type="checkbox" class="surface-controller"/>
                    <div id="first" class="pieces-surface background-color-bg pieces-parent"></div>
                    <div id="last" class="pieces-surface background-color-bg pieces-parent"></div>
                </label>
                <style>
                    .prop {border-radius: 8px;padding: 0 8px;}
                    .p16 {margin-left: 16px;}
                    .p32 {margin-left: 32px;}
                </style>
                <pre style="display: grid; gap: 4px; place-items: start; place-self: start;">
                    <b>&lt;label class="</b>
                        <b class="pieces-surface background-color-mg text-color-to-mg prop p16 inverse">pieces-surface</b>
                        <b class="pieces-surface background-color-fg text-color-to-fg prop p16">background-color-fg</b>

                        <b class="pieces-surface background-color-fg text-color-to-fg background-color-secondary prop p16 secondary">background-color-secondary-active</b>
                        <b class="pieces-surface background-color-accent background-color-secondary text-color-secondary text-color-to-accent prop p16">background-color-accent-active</b>
                        
                        <b class="pieces-surface background-color-mg text-color-to-mg prop p16">border-color-mg</b>
                        <b class="pieces-surface background-color-accent text-color-to-accent prop p16">border-color-accent-active</b>
                        <b class="pieces-surface background-color-accent text-color-to-accent prop p16 background-color-secondary text-color-secondary">border-color-secondary-active</b>
                        
                        <b class="pieces-surface background-color-mg text-color-to-mg prop p16 inverse">ripple-to-fg</b>
                        <b class="pieces-surface background-color-mg text-color-to-mg prop p16 inverse">ripple-to-accent-active</b>
                    <b class="aaaaaaaaaaa">"&gt;</b>
                        <b class="p16">&lt;span class="<b class="pieces-surface background-color-accent text-color-to-accent prop tertiary">pieces-ripple</b>"&gt;&lt;/span&gt;</b>
                        <b class="p16">&lt;input type="checkbox" class="<b class="pieces-surface background-color-accent text-color-to-accent prop">surface-controller</b>"&gt;</b>
                        <b class="p16">&lt;span class="</b>
                            <b class="pieces-surface background-color-fg text-color-to-fg prop p32 secondary">active-indicator</b>
                            <b class="pieces-surface background-color-accent text-color-to-accent prop p32">pieces-surface</b>
                            <b class="pieces-surface background-color-accent text-color-to-accent prop p32">surface-parent</b>
                        <b class="p16">">&lt;/span&gt;</b>
                    <b class="aaaaaaaaaaa">&lt;/label&gt;</b>
                </pre>
            </section>
        `
    }
})