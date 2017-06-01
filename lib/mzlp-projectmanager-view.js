'use babel';

window.$ = window.jQuery = require('jquery');
const jsdom = require('jsdom');


export default class MzlpProjectmanagerView {

  constructor(serializedState) {
    // Create root element
    this.element = document.createElement('div');
    this.element.classList.add('mzlp-projectmanager');
    this.element.setAttribute('style','overflow-y:auto;width:150px;');

    // Create message element
    const message = document.createElement('div');

    message.innerHTML = this.getConfig();


    //message.textContent = "asd";
    message.classList.add('message');
    this.element.appendChild(message);
  }



  // Returns an object that can be retrieved when package is activated
  serialize() {}

  // Tear down any state and detach
  destroy() {
    this.element.remove();
  }

  getElement() {
    return this.element;
  }

  getConfig(){
    console.log("##getconfig##");
    let ignoredNames = atom.config.get('core.ignoredNames');
    var defaultconfig = [".git",".hg",".DS_Store","._*",".svn","Thumbs.db","desktop.ini"];

    for(var n in defaultconfig){
      ignoredNames.splice(ignoredNames.indexOf(defaultconfig[n]),1);
    }
    console.log(ignoredNames);

    let N_list = ["ARA","ARW","BAE","BGB","CAC","CAH","CZC","DAD","DUB","DUN","ENA","ENC","ENG","ENI","ENS","ENU","ENZ","FIF","FRC","FRF","GEC","GED","GRG","HAH","HEI","HII","HRH","HUH","ITI","JPJ","KOK","MNC","MNT","NON","PLP","PTB","PTP","ROR","RUR","SCS","SES","SLS","SPM","SPE","SPU","SRY","SWS","TRT","UKU","URP","WUC"];
    let s="";
    s+="<ul style='list-style:none; padding:10px;margin-top:30px;'>";
    for(let n in N_list){
      s += "<li style='padding: 5px 0px 5px 5px;margin-bottom: 5px;border-bottom: 1px solid #efefef; font-size: 12px;'><label><input type='checkbox' checked='checked' id="+N_list[n]+"> "+ N_list[n] +"</label><br/>";
    }
    s+="</ul>"
    return s;
  }
}
