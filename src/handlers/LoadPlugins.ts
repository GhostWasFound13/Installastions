import { Manager } from "../manager.js";

export async function handler(client: Manager) {
  [ "antiCrash.js"].forEach(async (data: string) => {
    (await import(`./plugin/${data}`)).default(client);
  });
}
