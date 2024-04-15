import 'package:flutter/material.dart';

class YunoWidgetHelper {
  static AppBar appBar(String title, [TextStyle? style]) {
    return AppBar(
      backgroundColor: Colors.transparent,
      leading: const Icon(Icons.arrow_back_ios_new_sharp, size: 14),
      title: Text(title, style: const TextStyle(fontSize: 16)),
    );
  }

  static Text text(dynamic text, [TextStyle? style]) {
    return Text(text is String ? text : text.toString(), style: style);
  }

  static Container spinner([Color? color, Color? background]) {
    return Container(
      height: double.infinity,
      color: background ?? Colors.transparent,
      child: const Flex(
        direction: Axis.horizontal,
        mainAxisAlignment: MainAxisAlignment.center,
        crossAxisAlignment: CrossAxisAlignment.center,
        children: [
          CircularProgressIndicator(
            strokeWidth: 2,
            color: Color.fromARGB(255, 243, 195, 19),
          )
        ],
      ),
    );
  }
}
