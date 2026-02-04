type Props = {
  code: string;
};

export function ShareCodeButton({ code }: Props) {
  function handleShare() {
    navigator.clipboard.writeText(code);
    alert("Código copiado!");
  }

  return (
    <button
      onClick={handleShare}
      className="text-sm font-semibold text-yellow-400 underline self-center"
    >
      Compartilhar código
    </button>
  );
}
