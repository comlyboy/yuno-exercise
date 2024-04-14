import 'package:flutter/material.dart';
import 'package:yuno_flutter/helpers/custom_widget_helper.dart';

class TransactionsPage extends StatefulWidget {
  const TransactionsPage({super.key});

  @override
  State<TransactionsPage> createState() => _TransactionsPageState();
}

class _TransactionsPageState extends State<TransactionsPage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: CustomWidgetHelper.appBar('Transactions'),
      body: const Center(
          // child: ListView.builder(
          //   itemCount: items.length,
          //   itemBuilder: (context, index) {
          //     return ListTile(
          //       title: Text('${items[index]}'),
          //     );
          //   },
          // ),
          ),
    );
  }
}
