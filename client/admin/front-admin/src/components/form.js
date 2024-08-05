class Form extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
    this.data = []
  }

  async connectedCallback () {
    await this.render()
  }

  async render () {
    this.shadow.innerHTML =
      /* html */`
      
      <style>

        *{
          box-sizing: border-box;
        }

        h2, span, label {
          margin: 0;
          color: hsla(0, 100%, 100%, 1);
          font-family: "Lato", sans-serif;
          font-size: .9rem
        }

        ul{
          list-style: none;
          margin: 0;
          padding: 0
        }

        form {
          display: flex;
          flex-direction: column;
          gap: 1rem
        } 

        .form-header {
          display: flex;
          justify-content: space-between;
          background-color: hsla(0, 100%, 100%, 1)
        }

        .header-tabs ul li {
          display: flex;
          align-items: center;
          background-color: hsla(272, 40%, 35%, 1);
          color: hsl(0, 0%, 100%);
          height: 2.5rem;
          padding: .5rem;
          font-weight: 600
        }

        .header-buttons {
          padding: .1rem .5rem
        }

        .header-buttons svg {
          cursor: pointer;
          fill: hsla(257, 91%, 18%, 1);
          height: 2rem;
          width: 2rem
        }

        .form-body {
          display: flex;
          gap: 0 2rem
        }

        .form-entry {
          display: flex;
          flex-direction: column;
          gap: .5rem;
          font-weight: 600;
          width: 100%
        }

        .form-entry input {
          background-color: hsla(226, 64%, 66%, 1);
          height: 2rem;
          border: none;
          border-bottom: 1px solid hsla(0, 100%, 100%, 1)
        }

        input[type="text"] {
          padding: 0 .5rem
        }

        input:focus {
          outline: none
        }



        @media (hover: hover) {
          button:hover {
            background-color: hsla(48, 93%, 53%, .8);
            color: hsla(0, 0%, 0%, 1);
            border: 5px solid hsla(0, 0%, 0%, 1)
          }
        }

      </style>

      <section class="form">
        <form>
          <div class="form-header">
            <div class="header-tabs">
              <ul>
                <li>General</li>
              </ul>
            </div>
            <div class="header-buttons">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>broom</title><path d="M19.36,2.72L20.78,4.14L15.06,9.85C16.13,11.39 16.28,13.24 15.38,14.44L9.06,8.12C10.26,7.22 12.11,7.37 13.65,8.44L19.36,2.72M5.93,17.57C3.92,15.56 2.69,13.16 2.35,10.92L7.23,8.83L14.67,16.27L12.58,21.15C10.34,20.81 7.94,19.58 5.93,17.57Z" /></svg>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>content-save</title><path d="M15,9H5V5H15M12,19A3,3 0 0,1 9,16A3,3 0 0,1 12,13A3,3 0 0,1 15,16A3,3 0 0,1 12,19M17,3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V7L17,3Z" /></svg>
            </div>
          </div>
          <div class="form-body">
            <div class="form-entry">
              <label for="name">Nombre</label>
              <input type="text" name="name" id="name" required/>
            </div>
            <div class="form-entry">
              <label for="email">Email</label>
              <input type="email" name="email" id="email" required/>
            </div>
          </div>
        </form>
      </section>
      `
  }
}

customElements.define('form-component', Form)
