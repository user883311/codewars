/* Parse the text and replace Globally url with corresponding html syntax.

Supported protocols:
http
https
ftp
ftps
file
smb

NOTE: Ideal will be with Regex

Input: 
'hello http://world.com !'

Output: 
'hello <a href="http://world.com">http://world.com</a> !' 

Source: http://www.codewars.com/kata/anchorize-me/train/javascript*/

function anchorize(text) {
    var r = new RegExp(/(http|https|ftp|ftps|file|smb):\/\/\w*\.\w+(\/\w*)*/);
    return text.replace(r, "<a href='$&'>$&</a> !")
}

console.log(anchorize("hello http://world.com"));
console.log("hello <a href='http://world.com'>http://world.com</a> !");
console.log(anchorize("hello http://world.com")==="hello <a href='http://world.com'>http://world.com</a> !");

// Test.assertEquals('<xmp>'+anchorize('hello http://world.com !')+'</xmp>',
// '<xmp>'+'hello <a href="http://world.com">http://world.com</a> !'+'</xmp>');