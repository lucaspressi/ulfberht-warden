# 🚂 Deploy Ulfberht-Warden no Railway

Deploy em 5 minutos, rodando 24/7.

## 1. Criar Conta no Railway

1. Acesse: https://railway.app
2. Sign up com GitHub (recomendado)
3. Verificar email se necessário

## 2. Preparar Slack App

Antes de fazer deploy, você precisa das credenciais do Slack.

### Criar Slack App

1. https://api.slack.com/apps → **Create New App**
2. **From scratch** → Nome: `Ulfberht-Warden`
3. Escolher seu workspace

### Configurar Permissões

**OAuth & Permissions** → **Bot Token Scopes**:
```
app_mentions:read
channels:history
channels:read
chat:write
groups:history
groups:read
im:history
im:read
im:write
users:read
```

### Ativar Socket Mode

1. **Settings** → **Socket Mode** → **Enable**
2. Gerar **App-Level Token**
   - Nome: `websocket`
   - Scope: `connections:write`
   - Copiar token (começa com `xapp-`)
   - Guardar como `SLACK_APP_TOKEN`

### Event Subscriptions

1. **Event Subscriptions** → **Enable Events**
2. **Subscribe to bot events**:
   - `app_mention`
   - `message.im`

### Instalar no Workspace

1. **Install App** → **Install to Workspace**
2. Autorizar
3. Copiar **Bot User OAuth Token** (começa com `xoxb-`)
4. Guardar como `SLACK_BOT_TOKEN`

### Pegar Signing Secret

1. **Basic Information** → **App Credentials**
2. Copiar **Signing Secret**
3. Guardar como `SLACK_SIGNING_SECRET`

## 3. Deploy no Railway

### Criar Projeto

1. https://railway.app/new
2. **Deploy from GitHub repo**
3. Conectar conta do GitHub se ainda não conectou
4. Selecionar: `lucaspressi/ulfberht-warden`
5. **Deploy Now**

### Configurar Variáveis de Ambiente

1. No projeto Railway, clicar no serviço
2. **Variables** tab
3. Adicionar cada variável:

```env
ANTHROPIC_API_KEY=sk-ant-api03-xxx
SLACK_BOT_TOKEN=xoxb-xxx
SLACK_APP_TOKEN=xapp-xxx
SLACK_SIGNING_SECRET=xxx
```

4. **Deploy** (vai redeployar automaticamente)

## 4. Verificar Deploy

### Ver Logs

1. No Railway, clicar no serviço
2. **Deployments** tab
3. Clicar no último deploy
4. Ver logs em tempo real

Você deve ver:
```
🛡️  Ulfberht-Warden conectado!
Workspace: seu-workspace
Socket Mode: conectado
```

### Testar no Slack

1. Abrir Slack
2. Ver o bot online nos Apps
3. Mandar DM: `olá`
4. Ou mencionar em canal: `@Ulfberht-Warden teste`

## 5. Monitoramento

### Ver Logs ao Vivo

```bash
# Instalar Railway CLI (opcional)
npm install -g @railway/cli

# Login
railway login

# Ver logs
railway logs
```

### Métricas

No Railway dashboard:
- **Metrics** tab → CPU, memória, network
- **Deployments** → histórico de deploys
- **Settings** → configurações do serviço

## 6. Custos

### Free Trial
- $5 de crédito grátis
- Suficiente pra testar ~1 semana

### Plano Hobby
- $5/mês (500 horas de execução)
- Bot pequeno usa ~0.1 CPU → **~$1-2/mês**

### Monitorar Uso
- **Settings** → **Usage** → ver consumo

## 7. Configurações Úteis

### Auto-Deploy

Railway já faz auto-deploy ao dar push no GitHub. Para desabilitar:
1. **Settings** → **Deploys**
2. Desmarcar **Auto Deploy**

### Restart Política

Se o bot crashar, Railway reinicia automaticamente.

### Health Checks

Railway detecta se o serviço está saudável pela porta 3000.

### Custom Domain (Opcional)

Se quiser um domínio custom:
1. **Settings** → **Domains**
2. Adicionar domínio
3. Configurar DNS

## 8. Troubleshooting

### Bot não aparece online

**Verificar variáveis:**
```bash
railway variables
```

**Ver logs:**
```bash
railway logs
```

**Erros comuns:**
- `ANTHROPIC_API_KEY` inválida
- `SLACK_APP_TOKEN` incorreto
- Socket Mode não habilitado no Slack

### Deploy falhou

**Ver logs do build:**
1. **Deployments** → último deploy
2. Ver **Build Logs**

**Rebuild:**
1. **Deployments** → **⋮** → **Redeploy**

### Consumo alto

**Verificar:**
1. **Metrics** → ver CPU/memória
2. Se alto, verificar loops infinitos ou bugs

### Atualizar código

```bash
# Local
git add .
git commit -m "atualização"
git push

# Railway deploya automaticamente
```

## 9. Manutenção

### Atualizar dependências

```bash
npm update
git add package*.json
git commit -m "⬆️ Atualiza dependências"
git push
```

### Backup da memória

Railway tem volumes efêmeros. Para backup persistente:
1. Adicionar volume persistente
2. Ou fazer backup manual do `workspace/memory/`

### Logs persistentes

Railway guarda logs por tempo limitado. Para logs de longo prazo:
- Integrar com Logtail/Datadog
- Ou salvar em volume persistente

## 10. Próximos Passos

✅ Deploy funcionando
✅ Bot online no Slack

**Agora:**
- Use o bot!
- Atualize `workspace/MEMORY.md` com coisas importantes
- Ajuste `workspace/SOUL.md` se quiser mudar personalidade
- Monitore uso no Railway

---

**Suporte:**
- Railway: https://railway.app/help
- Slack API: https://api.slack.com/docs
- Issues: https://github.com/lucaspressi/ulfberht-warden/issues
