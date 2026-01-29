"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.workspace = exports.WorkspaceLoader = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
class WorkspaceLoader {
    workspacePath;
    soul = '';
    identity = '';
    memory = '';
    agents = '';
    constructor(workspacePath = './workspace') {
        this.workspacePath = workspacePath;
        this.load();
    }
    load() {
        try {
            const files = ['SOUL.md', 'IDENTITY.md', 'MEMORY.md', 'AGENTS.md'];
            for (const file of files) {
                const filePath = path_1.default.join(this.workspacePath, file);
                if (fs_1.default.existsSync(filePath)) {
                    const content = fs_1.default.readFileSync(filePath, 'utf-8');
                    const key = file.replace('.md', '').toLowerCase();
                    this[key] = content;
                    console.log(`[Workspace] ✓ Loaded ${file}`);
                }
                else {
                    console.warn(`[Workspace] ⚠ ${file} not found`);
                }
            }
        }
        catch (error) {
            console.error('[Workspace] Error loading files:', error);
        }
    }
    getSystemPrompt() {
        const parts = [];
        if (this.identity)
            parts.push(this.identity);
        if (this.soul)
            parts.push('\n---\n', this.soul);
        if (this.agents)
            parts.push('\n---\n', this.agents);
        if (this.memory)
            parts.push('\n---\n# MEMORY\n', this.memory);
        return parts.join('\n');
    }
    reload() {
        console.log('[Workspace] Reloading workspace files...');
        this.load();
    }
}
exports.WorkspaceLoader = WorkspaceLoader;
exports.workspace = new WorkspaceLoader();
