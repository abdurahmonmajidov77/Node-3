const fs=require('fs')
fs.appendFile('file1.txt', 'hello', function(err){
    if(err) throw err;
    console.log('Saved!');
})
fs.open('file.txt', 'w', function(err){
    if(err) throw err;
    console.log('Opened!');
})
fs.writeFile('file.txt', 'hello world', function(err){
    if(err) throw err;
    console.log('Writed!');
})
fs.unlink('file1.txt', function(err){
    if(err) throw err;
    console.log('Deleted!');
})
fs.rename('file.txt', 'yangi.txt', function(err){
    if(err) throw err;
    console.log('Renamed!');
})