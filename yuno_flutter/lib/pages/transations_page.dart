import 'package:flutter/material.dart';
import 'package:yuno_flutter/helpers/custom_widget_helper.dart';
import 'package:yuno_flutter/widgets/custom_list_view.dart';
import 'package:yuno_flutter/widgets/transaction_card_widget.dart';

class TransactionsPage extends StatefulWidget {
  const TransactionsPage({super.key});

  @override
  State<TransactionsPage> createState() => _TransactionsPageState();
}

class _TransactionsPageState extends State<TransactionsPage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: YunoWidgetHelper.appBar('Transactions'),
      body: const Center(
        child: YunoListView(itemList: [],widget: TransactionCardWidget())
      ),
    );
  }
}
