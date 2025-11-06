// Intro section typewriter - handles the cycling text animation
class IntroTypewriter {
    constructor(engine, chunks, element, cursor) {
        this.engine = engine;
        this.chunks = chunks;
        this.element = element;
        this.cursor = cursor;
        
        this.currentChunkIndex = 0;
        this.isDeleting = false;
        this.isWaiting = false;
        
        this.waitTime = 3000;
        this.deleteWaitTime = 2000;
    }

    start() {
        this.typeCurrentChunk();
    }

    typeCurrentChunk() {
        if (this.currentChunkIndex >= this.chunks.length) {
            return; // Done
        }

        const chunk = this.chunks[this.currentChunkIndex];
        const isLastChunk = this.currentChunkIndex >= this.chunks.length - 1;

        this.engine.typeHTML(chunk.html, this.element, this.cursor, {
            onComplete: () => {
                if (isLastChunk) {
                    // Last chunk - keep cursor visible and stop
                    return;
                }

                // Not last chunk - wait then delete
                setTimeout(() => {
                    this.deleteCurrentChunk();
                }, this.deleteWaitTime);
            }
        });
    }

    deleteCurrentChunk() {
        this.engine.delete(this.element, () => {
            // Move to next chunk
            this.currentChunkIndex++;
            
            // Short pause before typing next chunk
            setTimeout(() => {
                this.typeCurrentChunk();
            }, this.engine.baseSpeed);
        });
    }

    stop() {
        this.engine.stop();
    }
}