class Aemet extends HTMLElement {
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
        
        .main {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh
        }

        button {
          background-color: hsla(0, 0%, 0%, 1);
          color: hsla(0, 100%, 100%, 1);
          border: none;
          padding: 1.5rem 2rem;
          border-radius: 50px;
          font-size: 1.5rem;
          cursor: pointer;
        }

        @media (hover: hover){
          button:hover {
            background-color: hsla(0, 100%, 100%, .1);
          }
        }

      </style>
      
      <div class='main'>
        <button class="send-button">Enviar</button>
      </div>
      `

    const weather = this.shadow.querySelector('.send-button')

    weather.addEventListener('click', async () => {
      let response = await fetch(`https://opendata.aemet.es/opendata/api/valores/climatologicos/diarios/datos/fechaini/2024-02-01T00:00:00UTC/fechafin/2024-08-01T23:59:59UTC/estacion/B228/?api_key=${import.meta.env.VITE_AEMET_API_KEY}`)
      let data = await response.json()

      response = await fetch(data.datos)
      data = await response.json()

      // data = data.map(element => {
      //   delete element.horatmin
      //   delete element.horatmax
      //   delete element.horaracha
      //   delete element.horaPresMax
      //   delete element.horaPresMin
      //   delete element.horaHrMax
      //   delete element.horaHrMin

      //   return element
      // })

      data = data.reduce((acc, element) => {
        let newElement = {};
    
        Object.entries(element).forEach(([key, value]) => {
          if (typeof value === 'string') {
            value = value.replace(/,/g, '.')
          }
          newElement[key] = value
        });
    
        acc.push(newElement)
        return acc
      }, [])


      await fetch(`${import.meta.env.VITE_API_URL}/api/front/aemet`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
      })
    })
  }
}

customElements.define('aemet-component', Aemet)
