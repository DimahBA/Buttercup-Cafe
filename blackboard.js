// blackboard.js
// Blackboard Q&A interaction system
class BlackboardQA {
    constructor(engine, data) {
        this.engine = engine;
        this.data = data;
        this.currentTopic = null;
        this.previousTopic = null;
        
        // DOM elements
        this.chatBubble = document.getElementById('blackboard-chat-bubble');
        this.dialogue = document.getElementById('blackboard-dialogue');
        this.questionsDiv = document.getElementById('blackboard-questions');
        this.followupsDiv = document.getElementById('blackboard-followups');
        this.answerElement = document.getElementById('blackboard-answer');
        this.cursorElement = document.getElementById('blackboard-cursor');
    }

    selectQuestion(topic) {
        // Handle back button
        if (topic === 'back') {
            if (this.previousTopic) {
                topic = this.previousTopic;
                this.previousTopic = null;
            } else {
                this.reset();
                return;
            }
        }
        
        // Handle main menu
        if (topic === 'main') {
            this.reset();
            return;
        }
        
        const topicData = this.data[topic];
        if (!topicData) return;
        
        // Store previous topic for back navigation
        if (this.currentTopic && !topic.includes(this.currentTopic)) {
            this.previousTopic = this.currentTopic;
        }
        this.currentTopic = topic;
        
        // Hide chat bubble with fade (DON'T use display:none or hidden class)
        if (this.chatBubble) this.chatBubble.style.opacity = '0';
        
        setTimeout(() => {
            // Show dialogue box (just opacity, it's always in the DOM)
            if (this.dialogue) this.dialogue.style.opacity = '1';
            
            // Start typewriter effect
            this.engine.type(topicData.answer, this.answerElement, this.cursorElement, {
                speed: 30
            });
        }, 300);
        
        // Update blackboard with follow-up questions
        this.updateFollowups(topicData.followups);
    }

    updateFollowups(followups) {
        if (this.questionsDiv) this.questionsDiv.style.opacity = '0';
        
        setTimeout(() => {
            if (this.questionsDiv) this.questionsDiv.classList.add('hidden');
            if (this.followupsDiv) this.followupsDiv.classList.remove('hidden');
            
            // Build follow-up buttons
            if (this.followupsDiv) {
                this.followupsDiv.innerHTML = followups.map(followup => `
                    <button onclick="blackboardQA.selectQuestion('${followup.id}')" 
                            class="flex items-center gap-3 hover:scale-105 transition-transform duration-200 cursor-pointer text-left group">
                        <img src="./static/PixelArt/tinyFlower.png" class="w-6 group-hover:scale-110 transition-transform" alt="">
                        <span class="text-white font-serif text-xl group-hover:text-gray-200">${followup.text}</span>
                    </button>
                `).join('');
                
                this.followupsDiv.style.opacity = '0';
                setTimeout(() => {
                    this.followupsDiv.style.opacity = '1';
                }, 50);
            }
        }, 300);
    }

    reset() {
        this.currentTopic = null;
        this.previousTopic = null;
        
        // Stop typewriter
        this.engine.stop();
        
        // Hide dialogue (just opacity, keep in DOM)
        if (this.dialogue) this.dialogue.style.opacity = '0';
        
        setTimeout(() => {
            // Clear the answer text
            if (this.answerElement) this.answerElement.textContent = '';
            
            // Show chat bubble
            if (this.chatBubble) this.chatBubble.style.opacity = '1';
        }, 300);
        
        // Reset blackboard to main questions
        if (this.followupsDiv) this.followupsDiv.style.opacity = '0';
        
        setTimeout(() => {
            if (this.followupsDiv) this.followupsDiv.classList.add('hidden');
            if (this.questionsDiv) {
                this.questionsDiv.classList.remove('hidden');
                this.questionsDiv.style.opacity = '1';
            }
        }, 300);
    }
}

// Global instance for onclick handlers
let blackboardQA;
