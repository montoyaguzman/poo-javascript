class Auto {
  
    constructor(name, price, noLlantas) {
      this.name = name;
      this.price = price;
      this.noLlantas = noLlantas;
    }
    
    arranca() {
      console.log('arrancando');
      // document.addEventListener
    }
    
    frena() {
      console.log('frena');
    }
    
  }
  
  class AutoDeportivo extends Auto {
    
    constructor(name, price, noLLantas, aleron) {
        super(name, price, noLLantas);
        this.aleron = aleron;
    }
    
    acelerarRapido() {
      console.log('acelera rapido...');
    }
    
  }
  
  class AutoTodoTerreno extends Auto {
    
    constructor(name, price, noLLantas, dobleTraccion) {
        super(name, price, noLLantas);
        this.dobleTraccion = dobleTraccion;
    }
    
     escalar() {
      console.log('escala montañas...');
    }
    
  }
  
  const ford = new AutoTodoTerreno('tsuru', 200, 4, 'esta es mi doble transaccion');
  const mazda = new AutoDeportivo('mazda', 300, 4, 'tengo un aleron muy cool');
  console.log(ford);
  console.log(mazda);