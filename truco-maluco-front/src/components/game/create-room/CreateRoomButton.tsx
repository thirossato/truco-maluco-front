type Props = {
  disabled?: boolean;
  onClick: () => void;
};

export function CreateRoomButton({ disabled = false, onClick }: Props) {
  return (
    <div style={{ marginTop: 16 }}>
      <button
        className="w-full rounded-2xl py-4 text-base font-extrabold bg-gradient-to-br from-yellow-400 to-orange-400 text-black transition disabled:opacity-50"
        type="button"
        onClick={onClick}
        disabled={disabled}
        aria-disabled={disabled}
        style={{
          width: "100%",
          padding: "14px 16px",
          borderRadius: 10,
          fontWeight: 700,
          cursor: disabled ? "not-allowed" : "pointer",
        }}
      >
        CRIAR SALA 🚀
      </button>
    </div>
  );
}
