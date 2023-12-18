import {
  VALUE_C,
  VALUE_CONTROL,
  VALUE_LEFT_WINDOW,
  VALUE_V,
  VALUE_Z,
} from 'minhquanle-ui/es/constants/keyCode'
/**
 * Function to parse search params string to object
 * @param {string} searchParams - search params
 * @returns {Record<string, unknown>}
 */
export const searchPramsToObject = (
  searchParams: string = ''
): Record<string, unknown> =>
  Object.fromEntries(new URLSearchParams(searchParams))

let ctrlDown = false

export const getPreventKeyboardAction = (
  actions: Array<'undo' | 'copy' | 'paste'> = []
) => ({
  onKeyDown: (e: React.KeyboardEvent | KeyboardEvent) => {
    if (e.key === VALUE_CONTROL || e.key === VALUE_LEFT_WINDOW) {
      ctrlDown = true
    }

    if (
      (actions.includes('undo') && ctrlDown && e.key === VALUE_Z) ||
      (actions.includes('copy') && ctrlDown && e.key === VALUE_V) ||
      (actions.includes('paste') && ctrlDown && e.key === VALUE_C)
    ) {
      e.preventDefault()
      return false
    }
  },

  onKeyUp: (e: React.KeyboardEvent | KeyboardEvent) => {
    if (e.key === VALUE_CONTROL || e.key === VALUE_LEFT_WINDOW) {
      ctrlDown = false
    }
  },
})
