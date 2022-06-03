import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";

export default class ProjectDetailsComponent extends Component {
  @tracked number = 0;

  @action
  addNumber() {
    this.number += 1;
  }
}
