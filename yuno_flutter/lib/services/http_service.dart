import 'package:http/http.dart' as http;

import 'package:yuno_flutter/utils/constant.dart';

class HttpService {
  static Future<http.Response> post(String endpoint, dynamic body) async {
    return await http.post(_parseUrl(endpoint), body: body);
  }

  static Future<http.Response> get(String endpoint) async {
    return await http.get(_parseUrl(endpoint));
  }

  static Future<http.Response> patch(String endpoint, dynamic body) async {
    return await http.patch(_parseUrl(endpoint), body: body);
  }

  static Future<http.Response> delete(String endpoint) async {
    return await http.delete(_parseUrl(endpoint));
  }

  static Uri _parseUrl(String url) {
    return Uri.parse(YunoConstant.apiUrl + url);
  }
}
