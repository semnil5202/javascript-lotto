import { ERROR } from '../../constant/index.js';
import lottoStore from '../../store/lottoStore.js';

export default class Component {
  $target;
  lottoStore = lottoStore;

  constructor($target) {
    if (new.target === Component) {
      throw new Error(ERROR.CANNOT_CREATE_INSTANCE);
    }
    this.$target = $target;

    this.render();
  }

  mount() {}

  addEvent(eventType, callback, $target = this.$target) {
    return $target.addEventListener(eventType, callback);
  }

  render() {
    this.template() && (this.$target.innerHTML = this.template());
    this.mount();
  }

  template() {
    return '';
  }
}
