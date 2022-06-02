import RESTAdapter from "@ember-data/adapter/rest";

export default class ApplicationAdapter extends RESTAdapter {
  // namespace = "https://api.october.eu";
  host = "https://api.october.eu";
  // buildURL(...args) {
  //   return `${super.buildURL(...args)}.json`;
  // }
}
