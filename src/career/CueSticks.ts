// CueSticks.ts

/**
 * Class to represent a collection of cue sticks and their variations.
 */
class CueSticks {
    private cues: Array<{name: string; stats: object}>;

    constructor() {
        this.cues = [];
    }

    /**
     * Add a cue stick to the collection.
     * @param name - The name of the cue stick.
     * @param stats - The statistics associated with the cue stick.
     */
    addCue(name: string, stats: object): void {
        this.cues.push({name, stats});
    }

    /**
     * Get the collection of cue sticks.
     * @returns Array of cue sticks.
     */
    getCues(): Array<{name: string; stats: object}> {
        return this.cues;
    }
}

// Example usage:
const myCues = new CueSticks();
myCues.addCue('Pro Series', { weight: 19, length: 58 });

export default CueSticks;
