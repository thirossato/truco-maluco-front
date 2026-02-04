import { useState } from "react";
import { JoinByCodeInput } from "./JoinByCodeInput";
import { JoinRoomButton } from "./JoinRoomButton";
import { PublicRoomList } from "./PublicRoomList";

export function JoinRoomForm() {
  const [code, setCode] = useState("");

  return (
    <div className="mx-auto max-w-[420px] flex flex-col gap-6 p-4">
      {/* Entrar com código */}
      <div className="flex flex-col gap-3">
        <JoinByCodeInput value={code} onChange={setCode} />

        <JoinRoomButton
          disabled={code.length < 4}
          onClick={() => console.log("ENTRAR COM CÓDIGO", code)}
        />
      </div>

      {/* Divider */}
      <div className="flex items-center gap-4 text-neutral-500 text-sm">
        <div className="flex-1 h-px bg-neutral-700" />
        OU
        <div className="flex-1 h-px bg-neutral-700" />
      </div>

      {/* Salas públicas */}
      <PublicRoomList
        rooms={[
          { id: "1", name: "Sala do João", currentPlayers: 2, maxPlayers: 4 },
          { id: "2", name: "Truco Insano", currentPlayers: 4, maxPlayers: 6 },
          { id: "3", name: "Mesa Aleatória", currentPlayers: 1, maxPlayers: 2 },
        ]}
        onJoin={(roomId) => console.log("ENTRAR NA SALA", roomId)}
      />
    </div>
  );
}
