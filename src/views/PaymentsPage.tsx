import { useState } from 'react';
import Navbar from '@/components/modules/Navbar';
import PaymentsTable from '@/components/modules/PaymentsTable';
import PaymentManual from '@/components/modules/PaymentManual';
import { Payment } from '@/types/Payment';
import { HandCoins, Receipt } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Sample data - replace with your actual data source
const samplePayments: Payment[] = [
    {
        id: '1',
        amount: 299.99,
        reason: 'Matrícula Semestre 2024-I',
        paymentDate: '2024-03-15',
        expirationDate: '2024-07-15',
        paymentMethod: 'digital',
        status: 'validated'
    },
    {
        id: '2',
        amount: 150.0,
        reason: 'Mensualidad Marzo',
        paymentDate: '2024-03-14',
        expirationDate: '2024-04-14',
        paymentMethod: 'cash',
        status: 'pending'
    },
    {
        id: '3',
        amount: 150.0,
        reason: 'Mensualidad Febrero',
        paymentDate: '2024-02-13',
        expirationDate: '2024-03-13',
        paymentMethod: 'digital',
        status: 'not_validated'
    }
];

function PaymentsPage() {
    const [isManualPaymentOpen, setIsManualPaymentOpen] = useState(false);

    const handleOpenManualPayment = () => setIsManualPaymentOpen(true);
    const handleCloseManualPayment = () => setIsManualPaymentOpen(false);

    const handleManualPaymentSubmit = (formData: any) => {
        console.log('Datos del pago manual:', formData);
        handleCloseManualPayment();
        // Aquí puedes agregar la lógica para enviar los datos a la API.
    };

    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-gray-100">
                <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                    <div className="px-4 py-6 sm:px-0">
                        <div className="flex items-center justify-between mb-8">
                            <div className="flex items-center gap-3">
                                <Receipt className="w-8 h-8 text-indigo-600" />
                                <h1 className="text-2xl font-bold text-gray-900">Registro de Pagos</h1>
                            </div>
                            <Button onClick={handleOpenManualPayment}>
                                <HandCoins height={40} width={40} />
                                Registrar Pago Manual
                            </Button>
                        </div>

                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                            <PaymentsTable payments={samplePayments} />
                        </div>
                    </div>
                </div>
                {isManualPaymentOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                        <div className="relative bg-white p-6 rounded-lg shadow-md w-full max-w-md h-[80vh] overflow-y-auto overflow-hidden">
                        <div className="flex flex-col items-start space-y-2">
                            <h2 className="text-xl font-semibold">Registro de Pago Manual</h2>
                            <p className="text-sm text-gray-600">
                                Completa los datos de tu transferencia o pago manual y mantente pendiente del estado de tu pago.
                            </p>
                            <br />
                        </div>
                            <Button
                                className="absolute top-2 right-2"
                                variant="outline"
                                onClick={handleCloseManualPayment}
                            >
                                Cerrar
                            </Button>
                            <PaymentManual
                                username="@jleon1227"
                                onSubmit={handleManualPaymentSubmit}
                            />
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

export default PaymentsPage;