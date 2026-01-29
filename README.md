# ⚔️ Ulfberht-Warden

AI assistant forjado com precisão, rodando no Slack.

## Platforms

Ulfberht-Warden roda em **Slack**, **Discord** e **Telegram**.

Configure apenas as plataformas que você quer usar (1, 2 ou todas).

👉 **[Guia completo de configuração multi-plataforma](PLATFORMS.md)**

## Quick Setup

### 1. Configurar Plataformas

Siga o guia: **[PLATFORMS.md](PLATFORMS.md)**

Resumo:
- **Slack**: Socket Mode + Event Subscriptions
- **Discord**: Bot com Message Content Intent
- **Telegram**: Criar bot com @BotFather

### 2. Configurar Railway (ou rodar local)

Ver: **[RAILWAY_SETUP.md](RAILWAY_SETUP.md)**

---

## Slack Setup (Deprecated - Use PLATFORMS.md)

<details>
<summary>Expandir setup antigo do Slack</summary>

### 1. Criar Slack App (OLD)

1. https://api.slack.com/apps → Create New App
2. From scratch → Nome: "Ulfberht-Warden"

### 2. Configurar Permissões

**OAuth & Permissions** → Bot Token Scopes:
- `app_mentions:read`
- `channels:history`
- `channels:read`
- `chat:write`
- `groups:history`
- `groups:read`
- `im:history`
- `im:read`
- `im:write`
- `users:read`

### 3. Socket Mode

1. Settings → Socket Mode → Enable
2. Gerar App-Level Token (scope: `connections:write`)
3. Salvar como SLACK_APP_TOKEN

### 4. Event Subscriptions

Subscribe to bot events:
- `app_mention`
- `message.im`

### 5. Instalar

Install to Workspace → copiar Bot Token

### 6. Variáveis de Ambiente

```bash
cp .env.example .env
# Editar .env com suas chaves
```

### 7. Rodar

```bash
npm install
npm start
```

### 8. Deploy

**Railway (Recomendado):**
- Ver guia completo: [RAILWAY_SETUP.md](RAILWAY_SETUP.md)
- Deploy em 5 minutos
- ~$1-2/mês
- Auto-deploy do GitHub

**Runpod:**
- Ver guia: [RUNPOD_SETUP.md](RUNPOD_SETUP.md)
- Mais caro, não recomendado para bot Slack

</details>

---

## Uso

**Slack:**
- DM ou mencionar `@Ulfberht-Warden`

**Discord:**
- DM ou mencionar `@Ulfberht-Warden`

**Telegram:**
- Buscar bot e enviar `/start`
- Conversar normalmente
- `/clear` para limpar histórico

## Personalização

Edite os arquivos em `workspace/`:
- `SOUL.md` - Personalidade
- `IDENTITY.md` - Nome e identidade
- `MEMORY.md` - Memória de longo prazo
