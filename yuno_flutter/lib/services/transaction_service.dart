import 'dart:convert';

import 'package:yuno_flutter/services/http_service.dart';
import 'package:yuno_flutter/models/transaction_model.dart';
import 'package:yuno_flutter/utils/utility.dart';

class TransactionService {
  static Future<BalanceModel> getbalance() async {
    final response = await HttpService.get('balance');
    if (response.statusCode > 399) {
      throw Exception('Error occured!');
    }
    return BalanceModel.fromJson(jsonDecode(response.body)['data']);
  }

  static Future<List<TransactionModel>> getTransactions() async {
    final response = await HttpService.get('transaction');
    if (response.statusCode > 399) {
      throw Exception('An error occured!');
    }
    final transactionlist = YunoUtilities.decodeJson(response.body)['data']
        ['transactions'] as List<dynamic>;
    return transactionlist
        .map((transaction) => TransactionModel.fromJson(transaction))
        .toList();
  }
}
