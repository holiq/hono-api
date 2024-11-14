import { Context, Hono } from "hono";
import { LoginController } from "@app/controller/Auth/LoginController";
import { RegisterController } from "@app/controller/Auth/RegisterController";

const authRoutes: Hono = new Hono();

authRoutes.post('/login', (c: Context) => LoginController.handle(c))
authRoutes.post('/register', (c: Context) => RegisterController.handle(c))

export default authRoutes