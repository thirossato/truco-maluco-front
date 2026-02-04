import { LobbyHeader } from "./LobbyHeader";
import { PlayerList } from "./PlayerList";
import { StartGameButton } from "./StartGameButton";
import { ShareCodeButton } from "./ShareCodeButton";
import type { LobbyData } from "@/types/lobby";

export function LobbyScreen() {
  const lobby: LobbyData = {
    roomName: "Sala do Thiago",
    code: "ABC123",
    maxPlayers: 4,
    modeLabel: "Truco Clássico",
    isCurrentUserHost: true,
    players: [
      { id: "1", name: "😎 Thiago", isHost: true, isConnected: true },
      { id: "2", name: "🤠 Maria", isHost: false, isConnected: true },
      { id: "3", name: "", isHost: false, isConnected: false },
      { id: "4", name: "", isHost: false, isConnected: false },
    ],
  };

  return (
    <div className="mx-auto max-w-[420px] flex flex-col gap-6 p-4">
      <LobbyHeader roomName={lobby.roomName} code={lobby.code} />

      <PlayerList players={lobby.players} maxPlayers={lobby.maxPlayers} />

      <div className="text-sm text-neutral-400">
        Modo:{" "}
        <span className="font-semibold text-white">{lobby.modeLabel}</span>
      </div>

      {lobby.isCurrentUserHost && (
        <StartGameButton onClick={() => console.log("START GAME")} />
      )}

      <ShareCodeButton code={lobby.code} />
    </div>
  );
}
