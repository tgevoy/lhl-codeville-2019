/*
Each item differs in both cost and the grams of pumpkin spice per serving. To help
festival-goers maximize their pumpkin spice consumption, help them determine the
maximum amount of pumpkin spice they can ingest with the amount of money they are
bringing to the festival.

Pumpkin pie costs $5 each and includes a whopping 30g of pumpkin spice
Pumpkin spice lattes cost $3 each and includes 15g of pumpkin spice
Pumpkin spice macarons cost $1 each and include 3g of pumpkin spice

We need to write a function, pumpkinSpice(money) that will take in a number, or how
much the festival-goer has to spend on treats, and return an array with the 4 elements
as outlined below:

The first element should represent how many slices of pumpkin pie the client can buy
The second element should represent how many pumpkin spice lattes the client can buy
The third element should represent how many pumpkin spice macarons the client can buy
The fourth element should represent how many grams of pumpkin spice the client will be buying

Our function should start by calculating how many slices of pumpkin pie we can buy.
Then, we'll want to use the remaining money to do the calculations for the lattes, followed
lastly by the macarons.
*/

const pumpkinSpice = money => {
  let pie = { cost: 5, spice: 30, qty: 0, grams: 0 };
  let latte = { cost: 3, spice: 15, qty: 0, grams: 0 };
  let macaron = { cost: 1, spice: 3, qty: 0, grams: 0 };

  while (money >= pie.cost) {
    pie.qty++;
    money -= pie.cost;
    pie.grams = pie.qty * pie.spice;
  }

  while (money >= latte.cost) {
    latte.qty++;
    money -= latte.cost;
    latte.grams = latte.qty * latte.spice;
  }

  while (money >= macaron.cost) {
    macaron.qty++;
    money -= macaron.cost;
    macaron.grams = macaron.qty * macaron.spice;
  }

  return [
    pie.qty,
    latte.qty,
    macaron.qty,
    pie.grams + latte.grams + macaron.grams,
  ];
};
