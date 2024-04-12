import 'package:http/http.dart';

import 'package:yuno_flutter/models/transaction_model.dart';
import 'package:yuno_flutter/services/http_service.dart';

class TransactionService {
  Future<Map<String, dynamic>> getbalance() async {
    Response response = await HttpService.get('balance');
    response.body;
    // {'balance': 0, 'credit': 0, 'debit': 0};
  }

  Future<List<TransactionModel>> getTransactions() async {
    return [];
  }
}
