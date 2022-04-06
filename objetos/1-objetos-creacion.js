function suma(param1, param2) {
    // sentences
  }
  
  // Sintaxis iniciadora
  const tsuru = {
     name: 'tsuru',
     price: 20,
     arranca: function(aceleracion) {
       console.log('estoy arrancando...', aceleracion)
     }
  };
  tsuru.noLlantas = 4;
  console.log(tsuru);
  console.log(tsuru.name);
  console.log(tsuru.arranca);
  console.log(tsuru.arranca(10));
  
  // Sintaxis new Object
  const mazda = new Object();
  mazda.name = 'mazda';
  mazda.price = 150;
  mazda.noLlantas = 4;
  console.log(mazda);