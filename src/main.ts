import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app/app.module";

const PORT = process.env.PORT || 7000;

async function start() {
    const app = await NestFactory.create(AppModule);

    await app.listen(PORT, () => console.log(`Server was started on port = ${PORT}`));
}

start();
