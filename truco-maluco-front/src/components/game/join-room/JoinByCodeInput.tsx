type Props = {
  value: string;
  onChange: (value: string) => void;
};

export function JoinByCodeInput({ value, onChange }: Props) {
  function handleChange(v: string) {
    onChange(
      v
        .toUpperCase()
        .replace(/[^A-Z0-9]/g, "")
        .slice(0, 6),
    );
  }

  return (
    <div>
      <label className="text-sm font-semibold mb-1 block">
        Entrar com código
      </label>

      <input
        value={value}
        onChange={(e) => handleChange(e.target.value)}
        placeholder="ABC123"
        className="
          w-full rounded-xl border border-neutral-700
          bg-neutral-900 text-white
          px-4 py-3 text-sm
          tracking-widest font-bold uppercase
        "
      />
    </div>
  );
}
