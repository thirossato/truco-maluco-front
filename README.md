# 🃏 Truco Maluco — Frontend

Frontend web do **Truco Maluco**, um jogo de truco com regras dinâmicas e efeitos aleatórios a cada rodada.

Este projeto foi criado em **React** (com Vite) e consome a API do backend [`truco-maluco-back`](../truco-maluco-back).

---

## 🚀 Tecnologias

- React
- TypeScript
- Vite
- Axios (requisições HTTP)
- React Router (navegação)
- Tailwind css
- (Futuro) Socket.io Client para tempo real

---

## 📁 Estrutura sugerida do projeto

```text
src/
  main.tsx
  App.tsx
  routes/
    Router.tsx
  pages/
    Home/
      Home.tsx
      Home.styles.ts
    CreateRoom/
      CreateRoom.tsx
      CreateRoom.styles.ts
    JoinRoom/
      JoinRoom.tsx
      JoinRoom.styles.ts
    RoomLobby/
      RoomLobby.tsx
      RoomLobby.styles.ts
  components/
    Layout/
      Layout.tsx
    Button/
      Button.tsx
    Input/
      Input.tsx
  services/
    api.ts          // axios configurado
    rooms-service.ts
  types/
    room.ts         // interfaces compartilhadas com o back
```

Essa estrutura é só uma base, você pode ir ajustando conforme o jogo evoluir.

---

## ▶️ Como rodar o projeto

### 1. Instalar dependências

```bash
npm install
```

### 2. Rodar em modo desenvolvimento

```bash
npm run dev
```

Por padrão, o Vite sobe em:

```
http://localhost:5173
```

Certifique-se de que o backend do **Truco Maluco** esteja rodando (por exemplo em `http://localhost:3000`) para que as chamadas à API funcionem.

---

## 🔌 Configurando a URL da API

Crie um arquivo `.env` na raiz do projeto:

```text
VITE_API_BASE_URL=http://localhost:3000
```

No arquivo `src/services/api.ts`:

```ts
import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});
```

---

## 🌐 Fluxo inicial de telas

1. **Home**
   - Botões: “Criar sala” e “Entrar em sala”
2. **Criar Sala**
   - Campo: Nome do host
   - Botão “Criar”
   - Chama `POST /rooms`
   - Redireciona para a **Room Lobby**
3. **Entrar em Sala**
   - Campos: Código da sala + nome do jogador
   - Chama `POST /rooms/:code/join`
   - Redireciona para a **Room Lobby**
4. **Room Lobby**
   - Mostra código da sala
   - Lista de jogadores conectados
   - Botão “Copiar código”
   - (Futuro) Botão “Iniciar partida” (apenas host)

---

## 📡 Integração com o backend (exemplo)

Arquivo `src/services/rooms-service.ts`:

```ts
import { api } from "./api";
import type { Room } from "../types/room";

export async function createRoom(hostName: string) {
  const response = await api.post<Room>("/rooms", { hostName });
  return response.data;
}

export async function joinRoom(code: string, playerName: string) {
  const response = await api.post<Room>(\`/rooms/\${code}/join\`, { playerName });
  return response.data;
}

export async function getRoom(code: string) {
  const response = await api.get<Room>(\`/rooms/\${code}\`);
  return response.data;
}
```

---

## 🧠 Tipos (types/room.ts)

```ts
export type RoomStatus = "waiting" | "in_game" | "finished";

export interface Player {
  id: string;
  name: string;
}

export interface Room {
  id: string;
  code: string;
  hostId: string;
  players: Player[];
  status: RoomStatus;
  createdAt: string;
}
```

Você pode manter esses tipos sincronizados com o backend (copiar/colar ou usar um gerador futuramente).

---

## 📌 Roadmap do Frontend

### MVP 1 — Salas
- [ ] Tela inicial (Home)
- [ ] Tela de criação de sala
- [ ] Tela de entrada em sala
- [ ] Tela de lobby com lista de jogadores

### MVP 2 — Tempo real
- [ ] Conectar Socket.io Client
- [ ] Atualizar lobby em tempo real
- [ ] Indicar quem é o host

### MVP 3 — Mesa de jogo
- [ ] Layout da mesa de truco
- [ ] Exibição das cartas do jogador
- [ ] Ações básicas (jogar carta, correr, aceitar truco etc.)

### Futuro
- [ ] Animações e efeitos visuais do “Truco Maluco”
- [ ] Responsividade mobile / PWA
- [ ] Temas personalizados para a mesa
- [ ] Tela de ranking / histórico

---

## 🤝 Contribuições

Sugestões de UX/UI, componentes, animações e melhorias de fluxo são super bem-vindas!

---

## 🧙 Autor

Frontend do projeto **Truco Maluco** 🎲
Desenvolvido por **Thiago Rossato**
