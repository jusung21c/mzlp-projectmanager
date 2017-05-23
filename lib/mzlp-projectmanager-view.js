'use babel';

window.$ = window.jQuery = require('jquery');
const jsdom = require('jsdom');


export default class MzlpProjectmanagerView {

  constructor(serializedState) {
    // Create root element
    this.element = document.createElement('div');
    this.element.classList.add('mzlp-projectmanager');

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

    let N_list = ["ENU","FRC","KOK","PTB","SPM"];
    let s="";
    s+="<h1>Select Project</h1>"
    s+="<ul>";

    for(let n in N_list){
      s += "<li><label><input type='checkbox' checked='checked' id="+N_list[n]+">"+ N_list[n] +"</label><br/>";
    }
    s+="</ul>"
    return s;
  }
}
