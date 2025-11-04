const textChunks = [
    {
        text: "I'm an IT student who likes cute things, music, and coffee!",
        html: "I'm an IT student who likes cute things, music, and <span class='font-bold'>coffee!</span>"
    },
    {
        text: "This website is my attempt to recreate the peacefulness that coffee gives me in the digital world ...",
        html: "This website is my attempt to recreate the peacefulness that coffee gives me in the digital world ..."
    },
    {
        text: "Consider it a place to take a breather .. from that constant motion of the internet.",
        html: "Consider it a place to take a breather .. from that constant motion of the internet."
    },
    {
        text: "Enjoy your stay !",
        html: "Enjoy your stay !"
    },
];

let currentChunkIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;
let isWaiting = false;

const typewriterElement = document.getElementById('typewriter-text');
const baseTypingSpeed = 20;
const deletingSpeed = 10;
const waitTime = 3000;
const deleteWaitTime = 2000;

// Words that should have pauses after them (like natural speech)
const pauseWords = [',','.', '!', '?', 'cute things', 'music', 'coffee', 'digital', 'breather', 'constant', 'peacefulness', 'student', 'music', 'website', 'me'];
const pauseDuration = 250; // Extra pause after certain words

function getTypingSpeed(currentChar, previousChars) {
    // Check if we just completed a pause word
    const lastWord = previousChars.split(' ').pop();
    const currentText = previousChars + currentChar;
    
    // Pause after punctuation
    if ([',', '.', '!', '?'].includes(currentChar)) {
        return baseTypingSpeed + 300;
    }
    
    // Pause after specific words
    if (pauseWords.includes(lastWord) && currentChar === ' ') {
        return baseTypingSpeed + pauseDuration;
    }
    
    // Random slight variation to make it feel more natural
    return baseTypingSpeed + Math.random() * 20;
}

function typeWriter() {
    const currentChunk = textChunks[currentChunkIndex];
    const plainText = currentChunk.text;
    
    if (isWaiting) {
        setTimeout(() => {
            isWaiting = false;
            isDeleting = true;
            typeWriter();
        }, waitTime);
        return;
    }
    
    if (!isDeleting) {
        // Typing
        if (currentCharIndex < plainText.length) {
            const displayText = plainText.substring(0, currentCharIndex + 1);
            const currentChar = plainText[currentCharIndex];
            const previousChars = plainText.substring(0, currentCharIndex);
            
            // Replace "coffee" with bold version if it's complete
            if (displayText.includes('coffee') && displayText.indexOf('coffee') + 6 <= displayText.length) {
                typewriterElement.innerHTML = displayText.replace('coffee', '<span class="font-bold">coffee</span>');
            } else {
                typewriterElement.textContent = displayText;
            }
            
            currentCharIndex++;
            const nextSpeed = getTypingSpeed(currentChar, previousChars);
            setTimeout(typeWriter, nextSpeed);
        } else {
            // Show final HTML version
            typewriterElement.innerHTML = currentChunk.html;
            
            // Check if this is the last chunk
            if (currentChunkIndex >= textChunks.length - 1) {
                // This is the last sentence - keep the cursor visible and stop
                return; // Exit the function, animation complete
            }
            
            // Not the last chunk, so wait and then delete
            isWaiting = true;
            setTimeout(() => {
                isWaiting = false;
                isDeleting = true;
                typeWriter();
            }, deleteWaitTime);
        }
    } else {
        // Deleting
        if (currentCharIndex > 0) {
            typewriterElement.textContent = plainText.substring(0, currentCharIndex - 1);
            currentCharIndex--;
            setTimeout(typeWriter, deletingSpeed);
        } else {
            // Finished deleting, move to next chunk
            isDeleting = false;
            currentChunkIndex++;
            setTimeout(typeWriter, baseTypingSpeed);
        }
    }
}

// Start the typewriter effect AFTER the chat box appears
document.addEventListener('DOMContentLoaded', function() {
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