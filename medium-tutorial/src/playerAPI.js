const players = [
  { number: 1, name: 'Ben Blocker', position: 'G' },
  { number: 2, name: 'Dave Defender', position: 'D' },
  { number: 3, name: 'Sam Sweeper', position: 'D' },
  { number: 4, name: 'Matt Midfielder', position: 'M' },
  { number: 5, name: 'William Winger', position: 'M' },
  { number: 6, name: 'Fillipe Forward', position: 'F' },
];

export const getAllPlayers = async () => {
  try {
    return players;
  } catch (error) {
    throw error;
  }
};

export const getPlayer = async id => {
  try {
    return players.find(player => player.number === parseInt(id, 10));
  } catch (error) {
    throw error;
  }
};
