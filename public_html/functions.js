
function clean(){
    var text = document.getElementById("txt").value;
    text = normalize(text);
    text = sanitize(text);
    alert(text);
}

function normalize(text){
    
    text = text.toUpperCase();
    text = text.replaceAll("Á", "A");
    text = text.replaceAll("É", "E");
    text = text.replaceAll("Í", "I");
    text = text.replaceAll("Ó", "O");
    text = text.replaceAll("Ú", "U");
    
    return text;
}

function sanitize(text){
    
    text = text.replaceAll("(", "");
    text = text.replaceAll(")", "");
    text = text.replaceAll("/", "");
    text = text.replaceAll("'", "");
    text = text.replaceAll("“", "");
    text = text.replaceAll("”", "");
    text = text.replaceAll(".", "");
    text = text.replaceAll("-", "");
    text = text.replaceAll("_", "");
    text = text.replaceAll(";", "");
    
    return text;
}