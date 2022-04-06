/* Compartir metodos */
const autoMethods = {
    arranca: function() {
      console.log('arrancando');
    },
    frena: function () {
      console.log('frenando')
    }
  }
  
  /* Funcion constructora */
  function createAuto(name, price, noLlantas) {
      this.name = name;
      this.price = price;
      this.noLlantas = noLlantas;
      this.arranca = autoMethods.arranca;
      this.frena = autoMethods.frena;
  }
  
  createAuto.prototype.playMusic = function() {
    console.log('reproduce musica...')
  };
  
  const tsuru = new createAuto('tsuru', 200, 4);
  const mazda = new createAuto('mazda', 300, 4);
  
  mazda.darAire = function() {
    console.log('aire...')
  };
  
  console.log(tsuru);
  console.log(tsuru.arranca());
  console.log(tsuru.playMusic());
  console.log(mazda.playMusic());
  console.log(mazda.darAire());
  console.log(tsuru.darAire());
  
  
  