import 'package:flutter/material.dart';
import 'package:yuno_flutter/helpers/custom_widget_helper.dart';

import '../models/transaction_model.dart';

class TransactionCardWidget extends StatelessWidget {
  final TransactionModel transaction;

  const TransactionCardWidget({super.key, required this.transaction});

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(10),
      color: Colors.white,
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [YunoWidgetHelper.text(transaction.amount.toString())],
      ),
    );
  }
}
