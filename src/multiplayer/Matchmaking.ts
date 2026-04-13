// Matchmaking.ts

// ELO-based ranked matchmaking system

class Matchmaking {
    private players: { [id: string]: number };

    constructor() {
        this.players = {};
    }

    // Add a player with their ELO rating
    public addPlayer(id: string, elo: number): void {
        this.players[id] = elo;
    }

    // Remove a player
    public removePlayer(id: string): void {
        delete this.players[id];
    }

    // Find the best opponent for a player
    public findOpponent(playerId: string): string | null {
        if (!(playerId in this.players)) return null;

        const playerElo = this.players[playerId];
        let bestOpponent: string | null = null;
        let closestEloDiff = Infinity;

        for (const [id, elo] of Object.entries(this.players)) {
            if (id !== playerId) {
                const eloDiff = Math.abs(playerElo - elo);
                if (eloDiff < closestEloDiff) {
                    closestEloDiff = eloDiff;
                    bestOpponent = id;
                }
            }
        }

        return bestOpponent;
    }

    // Update a player's ELO rating after a match
    public updateElo(winnerId: string, loserId: string): void {
        const K = 32; // K-factor, determines how much ELO rating can change

        if (winnerId in this.players && loserId in this.players) {
            const winnerElo = this.players[winnerId];
            const loserElo = this.players[loserId];

            const expectedWinnerScore = 1 / (1 + Math.pow(10, (loserElo - winnerElo) / 400));
            const expectedLoserScore = 1 / (1 + Math.pow(10, (winnerElo - loserElo) / 400));

            this.players[winnerId] = winnerElo + K * (1 - expectedWinnerScore);
            this.players[loserId] = loserElo + K * (0 - expectedLoserScore);
        }
    }
}

export default Matchmaking;