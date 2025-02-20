/**
 * Utility functions for internationalization
 */

/**
 * Interpolates variables into translation strings
 * @param {string} message - The message with placeholders like {{variable}}
 * @param {Object} variables - Object containing variable values
 */
export const interpolateMessage = (message, variables = {}) => {
  return message.replace(/\{\{(\w+)\}\}/g, (_, key) => variables[key] || '');
};

/**
 * Handles pluralization rules for different languages
 * @param {string} locale - The current locale
 * @param {number} count - The count to check
 * @param {Object} forms - Object containing different plural forms
 */
export const getPlural = (locale, count, forms) => {
  // Simple pluralization rules - can be expanded for more complex languages
  if (locale === 'ar') {
    // Arabic has 6 plural forms
    if (count === 0) return forms.zero || forms.other;
    if (count === 1) return forms.one;
    if (count === 2) return forms.two;
    if (count >= 3 && count <= 10) return forms.few;
    if (count >= 11 && count <= 99) return forms.many;
    return forms.other;
  }
  
  // Default plural rules for English and similar languages
  return count === 1 ? forms.one : forms.other;
};

/**
 * Formats dates according to locale conventions
 * @param {Date} date - The date to format
 * @param {string} locale - The target locale
 * @param {Object} options - Intl.DateTimeFormat options
 */
export const formatDate = (date, locale, options = {}) => {
  return new Intl.DateTimeFormat(locale, options).format(date);
};

/**
 * Formats numbers according to locale conventions
 * @param {number} number - The number to format
 * @param {string} locale - The target locale
 * @param {Object} options - Intl.NumberFormat options
 */
export const formatNumber = (number, locale, options = {}) => {
  return new Intl.NumberFormat(locale, options).format(number);
};
