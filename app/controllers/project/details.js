import Controller from "@ember/controller";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";

export default class ProjectDetailsController extends Controller {
  @tracked openingDateTime;

  @action
  setDateTime(date) {
    const now = new Date();

    const diffInMs = Math.abs(date, now);
    if (diffInMs / (1000 * 60 * 60 * 24 * 365)) {
      ("ok");
    }
  }
}
