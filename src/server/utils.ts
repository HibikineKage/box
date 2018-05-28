let currentRoomId: number = 0;
export const nextRoomId = (): number => {
  currentRoomId += 1;
  return currentRoomId;
};
