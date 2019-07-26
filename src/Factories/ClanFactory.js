import { Clan } from '../Models/Clan';

export class ClanFactory {
  static createFromJson(json) {
    if (json === undefined || json === null) return undefined;

    return new Clan(
      json.id,
      json.name,
      json.stargazers_count,
      json.open_issues_count,
      json.forks_count,
      undefined,
    );
  }
}
