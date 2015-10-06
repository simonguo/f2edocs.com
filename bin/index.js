var fs = require("fs");
var cheerio = require('cheerio');
var dirWalker = require('./dirWalker');
var iconv = require('iconv-lite');


var basePath = __dirname.substring(0, __dirname.lastIndexOf("/"));
var cachePath = basePath + "/_cache/css-md";

var files = [];

function collectFile(path) {
    if (path.substr(-4) != ".htm") {
        return;
    }
    files.push(path);
}


function writeFile(dirPath, fileName, data, callback) {



    dirPath = cachePath + "/" + dirPath + "/";
    fs.exists(dirPath, function(exists) {
        if (!exists) {
            dirWalker.mkdirs(dirPath);
        }

        var path = dirPath + fileName + ".md";
        fs.writeFile(path, data, {
            flag: 'w'
        }, function(err) {
            if (err) {
                console.error(err);
                return;
            }
            if (typeof callback === 'function') {
                callback();
            }
            console.log("create [" + path + "] success");
        });
    });


}


function handleFile(path, callback, isSummary) {

    if (!path) {
        return;
    }
    
    var mdData = [];
    var fileName = (path.substr(path.lastIndexOf("/") + 1).split("."))[0];
    var dirPath = path.substring(path.indexOf("css-handbook"), path.lastIndexOf("/"));

    var summary = "";


    function createItem(item) {

        var tab = "";
        var a = item.children("div").children("a");
        if (a.length) {
            for (var i = 0; i < a.parents("li").length - 1; i++) {
                tab += "\t";
            }
            var text = tab + "- [" + a.text() + "]" + "(" + a.attr("href").replace(".htm", ".md") + ")\n";
            summary += text;
        }
        if (item.children("ul").children("li").length) {
            //console.log(a.text()+"--"+item.find(">ul>li").length);
            item.children("ul").children("li").each(function() {
                createItem($(this));
            });
        }

    }

    fs.readFile(path, 'utf-8', function(err, data) {

        $ = cheerio.load(data, {
            decodeEntities: false
        });


        if (isSummary) {

            $("#dytree>li").each(function() {

                createItem($(this));
            });

            writeFile(dirPath, fileName, summary, callback);
            return;
        }
        mdData.push("#" + $("#title .tit").text());
        if ($("#syntax").length) {
            mdData.push("##语法");
            var syntax = "";
            $("#syntax .cont p").each(function() {
                //var b = $(this).find("strong").text();
                //var d = $(this).find(".defaultvalue").text();

                var str = $(this).text();
                //str = str.replace(b, "**" + b + "**");
                //str = str.replace(d, "*" + d + "*");
                $(this).find("ins").each(function() {
                    var ins = $(this).text();
                    str = str.replace(ins, ins + "<i class='fa fa-css3'></i>");
                });
                syntax += "- " + str + "\n";
            });
            mdData.push(syntax);
        }
        if ($("#value").length) {
            mdData.push("##取值");
            var value = "";
            $("#value dl dt").each(function(index) {

                var str = $(this).text();
                str += $("#value dl dd").eq(index).text();
                value += "- " + str + "\n";
            });
            mdData.push(value);
        }

        if ($("#intro").length) {
            mdData.push("##说明");
            var intro = $("#intro .cont>strong").text() + "\n\n";
            var str, gquote;
            if ($("#intro .cont li").length) {

                $("#intro .cont li").each(function() {

                    if ($(this).find(".gquote").length) {

                        gquote = $(this).find(".gquote").clone();
                        $(this).find(".gquote").remove();
                        str = $(this).text() + "\n";
                        str += gquote.find(".gquote-tit").text() + "\n\n";
                        str += "```css\n" + gquote.find(".gquote-cont").text() + "\n```\n\n";
                        str += ">" + gquote.find(".gquote-info").text() + "\n\n";

                        intro += "- " + str + "\n";

                    } else {
                        str = $(this).text();
                        intro += "- " + str + "\n";
                    }
                });
            } else {
                str = $("#intro .gquote>.gquote-tit").text() + "\n\n";
                str += "```css\n" + $("#intro .gquote>.gquote-cont").text() + "\n```\n\n";
                str += ">" + $("#intro .gquote>.gquote-info").text() + "\n";
            }

            mdData.push(intro);
        }

        if ($("#compatible").length) {
            mdData.push("##兼容性");
            var gData = $("#compatible .g-data");
            var gSupportInfo = "";
            mdData.push(gData.html());

            $("#compatible .support-info li").each(function() {
                var str = $(this).text();
                gSupportInfo += "- " + str + "\n";
            });
            mdData.push(gSupportInfo);

        }

        var example = $("#example textarea").html();
        if (example) {
            mdData.push("##示例");
            //str = str.replace(/<\/?[^>]*>/g, ''); //去除HTML tag

            example = example.replace(/<title\>[^>]*<\/title>/ig, "");
            example = example.replace(/<\/?meta[^>]*>/g, "");
            mdData.push("```html\n" + example + "\n```");
        }

        writeFile(dirPath, fileName, mdData.join("\n\n"), callback);

        //dirWalker.mkdirs(dirPath);
    });

}


function run(interval) {

    setTimeout(function() {
        var index = 0;

        var timer = setInterval(function() {
            if (index === files.length) {
                clearInterval(timer);
            }

            handleFile(files[index]);
            index++;
        }, 1000);

    }, interval);
}

//handleFile(basePath + "/_cache/css-handbook-master/index.htm", function() {}, true);

dirWalker.walk(basePath + "/_cache/css-handbook-master", 0, collectFile);
run(5000);
