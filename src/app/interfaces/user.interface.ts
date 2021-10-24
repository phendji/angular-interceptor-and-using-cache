export interface IUser {
  id?: number;
  email?: string;
  password?: string;
}

export interface IAuthSession {
  jsessionId: string;
  validity: number;
}
