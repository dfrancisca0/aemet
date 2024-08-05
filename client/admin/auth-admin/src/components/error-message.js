class ErrorMessage extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
  }

  async connectedCallback () {
    await this.render()
  }

  async render () {
    this.shadow.innerHTML =
      /* html */`
      
      <style>

        h2 {
          margin: 0;
          color: hsla(0, 0%, 100%, 1);
          font-family: "Lato", sans-serif;
          font-size: 3rem;
        }

        .error-image img {
          height: 20rem;
          width: 20rem
        }
        .error-message {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 3rem;
          width: 100%;
          height: 80vh
        }

        .error-button {
          padding: 1rem
        }

        .error-button button {
          background-color: hsla(257, 91%, 18%, 1);
          color: hsla(41, 94%, 56%, 1);
          border: 1px solid hsla(41, 94%, 56%, 1);
          border-radius: 50px;
          padding: 1rem;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
        }

        @media (hover: hover) {
          button:hover {
            background-color: hsla(41, 94%, 56%, .1);
            border: 3px solid hsla(41, 94%, 56%, 1)
          }
        }

      </style>

      <section class="error-message">
        <div class="error-image">
          <img src="./public/error-yellow.png" alt="error-image">
        </div>
        <div class="error-text">
          <h2>La página no se ha encontrado</h2>
        </div>
        <div class="error-button">
          <button>Volver al inicio</button>
        </div>
      </section>
      `
  }
}

customElements.define('error-message-component', ErrorMessage)
