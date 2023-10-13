import { Manager } from "../manager.js";

export default async (client: Manager) => {
  (await import("./Plugin/AntiCrash.js")).default(client);
  client.logger.loader("Plugin Events Loaded!");
};
