import 'package:flutter/material.dart';
import 'package:yuno_flutter/helpers/custom_widget_helper.dart';
import 'package:yuno_flutter/models/transaction_model.dart';
import 'package:yuno_flutter/services/transaction_service.dart';
import 'package:yuno_flutter/widgets/transaction_card_widget.dart';

class TransactionsPage extends StatefulWidget {
  const TransactionsPage({super.key});

  @override
  State<TransactionsPage> createState() => _TransactionsPageState();
}

class _TransactionsPageState extends State<TransactionsPage> {
  @override
  void initState() {
    super.initState();
    helpFetchTransaction(); // Call the method to fetch data when the component is mounted
  }

  Future<List<TransactionModel>> helpFetchTransaction() async {
    return await TransactionService.getTransactions();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color.fromRGBO(231, 231, 231, 1),
      appBar: YunoWidgetHelper.appBar('Transactions'),
      body: FutureBuilder<List<TransactionModel>>(
        initialData: const [],
        builder: (context, snapshot) {
          final transaction = snapshot.data ?? [];
          if (snapshot.connectionState == ConnectionState.waiting) {
            return YunoWidgetHelper.spinner();
          }
          if (snapshot.connectionState == ConnectionState.none &&
              !snapshot.hasData) {
            return Container();
          }
          return ListView.builder(
            itemCount: transaction.length,
            itemBuilder: (context, index) {
              return TransactionCardWidget(transaction: transaction[index]);
            },
          );
        },
        future: helpFetchTransaction(),
      ),
    );
  }
}
