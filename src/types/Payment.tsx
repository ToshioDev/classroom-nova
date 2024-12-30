export type PaymentMethod = 'cash' | 'digital';

export interface Payment {
  id: string;
  amount: number;
  reason: string;
  paymentDate: string;
  expirationDate: string;
  paymentMethod: PaymentMethod;
  status: 'validated' | 'not_validated' | 'pending';
}