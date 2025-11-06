
// Chat bubble pop and float animation function
function animateChatBubble(id) {
    const chatBubble = document.getElementById(id);
    if (!chatBubble) return;
    
    // Set initial state
    chatBubble.style.opacity = '0';
    chatBubble.style.transform = 'scale(0) translateY(0px)';
    chatBubble.style.transition = 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)';
    
    // Start pop animation after delay
    setTimeout(() => {
        // Pop in!
        chatBubble.style.opacity = '1';
        chatBubble.style.transform = 'scale(1.05) translateY(0px)';
        
        // Settle to normal size
        setTimeout(() => {
            chatBubble.style.transform = 'scale(1) translateY(0px)';
            
            // Start floating after pop completes
            setTimeout(() => {
                startFloating(chatBubble);
            }, 200);
        }, 300);
    }, 1000);
}

// Infinite floating animation
function startFloating(element) {
    // Remove transition for smooth floating
    element.style.transition = 'transform 1s ease-in-out';
    
    let isFloatingUp = true;
    
    function float() {
        if (isFloatingUp) {
            element.style.transform = 'scale(1) translateY(-8px)';
        } else {
            element.style.transform = 'scale(1) translateY(0px)';
        }
        isFloatingUp = !isFloatingUp;
        
        // Continue floating every 1.5 seconds
        setTimeout(float, 1000);
    }
    
    // Start the floating cycle
    float();
}

// Start everything when DOM loads
document.addEventListener('DOMContentLoaded', function() {
    // Start chat bubble animation
    animateChatBubble("chat-bubble");
    animateChatBubble("blackboard-chat-bubble");

    
    // Show cursor before typing starts
    setTimeout(() => {
        const cursor = document.getElementById('cursor');
        if (cursor) {
            cursor.classList.remove('cursor-hidden');
            cursor.classList.add('cursor-visible');
        }
    }, 2000);
    
    // Start typing
    setTimeout(typeWriter, 3500);
});

