export class Clan {
  constructor(clan, id, name, starsCount, forksCount, issuesCount, pullRequestsCount) {
    this.clan = clan;

    this.id = id;
    this.name = name;
    this.starsCount = starsCount;
    this.forksCount = forksCount;
    this.issuesCount = issuesCount;
    this.pullRequestsCount = pullRequestsCount;
  }
}
