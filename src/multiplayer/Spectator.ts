// Spectator.ts
// Implementing spectator mode with broadcast channels

interface Player {
    id: string;
    name: string;
}

class Spectator {
    private players: Player[] = [];
    private channel: BroadcastChannel;

    constructor(channelName: string) {
        this.channel = new BroadcastChannel(channelName);
        this.channel.onmessage = this.onMessage.bind(this);
    }

    public addPlayer(player: Player): void {
        this.players.push(player);
        this.broadcastState();
    }

    public removePlayer(playerId: string): void {
        this.players = this.players.filter(player => player.id !== playerId);
        this.broadcastState();
    }

    private broadcastState(): void {
        this.channel.postMessage(this.players);
    }

    private onMessage(event: MessageEvent): void {
        console.log('Received message:', event.data);
    }
}

export default Spectator;