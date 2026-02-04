import { Button } from "../../components/ui/Button";
import logo from "../../assets/images/logo_truco_maluco_transparente.png";

export function Home() {
  return (
    <div className="
      min-h-screen
      flex flex-col items-center justify-center
      px-6
    ">
      
      {/* Logo container */}
      <div className="mb-8">
        <img
          src={logo}
          alt="Truco Maluco"
          className="w-72 md:w-96 drop-shadow-[0_12px_0_rgba(0,0,0,0.35)]"
        />
      </div>

      {/* Subtitle */}
      <p className="
        text-lg
        font-bold
        text-white
        opacity-90
        mb-10
      ">
        O truco mais caótico da internet
      </p>

      {/* Actions */}
      <div className="w-full max-w-sm flex flex-col gap-4">
        <Button variant="primary" fullWidth className="text-lg tracking-wide">
          Jogar Agora
        </Button>

        <Button variant="secondary" fullWidth className="mt-2 text-center text-white/70 text-sm">
          Criar Sala
        </Button>

         <Button variant="secondary" fullWidth className="mt-2 text-center text-white/70 text-sm">
          Entrar em sala
        </Button>
      </div>
    </div>
  );
}
