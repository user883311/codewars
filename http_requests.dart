import 'dart:convert';
import 'package:http/http.dart' as http;

main() async {

  // The http package can be used to make HTTP requests using dart:io
  // or from the browser via XMLHttpRequests
  var query = 'dartlang';
  var requestUrl = 'https://api.publicapis.org/entries';
  var response = await http.get(requestUrl);

  // decode the reponse into a Map
  print(response.body);
  var jsonResponse = JSON.decode(response.body);
  print(jsonResponse);
}
