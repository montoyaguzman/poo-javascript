/* Funcion constructora */

function createAuto(name, price, noLlantas) {
    const auto = {
      name: name,
      price: price,
      noLlantas: noLlantas,
    }
    return auto;
  }
  
  const tsuru = createAuto('tsuru', 200, 4);
  const mazda = createAuto('mazda', 300, 4);
  console.log(tsuru);