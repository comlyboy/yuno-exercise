class TransactionModel {
  final String id;
  final DateTime date;
  final int amount;
  final String description;

  const TransactionModel({
    required this.id,
    required this.date,
    required this.amount,
    required this.description,
  });
}
