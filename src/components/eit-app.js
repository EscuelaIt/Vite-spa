import { LitElement, html, css } from 'lit';
import { installRouter } from 'pwa-helpers/router.js';
import '@dile/dile-nav/dile-nav.js';
import '@dile/dile-card/dile-card';
import './fct-pwa';
import { enviroment } from '../enviroment.js';

console.log('---', enviroment.BACKEND_URL, enviroment.PUSHER_KEY);

export class EitApp extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
                --dile-nav-background-color: #00acc1;
                --dile-nav-color: #303030;
            }
            ul {
                margin: 0;
                padding: 0;
            }
            li {
                display: inline-block;
                margin-right: 0.75rem;
            }
            dile-card {
                margin: 1rem;
            }
        `
    ];

    static get properties() {
      return {
        page: { type: String }
      };
    }

    constructor() {
        super();
        this.page = 'home';
        installRouter(
            (location) => this.handleNavigation(location.pathname)
        );
    }

    render() {
        return html`
        
            <dile-nav>
                <span slot="title">EIT App</span>
                <span slot="menu">[X]</span>
            </dile-nav>
            
            <dile-card>
                <div>
                    ${this.displayPage(this.page)}
                </div>
                <div slot="footer">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/nosotros">Nosotros</a></li>
                    <li><a href="/contacto">Contacto</a></li>
                </ul>
                </div>    
            </dile-card>

            <fct-pwa></fct-pwa>
        `;
    }

    displayPage(page) {
        switch(page) {
            case 'home':
                import('./pages/eit-page-home');
                return html`<eit-page-home></eit-page-home>`
            case 'nosotros':
                import('./pages/eit-page-about');
                return html`<eit-page-about></eit-page-about>`
            case 'contacto':
                import('./pages/eit-page-contact');
                return html`<eit-page-contact></eit-page-contact>`
            default:
                import('./pages/eit-page-404');
                return html`<eit-page-404></eit-page-404>`
        }
    }

    handleNavigation(location) {
        let path = decodeURIComponent(location);
        console.log(path);
        let parts = this.splitPath(path);
        console.log(parts);
        if (parts.length == 0) {
            this.page = 'home';
        } else {
            this.page = parts[0];
        }
    }

    splitPath(path) {
        let parts = path.split('/');
        return parts.filter(part => part !== '');
    }
}
customElements.define('eit-app', EitApp);
