// import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';

import '../models/transaction_model.dart';

class TransactionCardWidget extends StatelessWidget {
  final TransactionModel transaction;

  const TransactionCardWidget({super.key, required this.transaction});

  @override
  Widget build(BuildContext context) {
    return Container(padding: const EdgeInsets.all(16.0));
  }
}
