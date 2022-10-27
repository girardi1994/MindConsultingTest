import { compare, hash } from "bcrypt";
import { prisma } from "../../../../database/prismaClient";

interface ILoginUser {
  email: string;
  password: string;
}

export class LoginUserUseCase {
  async execute({ email, password }: ILoginUser) {
    if (!email || !password) {
      throw new Error("Preencha todos os campos.");
    }
    const userExist = await prisma.user.findFirst({
      where: {
        email,
      },
    });

    if (!userExist) {
      throw new Error("Usuário inválido.");
    }

    const passwordIsMatch = await compare(password, userExist.password);

    if (!passwordIsMatch) {
      throw new Error("Usuário inválido.");
    }

    return userExist;
  }
}
