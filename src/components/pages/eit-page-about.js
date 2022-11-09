import { LitElement, html, css } from 'lit';
import '@dile/dile-icon/dile-icon';
import { infoIcon } from '@dile/icons';
import { pageStyles } from './page-styles';

export class EitPageAbout extends LitElement {
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
            <h2>Soy About</h2>
            <dile-icon .icon="${infoIcon}"></dile-icon>
            <p>Aliquam a sunt quasi deleniti voluptatibus quibusdam blanditiis ipsam impedit doloremque non, dolore quaerat dolor quisquam accusamus quae unde iste deserunt cupiditate sapiente nobis exercitationem modi sequi? Voluptatum, beatae enim.</p>
    <p>Ipsum consequatur possimus perferendis numquam, quae provident porro autem est quisquam vero voluptates eaque odit ea dolores distinctio, natus voluptate voluptas? Accusantium error in veniam commodi corporis. Libero, cumque hic.</p>
    <p>Nemo, saepe eius inventore qui non harum delectus quo id aliquam, itaque at voluptatum ea ab totam, laboriosam ratione? Earum provident quam, dolor corrupti aspernatur placeat illo. Aperiam, error magni.</p>
        `;
    }
}
customElements.define('eit-page-about', EitPageAbout);
