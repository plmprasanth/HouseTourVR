import { PICK_ROOM} from './constants'
import data from './data/dhi';

export const pickRoom = (room) => ({
  type: PICK_ROOM,
  payload: data[room]
})
