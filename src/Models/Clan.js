export class Clan {
  constructor(id, name, starsCount, forksCount, issuesCount, pullRequestsCount) {
    this.id = id;
    this.name = name;
    this.starsCount = starsCount;
    this.forksCount = forksCount;

    this.issuesCount = issuesCount;
    this.pullRequestsCount = pullRequestsCount;
  }
}
