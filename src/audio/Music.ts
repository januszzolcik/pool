// Dynamic Music System

class Music {
    constructor() {
        this.tracks = [];
    }

    addTrack(track) {
        this.tracks.push(track);
    }

    play(trackIndex) {
        if (this.tracks[trackIndex]) {
            console.log(`Playing track: ${this.tracks[trackIndex]}`);
        } else {
            console.log('Track not found.');
        }
    }

    stop() {
        console.log('Stopping music.');
    }
}

export default Music;