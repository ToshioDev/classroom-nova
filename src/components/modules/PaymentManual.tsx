import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

// Simulación de datos de API
const deudas = [
  { id: 1, concepto: 'Matrícula', monto: 500 },
  { id: 2, concepto: 'Mensualidad Enero', monto: 300 },
  { id: 3, concepto: 'Mensualidad Febrero', monto: 300 },
]

const paises = ['México', 'Colombia', 'Perú']

const bancosPorPais = {
  'México': ['BBVA', 'Santander', 'Banorte'],
  'Colombia': ['Bancolombia', 'Davivienda', 'Banco de Bogotá'],
  'Perú': ['BCP', 'Interbank', 'BBVA Perú'],
}

const monedas = {
  'México': { codigo: 'MXN', simbolo: '$' },
  'Colombia': { codigo: 'COP', simbolo: '$' },
  'Perú': { codigo: 'PEN', simbolo: 'S/' },
}

const dolar = { codigo: 'USD', simbolo: '$' }

interface FormularioPagoManualProps {
  username: string;
  onSubmit: (data: any) => void;
}

export default function FormularioPagoManual({ username, onSubmit }: FormularioPagoManualProps) {
  const [formData, setFormData] = useState({
    fechaPago: '',
    montoPagado: '',
    pais: '',
    moneda: '',
    banco: '',
    beneficiario: '',
    numeroOperacion: '',
    imagenComprobante: null as File | null,
    deudaId: '',
    codigoMoneda: '',
    simboloMoneda: '',
  })

  const [bancos, setBancos] = useState<string[]>([])

  useEffect(() => {
    if (formData.pais) {
      setBancos(bancosPorPais[formData.pais as keyof typeof bancosPorPais])
      const monedaLocal = monedas[formData.pais as keyof typeof monedas]
      setFormData(prev => ({ 
        ...prev, 
        codigoMoneda: monedaLocal.codigo, 
        simboloMoneda: monedaLocal.simbolo 
      }))
    }
  }, [formData.pais])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, imagenComprobante: e.target.files![0] }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(formData)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="username">Usuario</Label>
            <Input id="username" value={username} disabled />
          </div>
          
          <div>
            <Label htmlFor="fechaPago">Fecha de Pago</Label>
            <Input
              id="fechaPago"
              name="fechaPago"
              type="date"
              value={formData.fechaPago}
              onChange={handleInputChange}
              required
            />
          </div>
          
          <div>
            <Label htmlFor="montoPagado">Monto Pagado</Label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2">
                {formData.simboloMoneda}
              </span>
              <Input
                id="montoPagado"
                name="montoPagado"
                type="number"
                value={formData.montoPagado}
                onChange={handleInputChange}
                className="pl-7"
                required
              />
            </div>
          </div>
          
          <div>
            <Label htmlFor="pais">País</Label>
            <Select onValueChange={(value) => handleSelectChange('pais', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Selecciona un país" />
              </SelectTrigger>
              <SelectContent>
                {paises.map((pais) => (
                  <SelectItem key={pais} value={pais}>{pais}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <Label htmlFor="moneda">Moneda</Label>
            <Select 
              value={formData.codigoMoneda} 
              onValueChange={(value) => {
                const [codigo, simbolo] = value.split('|')
                handleSelectChange('codigoMoneda', codigo)
                handleSelectChange('simboloMoneda', simbolo)
              }}
            >
              <SelectTrigger>
                <SelectValue placeholder="Selecciona una moneda" />
              </SelectTrigger>
              <SelectContent>
                {formData.pais && (
                  <SelectItem 
                    value={`${monedas[formData.pais as keyof typeof monedas].codigo}|${monedas[formData.pais as keyof typeof monedas].simbolo}`}
                  >
                    {monedas[formData.pais as keyof typeof monedas].codigo} ({monedas[formData.pais as keyof typeof monedas].simbolo})
                  </SelectItem>
                )}
                <SelectItem value={`${dolar.codigo}|${dolar.simbolo}`}>
                  {dolar.codigo} ({dolar.simbolo})
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <Label htmlFor="banco">Banco</Label>
            <Select onValueChange={(value) => handleSelectChange('banco', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Selecciona un banco" />
              </SelectTrigger>
              <SelectContent>
                {bancos.map((banco) => (
                  <SelectItem key={banco} value={banco}>{banco}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <Label htmlFor="beneficiario">Beneficiario</Label>
            <Input
              id="beneficiario"
              name="beneficiario"
              value={formData.beneficiario}
              onChange={handleInputChange}
              required
            />
          </div>
          
          <div>
            <Label htmlFor="numeroOperacion">Número de Operación</Label>
            <Input
              id="numeroOperacion"
              name="numeroOperacion"
              value={formData.numeroOperacion}
              onChange={handleInputChange}
              required
            />
          </div>
          
          <div>
            <Label htmlFor="imagenComprobante">Comprobante de Pago</Label>
            <Input
              id="imagenComprobante"
              name="imagenComprobante"
              type="file"
              onChange={handleFileChange}
              required
            />
          </div>
          
          <div>
            <Label htmlFor="deudaId">Deuda a Pagar</Label>
            <Select onValueChange={(value) => handleSelectChange('deudaId', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Selecciona una deuda" />
              </SelectTrigger>
              <SelectContent>
                {deudas.map((deuda) => (
                  <SelectItem key={deuda.id} value={deuda.id.toString()}>
                    {deuda.concepto} - {deuda.monto}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <Button type="submit">Registrar Pago</Button>
        </form>
  )
}
