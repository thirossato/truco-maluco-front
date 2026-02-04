type Props = {
  onClick: () => void;
};

export function StartGameButton({ onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className="
        w-full rounded-2xl py-4 text-base font-extrabold
        bg-gradient-to-br from-green-400 to-emerald-500
        text-black transition
      "
    >
      INICIAR JOGO 🎉
    </button>
  );
}
