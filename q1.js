//store
function store(arrays) {
    var res = "";
    if (Array.isArray(arrays)) {
        var newline = "";
        arrays.forEach((item, index) => {
            res += newline;
            var semicolon = "";
            Object.entries(item).forEach(([key, value]) => {
                res += semicolon + key + "=" + value;
                semicolon = ";";
            })
            newline = "\\n";
        });
    }
    return res;
}
//load
function load(text) {
    var a = [];
    var arrays = text.split('\n');
    if (Array.isArray(arrays)) {
        arrays.forEach((items, index) => {
            var item = items.split(';');
            var obj = {};
            item.forEach(str => {
                var kv = str.split('=');
                obj[kv[0]] = kv[1];
            });
            a.splice(index, 0, obj);
        })
    }
    return a
}

//contoh pemakaian 
var a = [{
    "key1": "value1",
    "key2": "value2"
}, {
    "keyA": "valueA"
}];
var text = "key1=value1;key2=value2\nkeyA=valueA";
console.log('text=store(a) = ' + store(a) + '\n');
console.log('a=load(text) = ' + JSON.stringify(load(text)) + '\n');