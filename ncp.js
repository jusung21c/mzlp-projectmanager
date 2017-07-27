getLangList(){
    let Finder = require('fs-finder');
    let path = require('path');
    let dirpath;
    let baseDir = this.getRootPath();   //02. Index DB Builder/Input 폴더 안의 언어를 탐색한다.
    let lang=[];
    try {
        let directories = Finder.in(baseDir+"/05. Program DB Builder/Input").findDirectories();
        for(let i in directories){
            dirpath= path.normalize(directories[i]);
            dirpath= path.basename(dirpath);
            if(dirpath.length==3 && dirpath==dirpath.toUpperCase()){
                lang.push(dirpath);
            }
        }
        return lang;
    } catch (e) {
        console.log(e);
        alert(e.error);
    } finally {

    }

}

getRootPath(){
    var treeView;
    if(atom.packages.isPackageLoaded("tree-view")){
        treeView = atom.packages.getLoadedPackage("tree-view");
        treeView = treeView.mainModule.treeView;
        return treeView.list.querySelector('.project-root-header').children[0].getAttribute('data-path');
    }
}