interface ICreateUserRequestDTO {
  name: string;
  email: string;
  admin?: boolean;
}

export { ICreateUserRequestDTO };
