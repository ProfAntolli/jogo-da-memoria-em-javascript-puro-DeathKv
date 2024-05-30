const Cartas = document.querySelectorAll('.Carta')

let CartaFoiGirada = false;
let TravarQuadro = false;
let PrimeiraCarta, SegundaCarta;

function GirarCarta() {
   if(TravarQuadro) return;
   if(this === PrimeiraCarta) return;
   this.classList.toggle('Girar')

   if(!CartaFoiGirada) {
    // Primeiro clique
    CartaFoiGirada = true;
    PrimeiraCarta = this;
    return;
   }
    //Segundo Clique
    SegundaCarta = this;

    ChecarIguadade();
 }

//As cartas são Iguais ?
 function ChecarIguadade() {
    let SaoIguais = PrimeiraCarta.dataset.framework === SegundaCarta.dataset.framework; 
    SaoIguais ? DesativarCarta() : DesvirarCarta()   
 }
 //São iguais
 function DesativarCarta() {
    PrimeiraCarta.removeEventListener('click', GirarCarta);
    SegundaCarta.removeEventListener('click', GirarCarta);

    ReiniciarQuadro();
 }
 //Não são Iguais
 function DesvirarCarta() {
   TravarQuadro = true;

    setTimeout(() => {
        PrimeiraCarta.classList.remove('Girar')
        SegundaCarta.classList.remove('Girar')

        ReiniciarQuadro();
        }, 1500);
 }
function ReiniciarQuadro () {
   [CartaFoiGirada, TravarQuadro] = [false , false];
   [PrimeiraCarta, SegundaCarta] = [null, null];
}

(function Embaralhar () {
   Cartas.forEach(Carta => {
      let PosiçãoAleatoria = Math.floor(Math.random() * 12);
      Carta.style.order = PosiçãoAleatoria;
      });
})()
Cartas.forEach(Carta => Carta.addEventListener('click', GirarCarta))