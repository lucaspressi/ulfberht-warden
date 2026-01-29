"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.chat = chat;
const sdk_1 = __importDefault(require("@anthropic-ai/sdk"));
const workspace_1 = require("./workspace");
const client = new sdk_1.default({
    apiKey: process.env.ANTHROPIC_API_KEY,
});
const MODEL = 'claude-sonnet-4-20250514';
async function chat(options) {
    const { userId, userMessage, history } = options;
    try {
        const systemPrompt = workspace_1.workspace.getSystemPrompt();
        const messages = [
            ...history,
            {
                role: 'user',
                content: userMessage,
            },
        ];
        console.log(`[Chat] User ${userId}: ${userMessage.substring(0, 50)}...`);
        const response = await client.messages.create({
            model: MODEL,
            max_tokens: 4096,
            system: systemPrompt,
            messages,
        });
        const assistantMessage = response.content
            .filter((block) => block.type === 'text')
            .map((block) => block.text)
            .join('');
        console.log(`[Chat] Warden: ${assistantMessage.substring(0, 50)}...`);
        return assistantMessage;
    }
    catch (error) {
        console.error('[Chat] Error:', error);
        throw error;
    }
}
