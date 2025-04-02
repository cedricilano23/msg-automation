export class ApiHelper {
  
  getUsersWithOddIds(users: any[]): any[] {
    return users.filter(user => user.id % 2 !== 0);
  }
}

export const apiHelper = new ApiHelper();
