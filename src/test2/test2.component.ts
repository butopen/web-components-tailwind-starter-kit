import { html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { TailwindElement } from "../shared/tailwind.element";

import style from "./test2.component.scss?inline";

@customElement("test2-component")
export class Test2Component extends TailwindElement(style) {
  @property()
  name?: string = "World";

  render() {
    return html`
      <p>
        Hello,
        <b>${this.name}</b>
        !
      </p>
      <button class="bg-orange-200 text-violet-700 p-4 rounded-full text-2xl">Hello world!</button>
    `;
  }
}
