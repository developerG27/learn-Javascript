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


//Creare una classe per disegnare un Quadrato
class Quadrato extends Forma{
  constructor(lato, colore){
    super(lato, lato, colore)
  }
}
let figuraQuadrata = new Quadrato(400, 'green')


//Creare una classe per disegnare un Rotondo
