import type { PublicRoom } from "@/types/join-room";
import { PublicRoomItem } from "./PublicRoomItem";

type Props = {
  rooms: PublicRoom[];
  onJoin: (roomId: string) => void;
};

export function PublicRoomList({ rooms, onJoin }: Props) {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-sm font-semibold">Salas públicas</h2>

      {rooms.map((room) => (
        <PublicRoomItem
          key={room.id}
          room={room}
          onClick={() => onJoin(room.id)}
        />
      ))}
    </div>
  );
}
