import { helper } from "@ember/component/helper";

export default helper(function duration(params /*, hash*/) {
  const [date] = params;

  const days = new Date(date);
  const now = new Date();
  const diffTime = Math.abs(days - now);
  const diffDays = Math.round(diffTime / (1000 * 60 * 60 * 24));
  const diffMonths = Math.round(diffDays / 30);
  const diffYears = Math.round(diffMonths / 12);

  let diff, unit;

  if (diffYears > 0) {
    diff = diffYears;
    unit = "year";
  } else if (diffMonths > 0) {
    diff = diffMonths;
    unit = "month";
  } else {
    diff = diffDays;
    unit = "day";
  }

  return `${diff} ${unit}${diff > 1 ? "s" : ""} ${days < now ? "ago" : ""}`;
});
