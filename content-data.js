// All text content for the website
const contentData = {
    // Intro typewriter chunks
    introText: [
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
        }
    ],

    // Q&A Blackboard content
    blackboard: {
        education: {
            answer: "I'm currently studying IT with a focus on Computer Graphics and HCI. I love exploring how technology can create meaningful and beautiful experiences!",
            followups: [
                { id: 'education-uni', text: 'Which university?' },
                { id: 'education-courses', text: 'Favorite courses?' },
                { id: 'education-skills', text: 'Key skills?' },
                { id: 'back', text: '← Back' }
            ]
        },
        'education-uni': {
            answer: "I'm studying at [Your University Name]! It's been an amazing journey learning both the theoretical and practical aspects of computer science.",
            followups: [
                { id: 'back', text: '← Back to Education' },
                { id: 'main', text: '← Main Menu' }
            ]
        },
        'education-courses': {
            answer: "My favorite courses include Computer Graphics, Human-Computer Interaction, and Data Visualization. I love anything that combines creativity with code!",
            followups: [
                { id: 'back', text: '← Back to Education' },
                { id: 'main', text: '← Main Menu' }
            ]
        },
        'education-skills': {
            answer: "I've developed skills in Unity 3D, WebGL, JavaScript, Python, and various graphics libraries. I'm always eager to learn new technologies!",
            followups: [
                { id: 'back', text: '← Back to Education' },
                { id: 'main', text: '← Main Menu' }
            ]
        },
        projects: {
            answer: "I work on various projects ranging from AR applications for healthcare to interactive data visualizations. Each project teaches me something new about the intersection of design and technology!",
            followups: [
                { id: 'projects-favorite', text: 'Favorite project?' },
                { id: 'projects-current', text: 'Current projects?' },
                { id: 'projects-future', text: 'Future plans?' },
                { id: 'back', text: '← Back' }
            ]
        },
        'projects-favorite': {
            answer: "My favorite project is the AR Pathfinding system for Parkinson's patients. It combines meaningful impact with technical challenge - exactly what I love!",
            followups: [
                { id: 'back', text: '← Back to Projects' },
                { id: 'main', text: '← Main Menu' }
            ]
        },
        'projects-current': {
            answer: "Right now I'm working on improving 3D Gaussian Splatting interactions and exploring new ways to visualize complex data. There's always something exciting in progress!",
            followups: [
                { id: 'back', text: '← Back to Projects' },
                { id: 'main', text: '← Main Menu' }
            ]
        },
        'projects-future': {
            answer: "I want to explore more AR/VR applications in healthcare and education. The potential to create accessible, helpful technology really motivates me!",
            followups: [
                { id: 'back', text: '← Back to Projects' },
                { id: 'main', text: '← Main Menu' }
            ]
        },
        music: {
            answer: "Music is my creative outlet! I enjoy playing instruments and even built a Neural Network Music Generator. There's something magical about the intersection of code and melody ✨",
            followups: [
                { id: 'music-instruments', text: 'What instruments?' },
                { id: 'music-genres', text: 'Favorite genres?' },
                { id: 'music-coding', text: 'Music + coding?' },
                { id: 'back', text: '← Back' }
            ]
        },
        'music-instruments': {
            answer: "I play [your instruments]! Each instrument offers a different way to express creativity, just like different programming languages.",
            followups: [
                { id: 'back', text: '← Back to Music' },
                { id: 'main', text: '← Main Menu' }
            ]
        },
        'music-genres': {
            answer: "I love [your favorite genres]! Different genres inspire different moods when I'm coding - upbeat for debugging, calm for design work.",
            followups: [
                { id: 'back', text: '← Back to Music' },
                { id: 'main', text: '← Main Menu' }
            ]
        },
        'music-coding': {
            answer: "Music and coding both require creativity, pattern recognition, and attention to detail. My Neural Network Music Generator project was a perfect blend of both passions!",
            followups: [
                { id: 'back', text: '← Back to Music' },
                { id: 'main', text: '← Main Menu' }
            ]
        },
        'cats-dogs': {
            answer: "Definitely cats! 🐱 They're independent, curious, and have that perfect balance of affection and mystery. Plus, they're excellent coding companions who know when to demand attention breaks!",
            followups: [
                { id: 'cats-dogs-why', text: 'Why cats?' },
                { id: 'cats-dogs-pet', text: 'Do you have a cat?' },
                { id: 'back', text: '← Back' }
            ]
        },
        'cats-dogs-why': {
            answer: "Cats are like elegant code - efficient, independent, and sometimes unpredictable! They respect your space but show affection on their own terms.",
            followups: [
                { id: 'back', text: '← Back to Cats or Dogs' },
                { id: 'main', text: '← Main Menu' }
            ]
        },
        'cats-dogs-pet': {
            answer: "[Customize this with your answer - whether you have a cat, want one, etc.]",
            followups: [
                { id: 'back', text: '← Back to Cats or Dogs' },
                { id: 'main', text: '← Main Menu' }
            ]
        }
    }
};