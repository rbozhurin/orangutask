import EventEmitter from "eventemitter3";

export default class Application extends EventEmitter {
  static get events() {
    return {
      READY: "ready",
    };
  }

  constructor() {
    super();
    this.emojis = [];
    this.banana = "🍌";
    this.emit(Application.events.READY);
  }
  setEmojis(emojis) {
    this.emojis = emojis;
    const wrapper = document.getElementById("emojis");
    const p  = document.createElement("p");
    p.textContent = this.addBananas();
    wrapper.append(p);

  }

  addBananas() {
   const newArr = this.emojis.map(monkey => (monkey + this.banana))
      return newArr;
    };
  }
