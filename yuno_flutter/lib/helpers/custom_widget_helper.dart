import 'package:flutter/material.dart';

class YunoWidgetHelper {
  static AppBar appBar(String title, {TextStyle? style}) {
    return AppBar(
      leading: const Icon(Icons.arrow_back_ios_new_rounded),
      title: Text(title, style: const TextStyle(fontSize: 16)),
    );
  }

  static Text text(String text, {TextStyle? style}) {
    // final double = style?.fontSize ?? 30;
    return Text(text, style: style);
  }


}
