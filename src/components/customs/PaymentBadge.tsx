import React from 'react';
import { PaymentMethod } from '@/types/Payment';
import { Wallet, CreditCard } from 'lucide-react';

interface PaymentBadgeProps {
  method: PaymentMethod;
}

const PaymentBadge: React.FC<PaymentBadgeProps> = ({ method }) => {
  const getBadgeContent = () => {
    switch (method) {
      case 'cash':
        return {
          icon: <Wallet className="w-4 h-4" />,
          text: 'Efectivo',
          className: 'bg-yellow-100 text-yellow-800'
        };
      case 'digital':
        return {
          icon: <CreditCard className="w-4 h-4" />,
          text: 'Digital',
          className: 'bg-blue-100 text-blue-800'
        };
    }
  };

  const { icon, text, className } = getBadgeContent();

  return (
    <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-sm font-medium ${className}`}>
      {icon}
      {text}
    </span>
  );
};

export default PaymentBadge;