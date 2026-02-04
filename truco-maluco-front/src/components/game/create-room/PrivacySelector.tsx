type Privacy = "public" | "private";

type Props = {
  value: Privacy;
  onChange: (value: Privacy) => void;
};

export function PrivacySelector({ value, onChange }: Props) {
   return (
     <div>
       <label className="text-sm font-semibold mb-2 block">Privacidade</label>

       <div className="flex gap-6">
         {(["public", "private"] as const).map((opt) => (
           <label
             key={opt}
             className="flex items-center gap-2 text-sm font-medium cursor-pointer"
           >
             <input
               type="radio"
               checked={value === opt}
               onChange={() => onChange(opt)}
               className="accent-yellow-400"
             />
             {opt === "public" ? "Pública" : "Privada"}
           </label>
         ))}
       </div>
     </div>
   );
}
