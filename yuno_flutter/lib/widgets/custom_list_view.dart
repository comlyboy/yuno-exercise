import 'package:flutter/material.dart';

class YunoListView extends StatelessWidget {
  final List<dynamic> itemList;
  final Widget widget;
  const YunoListView({super.key, required this.itemList, required this.widget});

  @override
  Widget build(BuildContext context) {
    return ListView.builder(
      itemCount: itemList.length,
      itemBuilder: (context, index) {
        return widget;
      },
    );
  }
}
