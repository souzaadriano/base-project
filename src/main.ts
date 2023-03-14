import { Application } from "./engine/application";
import { DatabaseEngine } from "./engine/database/database.engine";
import { HttpServerEngine } from "./engine/http-server/http-server.engine";

async function main() {
    await Application.use(new DatabaseEngine())
                     .use(new HttpServerEngine())
                     .start();
}

main().catch(console.error)