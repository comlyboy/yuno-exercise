import 'package:flutter/material.dart';

class YunoWidgetHelper {
  static AppBar appBar(String title, [TextStyle? style]) {
    return AppBar(backgroundColor: Colors.lightGreen,
      leading: const Icon(Icons.arrow_back_ios_new_sharp, size: 14),
      title: Text(title, style: const TextStyle(fontSize: 16)),
    );
  }

  static Text text(dynamic text, [TextStyle? style]) {
    return Text(text is String ? text : text.toString(), style: style);
  }
}
