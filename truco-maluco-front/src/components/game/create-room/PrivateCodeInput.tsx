type Props = {
  value: string;
  onChange: (value: string) => void;
};

export function PrivateCodeInput({ value, onChange }: Props) {
  function handleChange(v: string) {
    const normalized = v
      .toUpperCase()
      .replace(/[^A-Z0-9]/g, "")
      .slice(0, 6);

    onChange(normalized);
  }

  return (
    <div className="text-sm font-semibold mb-1 block">
      <label>Código da sala</label>

      <input
        className="w-full rounded-xl border border-neutral-700 bg-neutral-900 text-white px-4 py-3 text-sm placeholder:text-neutral-500"
        value={value}
        onChange={(e) => handleChange(e.target.value)}
        placeholder="ABC123"
        maxLength={6}
      />
    </div>
  );
}
