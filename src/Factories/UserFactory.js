import { User } from '../Models/User';

export class UserFactory {
  static createFromJson(json) {
    if (json === undefined || json === null) return undefined;

    return new User(
      json.id,
      json.login,
      json.avatar_url,
    );
  }
}
