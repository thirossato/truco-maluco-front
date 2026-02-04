import { useState } from "react";
import type { CreateRoomFormData } from "@/types/create-room";
import { CreateRoomButton } from "./CreateRoomButton";
import { RoomNameInput } from "./RoomNameInput";
import { PlayerCountToggle } from "./PlayerCountToggle";
import { PrivacySelector } from "./PrivacySelector";
import { GameModeSelect } from "./GameModeSelect";
import { PrivateCodeInput } from "./PrivateCodeInput";

export function CreateRoomForm() {
  const [form, setForm] = useState<CreateRoomFormData>({
    name: "",
    players: 4,
    mode: "classic",
    privacy: "public",
  });

  function update<K extends keyof CreateRoomFormData>(
    key: K,
    value: CreateRoomFormData[K],
  ) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

   return (
     <div className="mx-auto max-w-105 flex flex-col gap-5 p-4">
       <RoomNameInput value={form.name} onChange={(v) => update("name", v)} />

       <PlayerCountToggle
         value={form.players}
         onChange={(v) => update("players", v)}
       />

       <GameModeSelect value={form.mode} onChange={(v) => update("mode", v)} />

       <PrivacySelector
         value={form.privacy}
         onChange={(v) => update("privacy", v)}
       />

       {form.privacy === "private" && (
         <PrivateCodeInput
           value={form.privateCode ?? ""}
           onChange={(v) => update("privateCode", v)}
         />
       )}

       <CreateRoomButton
         disabled={!form.name}
         onClick={() => console.log("CRIAR SALA", form)}
       />
     </div>
   );
}
