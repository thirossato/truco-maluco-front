import type { LobbyPlayer } from "@/types/lobby";

type Props = {
  player: LobbyPlayer;
};

export function PlayerCard({ player }: Props) {
  const isEmpty = !player.isConnected;

  return (
    <div
      className={`
        rounded-xl border px-4 py-3 flex justify-between items-center
        ${
          isEmpty
            ? "border-dashed border-neutral-700 text-neutral-500"
            : "border-neutral-700 bg-neutral-800 text-white"
        }
      `}
    >
      <span className="font-semibold">
        {isEmpty ? "⏳ Aguardando" : player.name}
      </span>

      {player.isHost && (
        <span className="text-xs font-bold text-yellow-400">Host</span>
      )}
    </div>
  );
}
