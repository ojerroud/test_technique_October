import Route from "@ember/routing/route";
import { inject as service } from "@ember/service";

export default class IndexRoute extends Route {
  @service store;

  async model() {
    const projects = await this.store.findAll("project");

    // const response = await fetch("https://api.october.eu/projects");
    // const { projects } = await response.json();

    return projects;
  }
}
