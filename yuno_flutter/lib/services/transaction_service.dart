import 'dart:convert';
import 'package:http/http.dart';

import 'package:yuno_flutter/models/transaction_model.dart';
import 'package:yuno_flutter/services/http_service.dart';

class TransactionService {
  Future<BalanceModel> getbalance() async {
    Response response = await HttpService.get('balance');
    if (response.statusCode > 399) {
      throw Exception('');
    }
    return BalanceModel.fromJson(jsonDecode(response.body));
  }

  Future<List<TransactionModel>> getTransactions() async {
    return [];
  }
}
