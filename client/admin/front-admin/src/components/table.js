class Table extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
    this.data = []
  }

  async connectedCallback () {
    await this.loadData()
    await this.render()
  }

  async loadData () {
    const response = await fetch('src/data/users.json')
    this.data = await response.json()
  }

  async render () {
    this.shadow.innerHTML =
      /* html */`
      
      <style>

        *{
          box-sizing: border-box;
        }

        h2, li, span, label {
          margin: 0;
          color: hsla(0, 100%, 100%, 1);
          font-family: "Lato", sans-serif;
          font-size: .9rem
        }

        ul {
          margin: 0;
          padding: 0;
          list-style: none
        }

        .table {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem
        }

        .table-header {
          display: flex;
          justify-content: space-between;
          width: 100%;
          background-color: hsla(0, 100%, 100%, 1)
        }

        .table-header svg {
          fill: hsla(257, 91%, 18%, 1);
          height: 2rem;
          width: 2rem;
          padding: .1rem .5rem
        }

        .table-body{
          align-items: center;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          height: 75vh;
          max-height: 75vh;
          overflow-y: auto;
          width: 100%
        }

        .table-body::-webkit-scrollbar{
          background-color: hsl(0, 0%, 100%);
          width: 0.5rem
        }

        .table-body::-webkit-scrollbar-thumb{
          background-color: hsla(272, 40%, 35%, 1)
        }

        .table-register {
          width: 80%;
        }

        .table-register svg {
          fill: hsla(257, 91%, 18%, 1);
          height: 2rem;
          width: 2rem;
          padding: .1rem .5rem
        }

        .entry-header {
          display: flex;
          justify-content: flex-end;
          background-color: hsla(0, 100%, 100%, 1)
        }

        .entry-header-buttons button {
          background-color: hsla(0, 100%, 100%, 1);
          border: none;
          padding: 0
        }

        .entry-data {
          display: flex;
          flex-direction: column;
          gap: .5rem;
          background-color: hsla(0, 0%, 0%, 1);
          padding: 1rem
        }

        .table-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 1rem;
          height: 3rem;
          width: 100%;
          background-color: hsla(0, 100%, 100%, 1)
        }

        .table-footer span {
          color: hsla(0, 0%, 0%, 1)
        }

        .table-footer svg {
          height: 1rem;
          width: 1rem
        }

        @media (hover: hover) {
          button:hover {
            cursor: pointer
          }
        }

      </style>

      <section class="table">
        <div class="table-header">
          <a href="">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>filter-menu</title><path d="M11 11L16.76 3.62A1 1 0 0 0 16.59 2.22A1 1 0 0 0 16 2H2A1 1 0 0 0 1.38 2.22A1 1 0 0 0 1.21 3.62L7 11V16.87A1 1 0 0 0 7.29 17.7L9.29 19.7A1 1 0 0 0 10.7 19.7A1 1 0 0 0 11 18.87V11M13 16L18 21L23 16Z" /></svg>
          </a>
        </div>
        <div class="table-body">
        </div>
        <div class="table-footer">
          <div class="table-footer-info">
            <span>1 registro en total. Mostrando 10 registros por página.</span>
          </div>
          <div class="table-footer-pagination">

          </div>
        </div>
      </section>
      `
    this.data.forEach(element => {
      const tableBody = this.shadow.querySelector('.table-body')
      const tableRegister = document.createElement('div')
      tableRegister.classList.add('table-register')
      tableBody.appendChild(tableRegister)
      
      const bodyEntry = document.createElement('div')
      bodyEntry.classList.add('body-entry')
      tableRegister.appendChild(bodyEntry)

      const entryHeader = document.createElement('div')
      entryHeader.classList.add('entry-header')
      bodyEntry.appendChild(entryHeader)
      
      const entryHeaderButtons = document.createElement('div')
      entryHeaderButtons.classList.add('entry-header-buttons')
      entryHeader.appendChild(entryHeaderButtons)

      const entryHeaderbuttonElement1 = document.createElement('button')
      entryHeaderbuttonElement1.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>pencil</title><path d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" /></svg>'
      entryHeaderButtons.appendChild(entryHeaderbuttonElement1)

      const entryHeaderbuttonElement2 = document.createElement('button')
      entryHeaderbuttonElement2.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>trash-can</title><path d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M9,8H11V17H9V8M13,8H15V17H13V8Z" /></svg>'
      entryHeaderButtons.appendChild(entryHeaderbuttonElement2)
    
      const entryData = document.createElement('div')
      entryData.classList.add('entry-data')
      bodyEntry.appendChild(entryData)

      const listElements = document.createElement('ul')
      entryData.appendChild(listElements)

      Object.entries(element).forEach(([key, value]) => {
        const listElement = document.createElement('li')
        listElement.textContent = `${key}: ${value}`
        listElements.appendChild(listElement)
      })  
    })
  }
}

customElements.define('table-component', Table)
