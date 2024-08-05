class Login extends HTMLElement {
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

        h2, span, label {
          margin: 0;
          color: hsla(0, 0%, 100%, 1);
          font-family: "Lato", sans-serif;
          font-weight: 550
        }

        .login-form {
          display: flex;
          flex-direction: column;
          height: 100vh;
          padding: 3rem;
          justify-content: center;
          align-items: center;
        }

        form {
          display: flex;
          flex-direction: column;
          width: 100%;
          gap: 1.2rem
        }

        .login-form-title {
          text-align: center;
          margin-bottom: 1.5rem
        }

        .login-form-main {
          display: flex;
          flex-direction: column;
          gap: 2rem
        }

        .login-form-email {
          display: flex;
          flex-direction: column;
          gap: .8rem
        }

        .login-form-email label {
          font-size: .9rem
        }

        .login-form-email input {
          height: 2rem;
          background-color: hsl(226, 63%, 45%);
          border: none;
          border-bottom: 2px solid hsl(226, 51%, 87%);
          border-radius: 1px
        }

        .login-form-password {
          display: flex;
          flex-direction: column;
          gap: .8rem
        }

        .login-form-password label {
          font-size: .9rem
        }

        .login-form-password input {
          height: 2rem;
          background-color: hsl(226, 63%, 45%);
          border: none;
          border-bottom: 2px solid hsl(226, 51%, 87%);
          border-radius: 1px
        }

        .login-form-button button{
          height: 2.5rem;
          width: 100%;
          background-color: hsl(272, 40%, 35%);
          color: hsla(0, 0%, 100%, 1);
          border: none;
          border-radius: 10px
        }

        .login-form-recovery {
          font-size: 1.2rem;
          text-align: center
        }

      </style>

      <section class="login-form">
        <form>
          <div class="login-form-title">
            <h2>Pedidos</h2>
          </div>
          <div class="login-form-main">  
            <div class="login-form-email">
              <label for="email">Email</label>
              <input type="email" id="email" name="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$" size="30" required />
            </div>
            <div class="login-form-password">
              <label for="userPassword">Password</label>
              <input type="password" id="userPassword" minlength="6"/>
            </div>
            <div class="login-form-button">
              <button>Enviar</button>
            </div>
          </div>
          <div class="login-form-recovery">
            <span>Olvidé mi contraseña</span>
          </div>
        </form> 
      </section>
      `
  }
}

customElements.define('login-component', Login)
