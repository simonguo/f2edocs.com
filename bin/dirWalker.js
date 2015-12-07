var fs = require('fs');
var path = require('path');

/*

递归处理文件,文件夹

path 路径
floor 层数
handleFile 文件,文件夹处理函数

*/

function walk(path, floor, handleFile) {
    handleFile(path, floor);
    floor++;
    fs.readdir(path, function(err, files) {
        if (err) {
            console.log('read dir error');
            return;
        }

        files.forEach(function(item) {
            var tmpPath = path + '/' + item;
            fs.stat(tmpPath, function(err1, stats) {
                if (err1) {
                    console.log('stat error');
                } else {
                    if (stats.isDirectory()) {
                        walk(tmpPath, floor, handleFile);
                    } else {
                        handleFile(tmpPath, floor);
                    }
                }
            });
        });

    });
}


// 创建所有目录
var mkdirs = function(dirpath, mode, callback) {
    fs.exists(dirpath, function(exists) {
        if (exists) {
            callback(dirpath);
        } else {
            //尝试创建父目录，然后再创建当前目录
            mkdirs(path.dirname(dirpath), mode, function() {
                fs.mkdir(dirpath, mode, callback);
            });
        }
    });
};



exports.mkdirs = mkdirs;
exports.walk = walk;
