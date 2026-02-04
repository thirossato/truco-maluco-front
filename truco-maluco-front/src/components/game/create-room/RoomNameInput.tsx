type Props = {
  value: string;
  onChange: (value: string) => void;
};

export function RoomNameInput({ value, onChange }: Props) {
  return (
    <div className="text-sm font-semibold mb-1 block">
      <label>Nome da sala</label>
      <input
        className="w-full rounded-xl border border-neutral-700 bg-neutral-900 text-white px-4 py-3 text-sm placeholder:text-neutral-500"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Sala do Thiago"
      />
    </div>
  );
}
