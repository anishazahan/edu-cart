export function formatAmountForStripe(amount, currency) {
  let numberFormat = new Intl.NumberFormat(["en-US"], {
    // Changed locale to en-US for USD
    style: "currency",
    currency: currency,
    currencyDisplay: "symbol",
  });

  const parts = numberFormat.formatToParts(amount);

  let zeroDecimalCurrency = false;

  for (let part of parts) {
    if (part.type === "decimal") {
      zeroDecimalCurrency = false; // USD and similar currencies have decimal parts
    }
  }

  // If the currency uses decimals (like USD), multiply by 100 to convert to smallest unit (cents)
  return zeroDecimalCurrency ? amount : Math.round(amount * 100);
}
