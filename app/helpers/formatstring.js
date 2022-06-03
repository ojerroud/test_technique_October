import { helper } from "@ember/component/helper";

export default helper(function formatstring(params /*, hash*/) {
  const [string, length] = params;

  console.log(string, length);
  return `${string}${length > 1 ? "s" : ""}`;
});
