class Title extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
    this.element = this.getAttribute('element')
    this.text = this.getAttribute('text')
  }

  connectedCallback () {
    this.render()
  }

  render () {
    this.shadow.innerHTML =
      /* html */`
      
      <style>

        h2 {
          margin: 0;
          color: hsla(0, 0%, 100%, 1);
          font-family: "Lato", sans-serif;
          font-size: 1.2rem;
          font-weight: 550
        }

      </style>

      <div class="title"></div>
      `

    const title = this.shadow.querySelector('.title')
    const titleElement = document.createElement(this.element)
    titleElement.textContent = this.text
    title.appendChild(titleElement)
  }
}

customElements.define('title-component', Title)
