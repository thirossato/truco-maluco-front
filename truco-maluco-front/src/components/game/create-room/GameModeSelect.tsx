import type { GameMode } from "@/types/create-room";

type Props = {
  value: GameMode;
  onChange: (value: GameMode) => void;
};

const OPTIONS: { label: string; value: GameMode }[] = [
  { label: "Truco Clássico", value: "classic" },
  { label: "Truco Paulista", value: "paulista" },
  { label: "Truco Mineiro", value: "mineiro" },
];

export function GameModeSelect({ value, onChange }: Props) {
  return (
    <div>
      <label>Modo de jogo</label>

      <select
        value={value}
        onChange={(e) => onChange(e.target.value as GameMode)}
        className="w-full rounded-xl border border-neutral-700 bg-neutral-900 text-white px-4 py-3 text-sm"
      >
        {OPTIONS.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}
