import { LitElement, html, css } from 'lit';
import '@dile/dile-icon/dile-icon';
import { homeIcon } from '@dile/icons';
import { pageStyles } from './page-styles';

export class EitPageHome extends LitElement {
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
            <h2>Soy home</h2>
            <dile-icon .icon="${homeIcon}"></dile-icon>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, ducimus culpa iusto itaque veniam eum mollitia nulla dolores repudiandae, odit aliquam! Libero totam vero doloribus vel consequuntur tempora dolor ab!</p>
    <p>Deleniti inventore iste voluptas mollitia, nisi deserunt quos facere explicabo? Consequuntur, debitis voluptatum quod natus esse odio hic corporis, omnis fuga similique iusto ratione nobis aperiam vel reprehenderit mollitia sequi!</p>
        `;
    }
}
customElements.define('eit-page-home', EitPageHome);
