/** @format
 *
 * Version: 1.0.0
 * Pearl by painfuego
 * © 2024 1sT - Services
 */

import { limited } from "../../functions/ratelimiter.js";
import { ExtendedClient } from "../../classes/client.js";
import { Events } from "../../interfaces/eventsInterface.js";
import { Context } from "../../interfaces/contextInterface.js";
import { AbstractEvent } from "../../classes/abstract/event.js";

const event: keyof Events = "mention";

export default class MentionEvent implements AbstractEvent<typeof event> {
  name = event;

  async execute(client: ExtendedClient, ctx: Context) {
    if (limited(ctx.author.id)) {
      await client.db.blacklist.set(ctx.author.id, true);
      client.emit("blUser", ctx);
      return;
    }

    await ctx.reply({
      embeds: [
        client
          .embed()
          .desc(
            `Hey ${ctx.author}, my global prefix is \`${client.prefix}\`.\n\n` +
              "What would you like to listen/do today ? \n" +
              `Use \`${client.prefix}help\` or \`/help\` to start your journey.`,
          ),
      ],
    });
  }
}

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
