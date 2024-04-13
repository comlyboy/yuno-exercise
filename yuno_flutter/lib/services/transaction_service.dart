import 'dart:convert';

// import 'package:yuno_flutter/models/error_model.dart';
import 'package:yuno_flutter/services/http_service.dart';
import 'package:yuno_flutter/models/transaction_model.dart';

class TransactionService {
  Future<BalanceModel> getbalance() async {
    final response = await HttpService.get('balance');
    if (response.statusCode > 399) {
      throw Exception('');
      // return ErrorModel.fromJson(jsonDecode(response.body));
    }
    return BalanceModel.fromJson(jsonDecode(response.body));
  }

  Future<List<TransactionModel>> getTransactions() async {
    return [];
  }
}
