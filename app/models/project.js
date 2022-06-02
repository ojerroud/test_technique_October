import Model, { attr } from "@ember-data/model";

export default class ProjectModel extends Model {
  @attr status;
  @attr name;
  @attr slug;
  @attr summary;
  @attr loanDuration;
  @attr amount;
  @attr totalInvested;
  @attr onlineDate;
  @attr expirationDate;
  @attr openingDate;
  @attr activity;
  @attr rate;
  @attr grade;
  @attr schedule;
  @attr type;
  @attr confidential;
  @attr process;
  @attr isInstantDecision;
  @attr description;
  @attr illustration;
  @attr business;
  @attr signatory;
}
