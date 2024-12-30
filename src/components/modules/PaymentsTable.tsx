import React from 'react';
import { Payment } from '@/types/Payment';
import PaymentBadge from '@/components/customs/PaymentBadge';
import { CheckCircle2, Clock, XCircle } from 'lucide-react';

interface PaymentsTableProps {
  payments: Payment[];
}

const PaymentsTable: React.FC<PaymentsTableProps> = ({ payments }) => {
  const getStatusBadge = (status: Payment['status']) => {
    switch (status) {
      case 'validated':
        return (
          <span className="inline-flex items-center gap-1 text-green-700 bg-green-50 px-2 py-1 rounded-full">
            <CheckCircle2 className="w-4 h-4" />
            Validado
          </span>
        );
      case 'pending':
        return (
          <span className="inline-flex items-center gap-1 text-yellow-700 bg-yellow-50 px-2 py-1 rounded-full">
            <Clock className="w-4 h-4" />
            Pendiente
          </span>
        );
      case 'not_validated':
        return (
          <span className="inline-flex items-center gap-1 text-red-700 bg-red-50 px-2 py-1 rounded-full">
            <XCircle className="w-4 h-4" />
            No Validado
          </span>
        );
    }
  };

  return (
    <div className="overflow-x-auto bg-white rounded-lg shadow">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Monto
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Razón
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Fecha de Pago
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Fecha de Expiración
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Método de Pago
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Estado
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {payments.map((payment) => (
            <tr key={payment.id} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                ${payment.amount.toFixed(2)}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {payment.reason}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {new Date(payment.paymentDate).toLocaleDateString()}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {new Date(payment.expirationDate).toLocaleDateString()}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <PaymentBadge method={payment.paymentMethod} />
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {getStatusBadge(payment.status)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentsTable;