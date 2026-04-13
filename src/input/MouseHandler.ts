// MouseHandler.ts

// A class to handle mouse input for the application.
class MouseHandler {
    constructor() {
        this.mousePosition = { x: 0, y: 0 };
        this.init();
    }

    init() {
        window.addEventListener('mousemove', (event) => {
            this.mousePosition.x = event.clientX;
            this.mousePosition.y = event.clientY;
        });
    }

    getPosition() {
        return this.mousePosition;
    }
}

export default MouseHandler;