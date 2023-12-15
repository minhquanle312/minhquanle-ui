// Types
import { THandleErrorPayload } from 'minhquanle-ui/lib/types'

export const handleError = (error: any, payload: THandleErrorPayload) => {
  // eslint-disable-next-line no-console
  console.log({
    error: payload,
  })
}
