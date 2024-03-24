export class HelperService {
  public static generateUserName(): string {
    const first = Math.random().toString(36).substring(2, 7);
    const last = Math.random().toString(36).substring(2, 7);
    return first + last;
  }
}
