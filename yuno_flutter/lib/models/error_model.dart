class ErrorModel {
  final int statusCode;
  final String message;
  const ErrorModel({
    required this.statusCode,
    required this.message,
  });
  factory ErrorModel.fromJson(Map<String, dynamic> jsonData) => ErrorModel(
        statusCode: jsonData['statusCode'],
        message: jsonData['message'],
      );
}
