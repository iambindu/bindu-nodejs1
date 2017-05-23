/*var fs=require("fs")     <-- read file -->
var filepath='./textFile.txt';
var data=fs.readFile(filepath,function(err,data){
	if(err){
		console.log(err)
	}
	console.log(data.toString())

})
console.log("Done Reading!!!")*/
/*fs=require("fs")    

var data=fs.writeFile('./index.txt','bindhuu',function(err,data){
	if(err){
		console.log(err)
	}
	console.log(data)
})
	*/
/*var fs=require("fs")    
var filePath='./textFile.txt';
var data=fs.readFileSync(filePath)
fs.writeFileSync('bindu.txt',data)
*/
/*var fs=require("fs")
fs.unlink('indexdelete.txt', function (err) {
  if (err) throw err;
  console.log('File deleted!');
});*/