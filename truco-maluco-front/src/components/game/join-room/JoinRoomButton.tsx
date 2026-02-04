type Props = {
  disabled?: boolean;
  onClick: () => void;
};

export function JoinRoomButton({ disabled, onClick }: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className="
        w-full rounded-2xl py-4 text-base font-extrabold
        bg-gradient-to-br from-yellow-400 to-orange-400
        text-black transition
        disabled:opacity-50
      "
    >
      ENTRAR 🔑
    </button>
  );
}
