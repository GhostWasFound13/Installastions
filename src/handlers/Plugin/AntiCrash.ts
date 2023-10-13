import { Manager } from "../manager.js";


export default (client: manager) => {
 process.on("unhandledRejection", (error) =>
      client.logger.log({ level: "error", message: String(error) })
    );
    process.on("uncaughtException", (error) =>
      client.logger.log({ level: "error", message: String(error) })
    );
};
