function getLangList(){
    let Finder = require('fs-finder');
    let path = require('path');
    let dirpath;
    let baseDir = getRootPath();   //
    let lang=[];
    let directories;
    try {
        console.log(path.basename(baseDir));
        var fs = require('fs');
        if (fs.existsSync(baseDir+"/LP Tools/05. Program DB Builder/Input")) {
            console.log("../LP Tools 가 최상위")
            directories = Finder.in(baseDir+"/LP Tools/05. Program DB Builder/Input").findDirectories();
        }else if(fs.existsSync(baseDir+"/05. Program DB Builder/Input")) {
            console.log("/LP Tools 가 최상위")
            directories = Finder.in(baseDir + "/05. Program DB Builder/Input").findDirectories();
        }else{
            atom.notifications.addError("최상위 폴더를 LP Tools로 설정하여 주세요.")
        }

        for(let i in directories){
            dirpath= path.normalize(directories[i]);
            dirpath= path.basename(dirpath);
            lang.push(dirpath);
        }
        lang.sort();
        return lang;
    } catch (e) {
        console.log(e);
    } finally {

    }

}

function getRootPath(){
    //return "C:\\LP_Data\\IQS_18MY_Hybrid"
    return "C:\\LP_Data\\IQS_18MY_Hybrid\\LP Tools"
}

console.log(getLangList());