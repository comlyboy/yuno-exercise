import 'package:flutter/material.dart';

import 'package:yuno_flutter/utils/utility.dart';
import 'package:yuno_flutter/utils/constant.dart';
import 'package:yuno_flutter/models/transaction_model.dart';

class TransactionCardWidget extends StatelessWidget {
  final TransactionModel transaction;

  const TransactionCardWidget({super.key, required this.transaction});

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: const BoxDecoration(
        border: Border(
          bottom: BorderSide(color: YunoConstant.muteColor, width: .6),
        ),
      ),
      child: ListTile(
        dense: true,
        title: Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            Expanded(
              child: Text(
                transaction.description,
                style: const TextStyle(fontSize: 12),
                overflow: TextOverflow.ellipsis,
              ),
            ),
            const SizedBox(width: 10),
            Text(YunoUtilities.formatCurrency(transaction.amount)),
          ],
        ),
        subtitle: Text(
          transaction.date.toString(),
          style: const TextStyle(fontSize: 10, color: YunoConstant.muteColor),
        ),
      ),
    );
  }
}
