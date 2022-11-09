import { LitElement, html, css } from 'lit';

export class EitPage404 extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }
        `
    ];

    render() {
        return html`
        <h2>Esta página no existe</h2>
        `;
    }
}
customElements.define('eit-page-404', EitPage404);
