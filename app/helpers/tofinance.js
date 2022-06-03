import { helper } from "@ember/component/helper";

export default helper(function tofinance(params /*, hash*/) {
  const [amount, totalInvested] = params;
  let toFinance = amount - totalInvested;

  let formatedToFinance = "";

  do {
    if (formatedToFinance.length) {
      formatedToFinance = "," + formatedToFinance;
    }

    let threeDigits = (toFinance % 1000) + "";

    toFinance /= 1000;
    if (toFinance > 1) {
      while (threeDigits.length < 3) {
        threeDigits = "0" + threeDigits;
      }
    }

    formatedToFinance = threeDigits + formatedToFinance;
  } while (toFinance > 1);

  if (toFinance != "0") {
    return `€ ${formatedToFinance} to finance >`;
  } else {
    return "See the project >";
  }
});
