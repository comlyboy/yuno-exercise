import 'package:flutter/material.dart';

class BottomTabModel {
  final String id;
  final String name;
  final Widget icon;
  final Widget activeIcon;
  final dynamic component;

  const BottomTabModel({
    required this.id,
    required this.name,
    required this.icon,
    required this.component,
    required this.activeIcon,
  });

}
