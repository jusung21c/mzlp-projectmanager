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
    this.checkIgnored();

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'mzlp-projectmanager:toggle': () => this.toggle()
    }));

    this.checkListener();



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
    if(this.modalPanel.isVisible()){
      this.modalPanel.hide();

    }else{
      this.checkIgnored();
      this.modalPanel.show()
    }


  },
  checkIgnored(){
    let ignoredNames = atom.config.get('core.ignoredNames');
    let N_list = this.getNList();

    for(let i in ignoredNames ){
      if(N_list.indexOf(ignoredNames[i])>0){
        $('#'+ignoredNames[i]).prop('checked',false);
      }
    }
  },

  getNList(){
          let N_list = ["ARA","ARW","BAE","BGB","CAC","CAH","CZC","DAD","DUB","DUN","ENA","ENC","ENG","ENI","ENS","ENU","ENZ","FIF","FRC","FRF","GEC","GED","GRG","HAH","HEI","HII","HRH","HUH","ITI","JPJ","KOK","MNC","MNT","NON","PLP","PTB","PTP","ROR","RUR","SCS","SES","SLS","SPM","SPE","SPU","SRY","SWS","TRT","UKU","URP","WUC"];
          N_list.sort();
          return N_list;
  },

  checkListener(){

          let N_list =this.getNList();

          for(let i in N_list){
            $('#'+N_list[i]).change(function(){
                if($('#'+N_list[i]).is(":checked")){
//                  alert("체크박스 누름");
                  let list = atom.config.get('core.ignoredNames');
                  let index = list.indexOf(N_list[i]);
                  list.splice(index,1);
                   console.log(list);
                  atom.config.set('core.ignoredNames',list);
                }else{
      //            alert("체크박스 해제");
                  let list = atom.config.get('core.ignoredNames');
                  list.push(N_list[i]);
                  atom.config.set('core.ignoredNames',list);
                }
            });
          }
  }





};
