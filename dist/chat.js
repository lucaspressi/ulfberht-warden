import Anthropic from '@anthropic-ai/sdk';
import { workspace } from './workspace.js';
const client = new Anthropic({
    apiKey: process.env.ANTHROPIC_API_KEY,
});
const MODEL = 'claude-sonnet-4-20250514';
export async function chat(options) {
    const { userId, userMessage, history } = options;
    try {
        const systemPrompt = workspace.getSystemPrompt();
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
