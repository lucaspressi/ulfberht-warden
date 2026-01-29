# 🚀 Deploy no Render.com

Guia completo para fazer deploy do Ulfberht-Warden no Render.

## 1. Criar Conta

1. Acessar: https://render.com
2. **Sign Up** com GitHub (recomendado)
3. Autorizar acesso ao GitHub

## 2. Criar Web Service

1. No dashboard do Render, clicar **New +**
2. Selecionar **Web Service**
3. Conectar repositório:
   - Se não aparecer seu repo, clicar **+ Connect account**
   - Autorizar Render no GitHub
   - Buscar: `ulfberht-warden`
   - Clicar **Connect**

## 3. Configurar Serviço

**Configurações básicas:**

```
Name: ulfberht-warden
Region: Ohio (US East) ou qualquer região próxima
Branch: main
Runtime: Docker
```

**Build & Deploy:**
- Render detecta o Dockerfile automaticamente
- Deixar padrão

## 4. Adicionar Variáveis de Ambiente

Na seção **Environment Variables**, adicionar:

```
ANTHROPIC_API_KEY
Value: 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

SLACK_BOT_TOKEN
Value: xoxb-2860497801-2632804586611-OlqjOJGVxZPJi2xeU3OhuN0q

SLACK_APP_TOKEN
Value: xapp-1-A02JDFP2D5L-10403615146898-b6118948545f68b55fb1e9e79b9add3fe5c29ac2b7c114d7c4ce1038c264fbe1

SLACK_SIGNING_SECRET
Value: 3d2fdfa15aefc6ea3bd11dcc108f33af
```

*Deixar Discord e Telegram vazios por enquanto*

## 5. Plano

Selecionar plano:
- **Free** (limitado, mas funciona pra testar)
- **Starter - $7/mês** (recomendado, sem limitações)

## 6. Deploy

1. Clicar **Create Web Service**
2. Render vai:
   - Clonar repo
   - Build Docker image
   - Deploy container
   - Tempo: ~3-5 min

## 7. Ver Logs

1. Na página do serviço, aba **Logs**
2. Deve aparecer:
   ```
   ⚔️  ULFBERHT-WARDEN
   ✓ Slack handler started
   Status: ONLINE (1 platform)
   ```

## 8. Testar

1. Abrir Slack
2. Ver se bot está online
3. Mandar DM: `olá`

## Troubleshooting

### Build falha

**Ver logs de build:**
- Clicar no deploy
- Ver **Build Logs**

**Rebuild:**
- **Manual Deploy** → **Deploy latest commit**

### Bot não conecta no Slack

**Verificar variáveis:**
- **Environment** → ver se todas estão configuradas
- Sem aspas nos valores

**Restart:**
- **Manual Deploy** → **Clear build cache & deploy**

### Free tier limitações

**Render Free:**
- Dorme após 15min de inatividade
- Demora ~30s pra acordar
- 750 horas/mês grátis

**Upgrade pra Starter:**
- $7/mês
- Sempre online
- Melhor performance

## Vantagens do Render

✅ Interface mais simples que Railway
✅ Variáveis de ambiente funcionam direto
✅ Logs claros
✅ Free tier funciona (com limitações)
✅ Deploy automático do GitHub

## Custos

**Free:**
- $0/mês
- 750 horas grátis
- Dorme após inatividade

**Starter:**
- $7/mês
- Sempre online
- 0.1 CPU / 512 MB RAM
- **Recomendado para uso real**

---

**Pronto!** Bot deve estar rodando no Render. 🎉
