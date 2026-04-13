export class InputManager {
    constructor() {
        this.keyStates = {};
        this.touchStates = {};
        this.mouseStates = {};

        // Bind event listeners
        this.bindEvents();
    }

    bindEvents() {
        window.addEventListener('keydown', this.handleKeyDown.bind(this));
        window.addEventListener('keyup', this.handleKeyUp.bind(this));
        window.addEventListener('mousedown', this.handleMouseDown.bind(this));
        window.addEventListener('mouseup', this.handleMouseUp.bind(this));
        window.addEventListener('touchstart', this.handleTouchStart.bind(this));
        window.addEventListener('touchend', this.handleTouchEnd.bind(this));
    }

    handleKeyDown(event) {
        this.keyStates[event.key] = true;
    }

    handleKeyUp(event) {
        this.keyStates[event.key] = false;
    }

    handleMouseDown(event) {
        this.mouseStates[event.button] = true;
    }

    handleMouseUp(event) {
        this.mouseStates[event.button] = false;
    }

    handleTouchStart(event) {
        for (let touch of event.touches) {
            this.touchStates[touch.identifier] = touch;
        }
    }

    handleTouchEnd(event) {
        for (let touch of event.changedTouches) {
            delete this.touchStates[touch.identifier];
        }
    }

    isKeyPressed(key) {
        return !!this.keyStates[key];
    }

    isMousePressed(button) {
        return !!this.mouseStates[button];
    }

    isTouchActive(identifier) {
        return !!this.touchStates[identifier];
    }

    // Add additional methods as necessary...
}