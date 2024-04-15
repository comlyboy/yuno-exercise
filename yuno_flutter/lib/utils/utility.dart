import 'dart:convert';

import 'package:intl/intl.dart';

class YunoUtilities {
  static TResponse decodeJson<TResponse>(String text) {
    return jsonDecode(text) as TResponse;
  }

  static String formatCurrency(double amount, [String currencySymbol = '₦']) {
    return '$currencySymbol${NumberFormat('#,##0.00', 'en_US').format(amount)}';
  }

  static String toReadableDate(DateTime date) {
    // final year = date.year;
    return date.year.toString();
  }
}
