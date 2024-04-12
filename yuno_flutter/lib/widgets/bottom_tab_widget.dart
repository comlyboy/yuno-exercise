import 'package:flutter/material.dart';
import 'package:yuno_flutter/models/tab_model.dart';

import 'package:yuno_flutter/pages/dashboard_page.dart';
import 'package:yuno_flutter/pages/transations_page.dart';

class BottomTabWidget extends StatefulWidget {
  final List<BottomTabModel> tabs;
  const BottomTabWidget({super.key, required this.tabs});

  @override
  State<BottomTabWidget> createState() => _BottomTabWidgetState();
}

class _BottomTabWidgetState extends State<BottomTabWidget> {
  int _selectedIndex = 0;
  // static const TextStyle optionStyle = TextStyle(
  //   fontSize: 30,
  //   fontWeight: FontWeight.bold,
  // );
  static const List<Widget> _widgetOptions = [
    DashboardPage(),
    TransactionsPage(),
    // Text('Index 0: Dashboard', style: optionStyle),
    // Text('Index 1: Transactions', style: optionStyle),
    // Text('Index 2: Report', style: optionStyle),
  ];

  void _onItemTapped(int index) {
    setState(() {
      _selectedIndex = index;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(child: _widgetOptions.elementAt(_selectedIndex)),
      bottomNavigationBar: BottomNavigationBar(
        items: const <BottomNavigationBarItem>[
          BottomNavigationBarItem(
              icon: Icon(Icons.dashboard), label: 'Dashboard'),
          BottomNavigationBarItem(
              icon: Icon(Icons.business), label: 'Transactions')
        ],
        currentIndex: _selectedIndex,
        selectedItemColor: Colors.amber[800],
        onTap: _onItemTapped,
      ),
    );
  }
}
