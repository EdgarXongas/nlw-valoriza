import { Request, Response } from "express";
import { CreateUserService } from "../service/CreateUserService";

class CreateUserController {
  async handle(request: Request, response: Response) {
    const { name, email, password, admin } = request.body;
    const createUserService = new CreateUserService();
    await createUserService.execute({
      name,
      email,
      admin,
      password,
    });
    return response.json({
      name,
      email,
      admin,
    });
  }
}

export { CreateUserController };
