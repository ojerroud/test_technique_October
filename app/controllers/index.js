import Controller from "@ember/controller";
// import { tracked } from "@glimmer/tracking";
// import { computed } from "@ember/object";
// import { action } from "@ember/object";

export default class IndexController extends Controller {
  // @tracked openingDateTime = "";

  // @action
  // setDateTime(date) {
  //   const now = new Date();

  //   const newDate = new Date(date);
  //   // date = new Date(date);

  //   const diffInMs = Math.abs(newDate, now);
  //   if (diffInMs / (1000 * 60 * 60 * 24 * 365)) {
  //     return "ok";
  //   } else {
  //     return "ok";
  //   }
  // }

  get projectsOnline() {
    return this.model.filter((project) => project.status === "online");
  }

  get projectsCompleted() {
    return this.model.filter((project) => project.status === "completed");
  }

  // get formatedPurcentage(num) {
  //   return `${Math.floor(num)}${Math.round(num % 1 * 100)}`
  // }
  // @tracked num = computed(function (number) {
  //   console.log(number);
  //   return `${Math.floor(number)}${Math.round((number % 1) * 100)}`;
  // });
  // set(this, '', );
  // lastname = "lastname";
}
