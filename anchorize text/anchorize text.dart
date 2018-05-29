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

Source: http://www.codewars.com/kata/anchorize-me/train */

anchorize(text) {}

// test('Basic test!', () {
//   expect('<xmp>'+anchorize('hello http://world.com !')+'</xmp>',equals('<xmp>'+'hello <a href="http://world.com">http://world.com</a> !'+'</xmp>'));
// });
