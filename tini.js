var fs = require("fs")
var paths = require("path")
 
var root = paths.join(__dirname+'/daizhuanhuan')
 
const tinify = require("tinify");
tinify.key = "你的api_KEY,注册网站获取";

readDirSync(root)

function readDirSync(path){
	var pa = fs.readdirSync(path);
	pa.forEach(function(ele,index){
		var info = fs.statSync(path+"/"+ele)	
		if(info.isDirectory()){
        
			console.log("dir: "+ele)
            readDirSync(path+"/"+ele);
            if (!fs.existsSync("./zhuanhou/"+ele)) {
                fs.mkdirSync("./zhuanhou/"+ele);
            }
		}else{
            console.log("file: "+ele)
            console.log(path+"/"+ele)
            
            var io = paths.resolve(path+"/"+ele, '..')
            console.log(io.replace("daizhuanhuan","zhuanhou")+"/"+ele)
            console.log(io)
            const source = tinify.fromFile(path+"/"+ele);
            source.toFile(io.replace("daizhuanhuan","zhuanhou")+"/"+ele);
          
		}	
	})
}


