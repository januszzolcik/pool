// CareerManager.ts

// This file manages the career progression system

export class CareerManager {
    private level: number;
    private experience: number;

    constructor() {
        this.level = 1;
        this.experience = 0;
    }

    public gainExperience(points: number): void {
        this.experience += points;
        this.checkLevelUp();
    }

    private checkLevelUp(): void {
        const experienceToLevelUp = this.level * 100; // Example
        if (this.experience >= experienceToLevelUp) {
            this.level++;
            this.experience = this.experience - experienceToLevelUp;
            console.log(`Leveled up! Now at level ${this.level}`);
        }
    }

    public getLevel(): number {
        return this.level;
    }

    public getExperience(): number {
        return this.experience;
    }
}