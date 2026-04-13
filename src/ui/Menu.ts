// Main Menu Interface

export interface Menu {
    displayMenu(): void;
    handleSelection(selection: number): void;
}