export interface LobbyPlayer {
  id: string;
  name: string;
  isHost: boolean;
  isConnected: boolean;
}

export interface LobbyData {
  roomName: string;
  code: string;
  maxPlayers: number;
  modeLabel: string;
  players: LobbyPlayer[];
  isCurrentUserHost: boolean;
}
