type Props = {
  roomName: string;
  code: string;
};

export function LobbyHeader({ roomName, code }: Props) {
  return (
    <div className="flex justify-between items-center border-b border-neutral-700 pb-3">
      <h1 className="font-bold text-lg">{roomName}</h1>

      <div className="text-right text-sm text-neutral-400">
        Código:
        <div className="font-bold tracking-widest text-white">{code}</div>
      </div>
    </div>
  );
}
