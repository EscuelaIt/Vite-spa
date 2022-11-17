import { LitElement, html, css } from 'lit';
import { registerSW } from 'virtual:pwa-register';
import '@dile/dile-toast-persistent/dile-toast-persistent';

export class FctPwa extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
                --dile-toast-persistent-padding: 1rem;
                --dile-toast-persistent-background-color: red;

            }

            p {
                margin: 0 0 10px;
            }
            
            @media(min-width: 400px) {
                :host {
                    --dile-toast-persistent-width: 360px;
                    --dile-toast-persistent-max-width: 360px;
                }   
            }
            
        `
    ];

    constructor() {
        super();
    }

    firstUpdated() {
        super.firstUpdated();
        this.updatedmessage = this.shadowRoot.getElementById('updatedmessage');
        this.initPwa();
    }

    render() {
        return html`
            <dile-toast-persistent id="updatedmessage">
                <p>
                    ATENCIÓN: Hay una versión nueva de la Aplicación
                </p>
                <button small outlinedwhite @click=${this.refreshApp}>Actualizar</button>
                <button small outlinedwhite @click=${this.closeUpdatedToast}>Descartar</button>
            </dile-toast-persistent>
        `;
    }
    
    initPwa() {
        console.log('iniciamos la pwa');
        this.refreshSW = registerSW({
            inmediate: true,
            onNeedRefresh: () => {
                this.updatedmessage.open();
            },
            onOfflineReady() {
                console.log('podemos trabajar offline');
            },
        })
    }

    closeUpdatedToast() {
        this.updatedmessage.close();
    }

    refreshApp() {
        console.log('refreshApp');
        this.refreshSW?.(true);
    }
}
customElements.define('fct-pwa', FctPwa);
