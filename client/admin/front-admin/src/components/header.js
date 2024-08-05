class Header extends HTMLElement {
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
          
          *{
            box-sizing: border-box;
          }

          header {
            box-sizing: border-box;
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 4rem;
            width: 100%;
            top: 0;
            padding: 0 1rem; 
            background-color: hsla(0, 0%, 0%, 1);
            z-index: 5
          }

        </style>

        <header>
          <slot></slot>
        </header>
      `
  }
}

customElements.define('header-component', Header)
