import type { LobbyPlayer } from "@/types/lobby";
import { PlayerCard } from "./PlayerCard";

type Props = {
  players: LobbyPlayer[];
  maxPlayers: number;
};

export function PlayerList({ players, maxPlayers }: Props) {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-sm font-semibold">
        Jogadores ({players.filter((p) => p.isConnected).length}/{maxPlayers})
      </h2>

      {players.map((player) => (
        <PlayerCard key={player.id} player={player} />
      ))}
    </div>
  );
}
