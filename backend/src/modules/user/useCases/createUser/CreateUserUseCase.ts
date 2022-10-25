import { hash } from "bcrypt";
import { prisma } from "../../../../database/prismaClient";

interface ICreateUser {
  name: string;
  email: string;
  password: string;
}
export class CreateUserUseCase {
  async execute({ name, email, password }: ICreateUser) {
    if (!name || !email || !password) {
      throw new Error("Preencha todos os campos.");
    }
    const userExist = await prisma.user.findFirst({
      where: {
        email,
      },
    });
    if (userExist) {
      throw new Error("Usuário já cadastrado.");
    }
    const hashPassword = await hash(password, 10);
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashPassword,
      },
    });
    return user;
  }
}
