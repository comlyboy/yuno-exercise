import 'package:flutter/material.dart';

import 'package:yuno_flutter/models/tab_model.dart';
import 'package:yuno_flutter/screens/dashboard_screen.dart';
import 'package:yuno_flutter/screens/transations_screen.dart';
import 'package:yuno_flutter/utils/constant.dart';
import 'package:yuno_flutter/utils/svg_icon.dart';

class BottomTabWidget extends StatefulWidget {
  final List<BottomTabModel> tabs;
  const BottomTabWidget({super.key, required this.tabs});

  @override
  State<BottomTabWidget> createState() => _BottomTabWidgetState();
}

class _BottomTabWidgetState extends State<BottomTabWidget> {
  int _selectedIndex = 0;

  static const List<Widget> _childWidgets = [
    DashboardScreen(),
    TransactionsScreen(),
  ];

  void _onItemTapped(int index) {
    setState(() {
      _selectedIndex = index;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(child: _childWidgets.elementAt(_selectedIndex)),
      bottomNavigationBar: BottomNavigationBar(
        iconSize: 24,
        selectedFontSize: 13,
        unselectedFontSize: 13,
        onTap: _onItemTapped,
        showUnselectedLabels: true,
        type: BottomNavigationBarType.fixed,
        currentIndex: _selectedIndex,
        enableFeedback: false,
        fixedColor: YunoConstant.textColor,
        unselectedItemColor: YunoConstant.muteColor,
        selectedLabelStyle: const TextStyle(
          color: YunoConstant.textColor,
          fontWeight: FontWeight.w400,
        ),
        unselectedLabelStyle: const TextStyle(
          color: YunoConstant.muteColor,
          fontWeight: FontWeight.w400,
        ),
        items: <BottomNavigationBarItem>[
          BottomNavigationBarItem(
              icon: YunoSvgIcons.home(),
              activeIcon: YunoSvgIcons.home(YunoConstant.primaryYellow),
              label: 'Home'),
          // BottomNavigationBarItem(
          //     icon: YunoSvgIcons.send(),
          //     activeIcon: YunoSvgIcons.send(\YunoCnstant.primaryYellow),
          //     label: 'Send'),
          //   BottomNavigationBarItem(
          //       icon: YunoSvgIcons.creditCard(),
          //       activeIcon: YunoSvgIcons.creditCard( YunoConstant.primaryYellow),
          //       label: 'Cards'),
          //   BottomNavigationBarItem(
          //       icon: YunoSvgIcons.wallet(),
          //       activeIcon: YunoSvgIcons.wallet(YunoConstant.primaryYellow),
          //       label: 'Pay'),
          //   BottomNavigationBarItem(
          //       icon: YunoSvgIcons.menu(),
          //       activeIcon: YunoSvgIcons.menu(YunoConstant.primaryYellow),
          //       label: 'More'),
          BottomNavigationBarItem(
              icon: YunoSvgIcons.wallet(),
              activeIcon: YunoSvgIcons.wallet(YunoConstant.primaryYellow),
              label: 'Transactions'),
        ],
      ),
    );
  }
}
