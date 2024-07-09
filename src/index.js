// index.js (or whatever the main file is named)

// Import CSS as a string
import "./index.css";

class AlignmentBlockTune {
  static get DEFAULT_ALIGNMENT() {
    return "left";
  }

  static get isTune() {
    return true;
  }

  getAlignment() {
    if (
      this.settings?.blocks &&
      this.settings.blocks.hasOwnProperty(this.block.name)
    ) {
      return this.settings.blocks[this.block.name];
    }
    if (this.settings?.default) {
      return this.settings.default;
    }
    return AlignmentBlockTune.DEFAULT_ALIGNMENT;
  }

  constructor({ api, data, config, block }) {
    this.api = api;
    this.block = block;
    this.settings = config;
    this.data = data || { alignment: this.getAlignment() };
    this._CSS = {
      alignment: {
        left: "ce-tune-alignment--left",
        center: "ce-tune-alignment--center",
        right: "ce-tune-alignment--right",
        justify: "ce-tune-alignment--justify",
      },
    };
  }

  wrap(blockContent) {
    this.wrapper = document.createElement("div");
    this.wrapper.classList.toggle(this._CSS.alignment[this.data.alignment]);
    this.wrapper.append(blockContent);
    return this.wrapper;
  }

  setAlignment(alignment) {
    this.data = { alignment };

    this.wrapper.classList.remove(...Object.values(this._CSS.alignment));

    this.wrapper.classList.toggle(
      this._CSS.alignment[alignment],
      alignment === this.data.alignment
    );
  }

  render() {
    const self = this;

    return [
      {
        name: "left",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" id="Layer" enable-background="new 0 0 64 64" height="20" viewBox="0 0 64 64" width="20"><path d="m54 8h-44c-1.104 0-2 .896-2 2s.896 2 2 2h44c1.104 0 2-.896 2-2s-.896-2-2-2z"/><path d="m54 52h-44c-1.104 0-2 .896-2 2s.896 2 2 2h44c1.104 0 2-.896 2-2s-.896-2-2-2z"/><path d="m10 23h28c1.104 0 2-.896 2-2s-.896-2-2-2h-28c-1.104 0-2 .896-2 2s.896 2 2 2z"/><path d="m54 30h-44c-1.104 0-2 .896-2 2s.896 2 2 2h44c1.104 0 2-.896 2-2s-.896-2-2-2z"/><path d="m10 45h28c1.104 0 2-.896 2-2s-.896-2-2-2h-28c-1.104 0-2 .896-2 2s.896 2 2 2z"/></svg>`,
        label: self.api.i18n.t("Align left"),
        isActive: self.data.alignment === "left",
        closeOnActivate: true,
        onActivate: (item, e) => {
          self.setAlignment(item.name);
        },
      },
      {
        name: "center",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" id="Layer" enable-background="new 0 0 64 64" height="20" viewBox="0 0 64 64" width="20"><path d="m54 8h-44c-1.104 0-2 .896-2 2s.896 2 2 2h44c1.104 0 2-.896 2-2s-.896-2-2-2z"/><path d="m54 52h-44c-1.104 0-2 .896-2 2s.896 2 2 2h44c1.104 0 2-.896 2-2s-.896-2-2-2z"/><path d="m46 23c1.104 0 2-.896 2-2s-.896-2-2-2h-28c-1.104 0-2 .896-2 2s.896 2 2 2z"/><path d="m54 30h-44c-1.104 0-2 .896-2 2s.896 2 2 2h44c1.104 0 2-.896 2-2s-.896-2-2-2z"/><path d="m46 45c1.104 0 2-.896 2-2s-.896-2-2-2h-28c-1.104 0-2 .896-2-2s.896 2 2 2z"/></svg>`,
        label: self.api.i18n.t("Align center"),
        isActive: self.data.alignment === "center",
        closeOnActivate: true,
        onActivate: (item, e) => {
          self.setAlignment(item.name);
        },
      },
      {
        name: "right",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" id="Layer" enable-background="new 0 0 64 64" height="20" viewBox="0 0 64 64" width="20"><path d="m54 8h-44c-1.104 0-2 .896-2 2s.896 2 2 2h44c1.104 0 2-.896 2-2s-.896-2-2-2z"/><path d="m54 52h-44c-1.104 0-2 .896-2 2s.896 2 2 2h44c1.104 0 2-.896 2-2s-.896-2-2-2z"/><path d="m54 19h-28c-1.104 0-2 .896-2 2s.896 2 2 2h28c1.104 0 2-.896 2-2s-.896-2-2-2z"/><path d="m54 30h-44c-1.104 0-2 .896-2 2s.896 2 2 2h44c1.104 0 2-.896 2-2s-.896-2-2-2z"/><path d="m54 41h-28c-1.104 0-2 .896-2 2s.896 2 2 2h28c1.104 0 2-.896 2-2s-.896-2-2-2z"/></svg>`,
        label: self.api.i18n.t("Align right"),
        isActive: self.data.alignment === "right",
        closeOnActivate: true,
        onActivate: (item, e) => {
          self.setAlignment(item.name);
        },
      },
    ];
  }

  save() {
    return this.data;
  }
}

export default AlignmentBlockTune;
