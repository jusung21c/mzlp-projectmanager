'use babel';

import MzlpProjectmanagerView from './mzlp-projectmanager-view';
import { CompositeDisposable } from 'atom';

export default {

  mzlpProjectmanagerView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.mzlpProjectmanagerView = new MzlpProjectmanagerView(state.mzlpProjectmanagerViewState);
    console.log(this.mzlpProjectmanagerView.getElement());
    //this.modalPanel = atom.workspace.addModalPanel({
    this.modalPanel = atom.workspace.addLeftPanel({
      item: this.mzlpProjectmanagerView.getElement(),
      visible: true
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'mzlp-projectmanager:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.mzlpProjectmanagerView.destroy();
  },

  serialize() {
    return {
      mzlpProjectmanagerViewState: this.mzlpProjectmanagerView.serialize()
    };
  },

  toggle() {
    console.log('MzlpProjectmanager was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};
