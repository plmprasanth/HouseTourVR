import { PICK_ROOM } from './constants';

const startingRoom = {
  name: 'Carrier HRDC',
  // info: `
  //   * 4 bedroom
  //   * 3 bath
  //   * Priced at $180,000`,
  adjacentRooms: ['digital_floor']
}

export const roomReducer = (state = startingRoom, action={}) => {
  switch (action.type) {
    case PICK_ROOM:
      return { ...state,
        name: action.payload.name,
        info: action.payload.info,
        adjacentRooms: action.payload.adjacentRooms  }
    default:
      return state
  }
}
