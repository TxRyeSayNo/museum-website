// Gemini API Configuration
const GEMINI_API_KEY = 'AIzaSyAQXbgUR6ucB0spaFIdoidaPfc9H48wa8g'; // Thay bằng API key của bạn từ https://aistudio.google.com/app/apikeys


let conversationHistory = [];
let isLoading = false;

// Open AI Chat
function openAIChat() {
    console.log('🤖 Opening AI Chat...');
    const modal = document.getElementById('aiChatModal');
    if (modal) {
        modal.classList.remove('hidden');
        document.getElementById('aiChatInput').focus();
    } else {
        console.error('❌ Modal not found!');
    }
}

// Close AI Chat
function closeAIChat() {
    console.log('❌ Closing AI Chat');
    const modal = document.getElementById('aiChatModal');
    if (modal) {
        modal.classList.add('hidden');
    }
}

// Handle Keypress
function handleAIChatKeypress(event) {
    if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault();
        sendAIMessage();
    }
}

// Send Message
async function sendAIMessage() {
    const input = document.getElementById('aiChatInput');
    const message = input.value.trim();

    if (!message || isLoading) return;

    console.log('📤 Sending message:', message);

    // Add user message to UI
    addMessageToChat(message, 'user');
    input.value = '';

    // Show typing indicator
    addTypingIndicator();
    isLoading = true;

    try {
        // Call Gemini API
        const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=' + GEMINI_API_KEY, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                contents: [{
                    parts: [{
                        text: `Bạn là một trợ lý lịch sử chuyên biệt về Lịch sử Việt Nam. Hãy trả lời câu hỏi sau một cách chi tiết, chính xác và thú vị. Nếu câu hỏi không liên quan đến lịch sử Việt Nam, hãy nhẹ nhàng hướng dẫn người dùng quay lại chủ đề lịch sử.\n\nCâu hỏi: ${message}`
                    }]
                }]
            })
        });

        if (!response.ok) {
            throw new Error(`API Error: ${response.status}`);
        }

        const data = await response.json();
        console.log('✅ API Response:', data);

        let aiResponse = 'Xin lỗi, tôi không thể xử lý câu hỏi này. Vui lòng thử lại.';
        
        if (data.candidates && data.candidates[0] && data.candidates[0].content && data.candidates[0].content.parts[0]) {
            aiResponse = data.candidates[0].content.parts[0].text;
        }

        console.log('📥 AI Response:', aiResponse);

        // Remove typing indicator
        removeTypingIndicator();

        // Add AI response to UI
        addMessageToChat(aiResponse, 'ai');

        // Store in conversation history
        conversationHistory.push({ role: 'user', text: message });
        conversationHistory.push({ role: 'ai', text: aiResponse });

    } catch (error) {
        console.error('❌ Error:', error);
        removeTypingIndicator();
        addMessageToChat('Xin lỗi, có lỗi xảy ra. Vui lòng kiểm tra API key hoặc thử lại sau.', 'ai');
    } finally {
        isLoading = false;
    }
}

// Add Message to Chat
function addMessageToChat(message, role) {
    const messagesContainer = document.getElementById('aiChatMessages');
    if (!messagesContainer) {
        console.error('❌ Messages container not found!');
        return;
    }
    
    const messageEl = document.createElement('div');
    messageEl.className = role === 'user' ? 'user-message' : 'ai-message';

    if (role === 'ai') {
        messageEl.innerHTML = `
            <div class="ai-avatar">
                <img src="assets/images/4d87f44a-922d-4dae-895b-944b8947a1c9.png" alt="AI">
            </div>
            <div class="ai-text">
                <p>${escapeHtml(message)}</p>
            </div>
        `;
    } else {
        messageEl.innerHTML = `
            <div class="user-text">
                <p>${escapeHtml(message)}</p>
            </div>
        `;
    }

    messagesContainer.appendChild(messageEl);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

// Add Typing Indicator
function addTypingIndicator() {
    const messagesContainer = document.getElementById('aiChatMessages');
    if (!messagesContainer) return;
    
    const typingEl = document.createElement('div');
    typingEl.className = 'ai-message';
    typingEl.id = 'typingIndicator';
    typingEl.innerHTML = `
        <div class="ai-avatar">
            <img src="assets/images/4d87f44a-922d-4dae-895b-944b8947a1c9.png" alt="AI">
        </div>
        <div class="ai-text">
            <div class="typing-dots">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    `;

    messagesContainer.appendChild(typingEl);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

// Remove Typing Indicator
function removeTypingIndicator() {
    const typing = document.getElementById('typingIndicator');
    if (typing) typing.remove();
}

// Escape HTML
function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, m => map[m]);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    console.log('✅ AI Chat JS loaded');
    
    // Check if elements exist
    const btn = document.querySelector('.ai-chat-btn');
    const modal = document.getElementById('aiChatModal');
    
    if (!btn) console.error('❌ AI Chat Button not found!');
    if (!modal) console.error('❌ AI Chat Modal not found!');
    
    // Add typing animation CSS
    addTypingAnimationCSS();
});

// Add CSS for typing animation
function addTypingAnimationCSS() {
    if (document.getElementById('typingAnimationStyle')) return;
    
    const style = document.createElement('style');
    style.id = 'typingAnimationStyle';
    style.textContent = `
        .typing-dots {
            display: flex;
            gap: 0.3rem;
            align-items: center;
            height: 1.2rem;
        }

        .typing-dots span {
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background: #ffd54f;
            animation: typing 1.4s infinite;
        }

        .typing-dots span:nth-child(2) {
            animation-delay: 0.2s;
        }

        .typing-dots span:nth-child(3) {
            animation-delay: 0.4s;
        }

        @keyframes typing {
            0%, 60%, 100% {
                transform: translateY(0);
                opacity: 0.5;
            }
            30% {
                transform: translateY(-8px);
                opacity: 1;
            }
        }
    `;
    document.head.appendChild(style);
}

const video = document.querySelector('.hero-video');
const soundBtn = document.querySelector('.sound-toggle');

function toggleSound() {
    video.muted = !video.muted;
    soundBtn.textContent = video.muted ? '🔇' : '🔊';
}

console.log('🚀 AI Chat script initialized');