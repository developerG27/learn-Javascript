class Forma{
  constructor(altezza, larghezza, colore){
    this.altezza = altezza
    this.larghezza = larghezza
    this.colore = colore
  }

  disegnare(){
    return document.body.innerHTML = `
      <div
        style="
          width: ${this.larghezza}px;
          height: ${this.altezza}px;
          background: ${this.colore}"
      >
      </div>
    `
  }
}
let forma1 = new Forma(220,400,"red")