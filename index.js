let arr = [true, false, true, true, false, true, false, false, false, true];

function countTrue(arr) {
  // Array dos itens com caracteristicas que passaram no filtro (o item iterado ser igual a true)
  const arrTrueItems = arr.filter((item) => item === true);

  // Setando o tamanho do array na variável trueItemsQuantity
  const trueItemsQuantity = arrTrueItems.length;

  console.log(trueItemsQuantity);

  return trueItemsQuantity;
}

countTrue(arr);
