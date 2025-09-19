function layerdDiscountTotal(useUnit) {
  let first75UnitPrice = 5;
  let second100UnitPrice = 7;
  let third150UnitPrice = 9;
  let above150UnitPirce = 12;

  if (useUnit <= 75) {
    let totalUnitPrice = useUnit * first75UnitPrice;
    return totalUnitPrice;
  } else if (useUnit <= 100) {
    let first75Unit = 75 * first75UnitPrice;
    let remainingUnit = useUnit - 75;
    let second100Unit = remainingUnit * second100UnitPrice;
    let totalUnitPrice = first75Unit + second100Unit;
    return totalUnitPrice;
  } else if (useUnit <= 150) {
    let first75Unit = 75 * first75UnitPrice;
    let second100Unit = 25 * second100UnitPrice;
    let remainingUnit = useUnit - 100;
    let third150Unit = remainingUnit * third150UnitPrice;
    let totalUnitPrice = first75Unit + second100Unit + third150Unit;
    return totalUnitPrice;
  } else {
    let first75Unit = 75 * first75UnitPrice;
    let second100Unit = 25 * second100UnitPrice;
    let third150Unit = 50 * third150UnitPrice;
    let remainingUnit = useUnit - 150;
    let above150Unit = remainingUnit * above150UnitPirce;
    let totalUnitPrice =
      first75Unit + second100Unit + third150Unit + above150Unit;
    return totalUnitPrice;
  }
}

let bill = layerdDiscountTotal(76);
console.log("bill = ", bill, ".TK");
let tax = (bill * 5) / 100;
console.log("Total Tax = ", tax, ".TK");
let intotalBill = bill + tax;
console.log("Intotal Bill with Tax= ", intotalBill, ".TK");
