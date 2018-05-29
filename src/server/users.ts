export interface User {
  name: string;
  socketId: string;
}
export default class Users extends Array<User> { }