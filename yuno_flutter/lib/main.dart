import 'package:flutter/material.dart';

import 'package:yuno_flutter/widgets/bottom_tab_widget.dart';

void main() {
  runApp(const AppView());
}

class AppView extends StatelessWidget {
  const AppView({super.key});

  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
      debugShowCheckedModeBanner: false,
      home: BottomTabWidget(tabs: []),
    );
  }
}
