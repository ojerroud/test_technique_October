import Controller from "@ember/controller";
import { tracked } from "@glimmer/tracking";
import { computed } from "@ember/object";

export default class IndexController extends Controller {
  // @tracked num;

  get projectsOnline() {
    return this.model.filter((project) => project.status === "online");
  }

  get projectsCompleted() {
    return this.model.filter((project) => project.status === "completed");
  }

  // get formatedPurcentage(num) {
  //   return `${Math.floor(num)}${Math.round(num % 1 * 100)}`
  // }
  @tracked num = computed(function (number) {
    console.log(number);
    return `${Math.floor(number)}${Math.round((number % 1) * 100)}`;
  });
  // set(this, '', );
  // lastname = "lastname";
}
