import 'package:flutter/material.dart';

class YunoText extends StatelessWidget {
  final String text;
  const YunoText({
    super.key,
    required this.text,
  });

  @override
  Widget build(BuildContext context) {
    return Text(text);
  }
}
