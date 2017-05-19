'use babel';

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
    let a = atom.config.get('core.ignoredNames');
    var defaultconfig = [".git",".hg",".DS_Store","._*",".svn","Thumbs.db","desktop.ini"];

    for(var n in defaultconfig){
      a.splice(a.indexOf(defaultconfig[n]),1);
    }

    console.log(typeof a);
    let s="<html>";
    for(var value in a){
      s += value+ ": " + a[value];
      s += "<br/>";
    }
    s+="</html>";
    return s;
  }


}
