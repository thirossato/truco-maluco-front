export type GameMode = "classic" | "paulista" | "mineiro";

export type RoomPrivacy = "public" | "private";

export interface CreateRoomFormData {
  name: string;
  players: 2 | 4 | 6;
  mode: GameMode;
  privacy: RoomPrivacy;
  privateCode?: string;
}