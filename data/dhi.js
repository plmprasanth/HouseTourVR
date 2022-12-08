export default data = {
  digital_floor: {
    name: 'Digital Floor',
    // info: `
    //   * Open space living room
    //   * Easy access to all other rooms.
    //   * Big screen T.V. wall  mount`,
    adjacentRooms: ['kamal_room', 'play_room', 'cafeteria']
  },
  play_room: {
    name: 'Play Room',
    // info: `
    //   * Billiards table and ping pong table included.
    //   * Classic Space Invaders arcade game included.
    //   * Polished wood floors.
    //   * Entertaining and eating area for outside.
    // `,
    adjacentRooms: ['bathroom']
  },
  kamal_room: {
    name: 'Kamal Room',
    // info: `
    // * Queen size bed.
    // * Over looks surrounding acres.
    // * Large closet for him and hers.`,
    adjacentRooms: ['digital_floor']
  },
  cafeteria:  {
    name: 'Cafeteria',
    // info: `
    //   * Porcelain bath tiles and travertine molding.
    //   * Privacy glass block window.
    //   * Relaxing garden tub with jets.
    //   * Double extractor lighted vents.`,
    adjacentRooms: ['digital_floor']
  }
}
