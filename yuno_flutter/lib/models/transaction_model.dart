class TransactionModel {
  final String id;
  final DateTime date;
  final double amount;
  final String description;

  const TransactionModel({
    required this.id,
    required this.date,
    required this.amount,
    required this.description,
  });

  factory TransactionModel.fromJson(Map<String, dynamic> jsonData) =>
      TransactionModel(
        id: jsonData['id'],
        date: DateTime.parse(jsonData['date']),
        amount: jsonData['amount'].toDouble(),
        description: jsonData['description'],
      );
}

class BalanceModel {
  final double balance;
  BalanceModel({required this.balance});
  factory BalanceModel.fromJson(Map<String, dynamic> json) => BalanceModel(
        balance: json['balance'].toDouble(),
      );
}
