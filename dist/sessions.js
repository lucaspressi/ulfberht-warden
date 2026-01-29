"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sessionManager = void 0;
class SessionManager {
    sessions = new Map();
    getOrCreate(userId) {
        if (!this.sessions.has(userId)) {
            this.sessions.set(userId, {
                userId,
                messages: [],
                createdAt: new Date(),
                lastActivity: new Date()
            });
            console.log(`[Sessions] Created new session for user: ${userId}`);
        }
        return this.sessions.get(userId);
    }
    get(userId) {
        return this.sessions.get(userId);
    }
    addMessage(userId, message) {
        const session = this.getOrCreate(userId);
        session.messages.push(message);
        session.lastActivity = new Date();
        // Keep only last 50 messages to avoid memory issues
        if (session.messages.length > 50) {
            session.messages = session.messages.slice(-50);
        }
    }
    getHistory(userId) {
        const session = this.get(userId);
        return session ? session.messages : [];
    }
    clear(userId) {
        this.sessions.delete(userId);
        console.log(`[Sessions] Cleared session for user: ${userId}`);
    }
    getActiveSessions() {
        return this.sessions.size;
    }
}
exports.sessionManager = new SessionManager();
