// Libraries
import i18next from 'i18next';

// Types
import { ConvertedToObjectType, TranslationJsonType } from './types';

export const translations: ConvertedToObjectType<TranslationJsonType> = {} as any;

/*
 * Converts the static JSON file into an object where keys are identical
 * but values are strings concatenated according to syntax.
 * This is helpful when using the JSON file keys and still having the intellisense support
 * along with type-safety
 */
export const convertLanguageJsonToObject = (
  json: any,
  objToConvertTo = translations,
  current?: string,
) => {
  Object.keys(json).forEach(key => {
    const currentLookupKey = current ? `${current}.${key}` : key;
    if (typeof json[key] === 'object') {
      objToConvertTo[key] = {};
      convertLanguageJsonToObject(json[key], objToConvertTo[key], currentLookupKey);
    } else {
      objToConvertTo[key] = currentLookupKey;
    }
  });
};

export const t = (id: string, ...rest: any[]): [string, ...any[]] => {
  if (!id) {
    id = '_NOT_TRANSLATED_';
  }
  return [id, ...rest];
};

export const getTranslateMessage = (
  id: string,
  defaultMessage: string = '',
  value: Record<string, unknown> = {},
) => {
  try {
    return i18next.t(t(id, defaultMessage), value);
  } catch (error) {
    return '';
  }
};
