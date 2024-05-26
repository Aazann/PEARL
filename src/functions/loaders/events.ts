/** @format
 *
 * Version: 1.0.0
 * Pearl by painfuego
 * © 2024 1sT - Services
 */

import { readdir } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { ExtendedClient } from "../../classes/client.js";
import { AbstractEvent } from "../../classes/abstract/event.js";

const __dirname = dirname(fileURLToPath(import.meta.url));

export const loadEvents = async (client: ExtendedClient) => {
  let total = 0;

  const eventsFolder = resolve(__dirname, "../../events/");

  for (const subFolder of await readdir(eventsFolder)) {
    const _eventsFolder = resolve(__dirname, `../../events/${subFolder}`);

    for (const eventFile of await readdir(_eventsFolder)) {
      const fileUrl = pathToFileURL(resolve(__dirname, _eventsFolder, eventFile)).href;
      const event = new (await import(fileUrl)).default() as AbstractEvent<any>;

      client.on(event.name, event.execute.bind(null, client));

      total++;
    }
  }
  client.log(`Loaded ${total} events`, "success");
};

/** @Code-style: Google ( https://google.github.io/styleguide/jsguide.html ) */

/** @License Overview:
 *
 * License - CC BY-NC-SA 4.0
 *
 * This work is licensed under the Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License.
 * This license grants permission for others to utilize, share, and adapt the work for non-commercial purposes.
 * In compliance with the license terms, users are required to attribute the original creator, release any derivative works under the same license, and indicate if changes were made.
  Widely adopted for creative works, it fosters collaboration while ensuring that content remains open and freely accessible for non-commercial use.
 * To view a copy of this license, visit http://creativecommons.org/licenses/by-nc-sa/4.0/ or send a letter to Creative Commons,
  PO Box 1866, Mountain View, CA 94042, USA.
 */
