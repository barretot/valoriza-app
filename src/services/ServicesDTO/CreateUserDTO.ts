interface ICreateUserRequestDTO {
  name: string;
  email: string;
  admin?: boolean;
  password: string;
}

export { ICreateUserRequestDTO };
