import { LitElement, html, css } from 'lit';
import '@dile/dile-input/dile-input';
import '@dile/dile-icon/dile-icon';
import { emailIcon } from '@dile/icons';
import { pageStyles } from './page-styles';

export class EitPageContact extends LitElement {
    static styles = [
        pageStyles,
        css`
            :host {
                display: block;
                
            }
        `
    ];

    render() {
        return html`
            <h2>Soy Contact</h2>
            <dile-icon .icon="${emailIcon}"></dile-icon>
            <dile-input
                name="input_name"
                label="Nombre"
                value=""
                placeholder="escribe tu nombre"
            ></dile-input>
        `;
    }
}
customElements.define('eit-page-contact', EitPageContact);
