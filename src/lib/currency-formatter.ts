/**
 * Currency formatting utilities for Philippine Peso (₱)
 */

export function formatPHP(amount: number): string {
  // Handle very small amounts with more precision
  if (amount < 1) {
    return `₱${amount.toFixed(2)}`;
  }
  
  // Handle normal amounts with standard formatting
  return new Intl.NumberFormat('en-PH', {
    style: 'currency',
    currency: 'PHP',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(amount).replace('₱', '₱');
}

export function formatPHPCompact(amount: number): string {
  if (amount < 1000) {
    return formatPHP(amount);
  }
  
  const suffixes = ['', 'K', 'M', 'B', 'T'];
  let suffixIndex = 0;
  let value = amount;
  
  while (value >= 1000 && suffixIndex < suffixes.length - 1) {
    value /= 1000;
    suffixIndex++;
  }
  
  return `₱${value.toFixed(suffixIndex > 0 ? 1 : 2)}${suffixes[suffixIndex]}`;
}

export function formatDigits(digits: number): string {
  return new Intl.NumberFormat('en-US').format(digits);
}

export function formatRate(rate: number, unit: string = 'min'): string {
  if (rate < 0.01) {
    return `0.00/${unit}`;
  }
  return `${rate.toFixed(2)}/${unit}`;
}