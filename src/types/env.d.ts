export type EnvType = {
  PORT: number;
  JWT_SECRET: string;
  DB: {
    HOST: string;
    PORT: number;
    USER: string;
    PASSWORD: string | undefined;
    DATABASE: string;
  }
}