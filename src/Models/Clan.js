export class Clan {
  constructor(id, name, starsCount, issuesCount, forksCount, pullRequestsCount) {
    this.id = id;
    this.name = name;
    this.starsCount = starsCount;
    this.issuesCount = issuesCount;
    this.forksCount = forksCount;
    this.pullRequestsCount = pullRequestsCount;
  }
}
