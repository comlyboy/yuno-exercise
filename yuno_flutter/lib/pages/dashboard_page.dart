import 'package:flutter/material.dart';
import 'package:yuno_flutter/utils/constant.dart';

class DashboardPage extends StatefulWidget {
  const DashboardPage({super.key});

  @override
  State<DashboardPage> createState() => _DashboardPageState();
}

class _DashboardPageState extends State<DashboardPage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: YunoConstant.primaryNavyBlue,
      body: Column(
        children: [
          Container(
            padding: const EdgeInsets.all(10),
            child: const Column(
              children: [
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    Row(
                      children: [
                        CircleAvatar(child: Text('CO')),
                        SizedBox(width: 10),
                        Column(
                          children: [
                            Text(
                              'Hi Cornelius',
                              style: TextStyle(
                                  color: Colors.white,
                                  fontWeight: FontWeight.w400,
                                  fontSize: 14),
                            ),
                            Text(
                              '20.05.2024',
                              style: TextStyle(
                                  color: Colors.white,
                                  fontWeight: FontWeight.w400,
                                  fontSize: 10),
                            ),
                          ],
                        )
                      ],
                    ),
                    Row(
                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                      children: [
                        Text('AA', style: TextStyle(color: Colors.white)),
                        Text('BB', style: TextStyle(color: Colors.white)),
                      ],
                    ),
                  ],
                ),
              ],
            ),
          ),
          // Container(
          //   color: const Color.fromARGB(255, 255, 255, 255),
          //   child: const SizedBox(
          //     child:  Column(
          //       children: [Row()],
          //     ),
          //   ),
          // ),
        ],
      ),
    );
  }
}
