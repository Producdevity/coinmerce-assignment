import forEach from 'lodash.foreach'
import get from 'lodash.get'
import text from '~/data/text'

/**
 * Provides internationalization (i18n) support (not really tbh) for the application by fetching localized text based on a given key.
 * The `t` function will look up a text value from a `text` object and substitute arguments into the text if provided.
 * If the text key is not found, an optional default value may be returned instead.
 *
 * @param {string} name - The key of the text to be localized.
 * @param {null | string[]} args - An array of strings to be substituted into the text, or null if no substitution is required.
 * @param {string} [defaultValue] - The default value to return if the text key is not found.
 *
 * @returns {string} The localized text, with any arguments substituted in.
 *
 * @example
 * // Given the text object is { "greeting": "Hello, :0!" }
 * import t from '~/utils/t';
 *
 * // Basic usage
 * console.log(t('greeting', ['World']));  // Outputs: 'Hello, World!'
 *
 * // With missing key
 * console.log(t('missing', [], 'Default'));  // Outputs: 'Default'
 *
 * // Without substitution
 * console.log(t('greeting'));  // Outputs: 'Hello, :0!'
 *
 * // With null as args to avoid substitution
 * console.log(t('greeting', null));  // Outputs: 'Hello, :0!'
 */
function t(
  name: string,
  args: null | string[] = [],
  defaultValue?: string,
): string {
  let value = get(text, name, defaultValue) as string

  if (!value) return ''

  if (args === null) return value

  forEach(args, (argValue, key) => (value = value.replace(`:${key}`, argValue)))

  return value
}

export default t
