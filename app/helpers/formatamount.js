import { helper } from "@ember/component/helper";

export default helper(function formatamount(params /*, hash*/) {
  let [amount] = params;

  let formatedAmount = "";

  do {
    if (formatedAmount.length) {
      formatedAmount = "," + formatedAmount;
    }

    let threeDigits = (amount % 1000) + "";

    amount /= 1000;
    if (amount > 1) {
      while (threeDigits.length < 3) {
        threeDigits = "0" + threeDigits;
      }
    }

    formatedAmount = threeDigits + formatedAmount;
  } while (amount > 1);

  return formatedAmount;
});
