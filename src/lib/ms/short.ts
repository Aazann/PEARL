/** @format
 *
 * Version: 1.0.0
 * Pearl by painfuego
 * © 2024 1sT - Services
 */

const s = 1000;
const m = s * 60;
const h = m * 60;
const d = h * 24;

export default function short(ms: number) {
  const msAbs = Math.abs(ms);
  if (msAbs >= d) {
    return Math.round(ms / d) + "d";
  }
  if (msAbs >= h) {
    return Math.round(ms / h) + "h";
  }
  if (msAbs >= m) {
    return Math.round(ms / m) + "m";
  }
  if (msAbs >= s) {
    return Math.round(ms / s) + "s";
  }
  return ms + "ms";
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
