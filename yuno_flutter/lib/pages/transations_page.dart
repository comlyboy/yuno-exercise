import 'package:flutter/material.dart';
import 'package:yuno_flutter/helpers/custom_widget_helper.dart';
import 'package:yuno_flutter/models/transaction_model.dart';
import 'package:yuno_flutter/services/transaction_service.dart';
import 'package:yuno_flutter/utils/constant.dart';
import 'package:yuno_flutter/widgets/transaction_card_widget.dart';

class TransactionsPage extends StatefulWidget {
  const TransactionsPage({super.key});

  @override
  State<TransactionsPage> createState() => _TransactionsPageState();
}

class _TransactionsPageState extends State<TransactionsPage> {
  List<TransactionModel> _transactions = [];

  @override
  void initState() {
    super.initState();
    helpFetchTransation(); // Call the method to fetch data when the component is mounted
  }


  Future<void> helpFetchTransation() async {
    final transactions = await TransactionService.getTransactions();
    setState(() {
      _transactions = transactions;
    });
  }



  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: YunoConstant.backgroundColor,
      appBar: YunoWidgetHelper.appBar('Transactions'),
      body: ListView.builder(
          itemCount: _transactions.length,
          itemBuilder: (context, index) {
            return TransactionCardWidget(transaction: _transactions[index]);
          }),
    );
  }


}
