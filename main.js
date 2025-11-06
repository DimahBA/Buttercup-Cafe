// Main initialization file
// This file brings everything together


// Initialize everything when DOM loads
document.addEventListener('DOMContentLoaded', function() {
    // Determine which version to initialize based on screen size
    const isMobile = window.innerWidth < 768; // md breakpoint

    // Create typewriter engine with custom config
    const typewriterEngine = new TypewriterEngine({
        baseSpeed: 20,
        deletingSpeed: 10,
        pauseWords: [',', '.', '!', '?', 'cute things', 'music', 'coffee', 'breather', 'constant', 'peacefulness', 'student', 'website'],
        pauseDuration: 250
    });

    if (isMobile) {
        // Initialize intro typewriter for mobile
        const introElementMobile = document.getElementById('typewriter-text-mobile');
        const introCursorMobile = document.getElementById('cursor-mobile');

        if (introElementMobile && introCursorMobile) {
            const introTypewriterMobile = new IntroTypewriter(
                typewriterEngine,
                contentData.introText,
                introElementMobile,
                introCursorMobile
            );

            // Show cursor before typing starts
            setTimeout(() => {
                introCursorMobile.classList.remove('cursor-hidden');
                introCursorMobile.classList.add('cursor-visible');
            }, 2000);

            // Start typing
            setTimeout(() => {
                introTypewriterMobile.start();
            }, 3500);
        }
    } else {
        // Initialize intro typewriter for desktop
        const introElement = document.getElementById('typewriter-text');
        const introCursor = document.getElementById('cursor');

        if (introElement && introCursor) {
            const introTypewriter = new IntroTypewriter(
                typewriterEngine,
                contentData.introText,
                introElement,
                introCursor
            );

            // Show cursor before typing starts
            setTimeout(() => {
                introCursor.classList.remove('cursor-hidden');
                introCursor.classList.add('cursor-visible');
            }, 2000);

            // Start typing
            setTimeout(() => {
                introTypewriter.start();
            }, 3500);
        }
    }

    // Initialize blackboard Q&A
    // Create a separate engine for blackboard to avoid conflicts
    const blackboardEngine = new TypewriterEngine({
        baseSpeed: 30,
        pauseWords: [',', '.', '!', '?'],
        pauseDuration: 200
    });

    blackboardQA = new BlackboardQA(blackboardEngine, contentData.blackboard);
    blackboardQA.animateChatBubble();
});
