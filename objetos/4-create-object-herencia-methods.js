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
    const auto = Object.create(createAuto.prototype);
      auto.name = name;
      auto.price = price;
      auto.noLlantas = noLlantas;
      auto.arranca = autoMethods.arranca;
      auto.frena = autoMethods.frena;
    return auto;
  }
  
  createAuto.prototype.playMusic = function() {
    console.log('reproduce musica...')
  };
  
  const tsuru = createAuto('tsuru', 200, 4);
  const mazda = createAuto('mazda', 300, 4);
  
  mazda.darAire = function() {
    console.log('aire...')
  };
  
  console.log(tsuru);
  console.log(tsuru.arranca());
  console.log(tsuru.playMusic());
  console.log(mazda.playMusic());
  console.log(mazda.darAire());
  console.log(tsuru.darAire());
  
  
  