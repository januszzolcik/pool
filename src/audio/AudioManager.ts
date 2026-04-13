// AudioManager.ts

class AudioManager {
    private audioContext: AudioContext;

    constructor() {
        this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }

    public playSound(buffer: AudioBuffer): void {
        const source = this.audioContext.createBufferSource();
        source.buffer = buffer;
        source.connect(this.audioContext.destination);
        source.start(0);
    }

    // Additional methods for managing audio can be added here
}

export default AudioManager;
