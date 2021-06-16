let editor;
window.onload = function () {
    editor = ace.edit("editor-container");
    editor.setTheme("ace/theme/terminal");
    editor.session.setMode("ace/mode/c_cpp");
}
let currlang=$("#lang").val();
$("#filename").attr("placeholder",`filename.${$("#lang").val()}`);

function changelanguage() {
    let language = $("#lang").val();
    if(currlang==language) return;
    currlang=language;
    // console.log(language);
    // console.log(currlang);
    if (language == 'c' || language == 'cpp') {
        editor.session.setMode("ace/mode/c_cpp");
        $("#filename").attr("placeholder",`filename.cpp`);
    }
    else if (language == 'py') {
        editor.session.setMode("ace/mode/python");
        $("#filename").attr("placeholder",`filename.py`);
    }
    else if (language == 'java') {
        editor.session.setMode("ace/mode/java");
        $("#filename").attr("placeholder",`filename.java`);
    }
    else if (language == 'php') {
        editor.session.setMode("ace/mode/php");
        $("#filename").attr("placeholder",`filename.php`);
    }
}



function renamefile(ele){
    let n = $(ele).val();
    let arr=n.split(".");
    if(arr.length==1 && n != ""){
        n=n+`.${currlang}`;
        $(".header").text(n);
        $(ele).val(n);
    }
    else if(arr.length>1 && arr[1]!=currlang){
        alert("Invalid extension!!!");
        $(ele).val('');
    }
    else if (n != "") {
        $(".header").text(n);
    }
}
$("#filename").blur(function (e) {
    renamefile(this);
});
$("#filename").keypress(function (e) {
    if (e.key == "Enter") {
        $(this).blur();
    }
});
