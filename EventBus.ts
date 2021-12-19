class EventBus {
    private eventHandlers: Record<string, Function[]> = {};
    on(eventName: string, eventHandler: Function) {
      if (!this.eventHandlers[eventName]) {
        this.eventHandlers[eventName] = [];
        this.eventHandlers[eventName].push(eventHandler);
      } else {
        this.eventHandlers[eventName].push(eventHandler);
      }
    }
    emit(eventName: string, props = {}) {
      if (this.eventHandlers[eventName]) {
        this.eventHandlers[eventName].forEach((func: Function) => {
          func(props);
        });
      }
    }
    remove(eventName: string) {
      if(this.eventHandlers[eventName]) {
        this.eventHandlers[eventName] = []
      }
    }
  }
  const eventBus = new EventBus();
  export default eventBus;