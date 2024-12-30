export interface Payment {
  id: string;
  amount: number;
  reason: string;
  paymentDate: string; // or Date if you prefer to work with Date objects
  expirationDate: string; // or Date if you prefer to work with Date objects
  paymentMethod: string;
  status: 'validated' | 'pending' | 'not_validated'; // Assuming these are the only statuses
}
