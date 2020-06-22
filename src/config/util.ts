/**
 * Flattens an object that may contain nested properties. The nested key names are
 * concatenated with `_` as a delimiter and all key names are converted to uppercase.
 * 
 * @param {{ [property: string]: any }} obj The object to flatten.
 * @param {string} [prefix]                 The string to prepend to all flattened keys.
 *                                          This parameter is also used for recursive
 *                                          purposes.
 * 
 * @returns {Record<string, unknown>}       The flattened object.
 * 
 * @since 0.1.0
 * @author Luke Carr
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const flatten = (obj: { [property: string]: any }, prefix?: string):
  Record<string, unknown> => {
    const flattened: { [property: string]: unknown } = {};
    prefix = prefix ? prefix + "_" : "";

    for (let i = 0; i < Object.keys(obj).length; i += 1) {
      const key = Object.keys(obj)[i];
      if (!obj.hasOwnProperty(key)) continue;

      if (typeof obj[key] === "object" && obj[key] != null) {
        Object.assign(flattened, flatten(obj[key], prefix + key));
      } else {
        flattened[(prefix + key).toUpperCase()] = obj[key];
      }
    }

    return flattened;
  };
