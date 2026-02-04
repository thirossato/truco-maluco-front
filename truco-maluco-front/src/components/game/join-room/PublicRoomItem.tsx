import type { PublicRoom } from "@/types/join-room";

type Props = {
  room: PublicRoom;
  onClick: () => void;
};

export function PublicRoomItem({ room, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className="
        w-full rounded-xl border border-neutral-700
        bg-neutral-800 px-4 py-3
        flex justify-between items-center
        text-left transition
        hover:bg-neutral-700
      "
    >
      <span className="font-semibold text-white">{room.name}</span>

      <span className="text-sm text-neutral-400">
        ({room.currentPlayers}/{room.maxPlayers})
      </span>
    </button>
  );
}
