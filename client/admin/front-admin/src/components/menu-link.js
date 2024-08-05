class MenuLink extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
  }

  connectedCallback () {
    this.render()
  }

  render () {
    this.shadow.innerHTML =
      /* html */`
      
      <style>

        button {
          background-color: hsl(0, 0%, 0%);
          border: none;
        }

        .menu-link svg{
          fill: hsl(0, 100%, 100%);
          display: flex;
          height: 2rem;
          width: 2rem;
          cursor: pointer;
        }

      </style>

      <button class="menu-link">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><title>apps</title><path d="M7 7H3V3H7M13 7H9V3H13M19 7H15V3H19M7 13H3V9H7M13 13H9V9H13M19 13H15V9H19M7 19H3V15H7M13 19H9V15H13M19 19H15V15H19Z" /></svg>
      </button>
    `
  }
}

customElements.define('menu-link-component', MenuLink)
