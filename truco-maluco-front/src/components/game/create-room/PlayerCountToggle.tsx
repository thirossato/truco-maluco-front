type PlayerCount = 2 | 4 | 6;

type Props = {
  value: PlayerCount;
  onChange: (value: PlayerCount) => void;
};

export function PlayerCountToggle({ value, onChange }: Props) {
  const options: PlayerCount[] = [2, 4, 6];

  return (
    <div>
      <label className="text-sm font-semibold mb-2 block">
        Número de jogadores
      </label>
      <div className="flex gap-3">
        {options.map((opt) => {
          const selected = value === opt;
          return (
            <button
              key={opt}
              type="button"
              onClick={() => onChange(opt)}
              aria-pressed={selected}
              className={`
                 flex-1 rounded-xl py-3 text-base font-bold
                 border transition
                 ${
                   selected
                     ? "bg-yellow-400 text-black border-yellow-400"
                     : "bg-neutral-800 text-neutral-400 border-neutral-700"
                 }
               `}
            >
              {opt}
            </button>
          );
        })}
      </div>
    </div>
  );
}
