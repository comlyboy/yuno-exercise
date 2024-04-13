import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';

class SvgIconWidget extends StatelessWidget {
  final String iconName;
  final double height;
  final double width;

  const SvgIconWidget({
    super.key,
    required this.iconName,
    required this.height,
    required this.width,
  });

  @override
  Widget build(BuildContext context) {
    return Center(
      child: SvgPicture.string(iconName, width: height, height: height),
    );
  }
}
