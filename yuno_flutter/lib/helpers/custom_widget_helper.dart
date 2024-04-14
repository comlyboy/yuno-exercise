import 'package:flutter/material.dart';

class CustomWidgetHelper {
  static AppBar appBar(String title, {TextStyle? style}) {
    return AppBar(
      leading: const Icon(Icons.arrow_back_ios_new_rounded),
      title: Text(title, style: const TextStyle(fontSize: 16)),
    );
  }

  
}
