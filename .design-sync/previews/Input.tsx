import { Button, Input } from '@digiall/ui'

export const Basic = () => (
  <div className="max-w-sm p-6">
    <Input label="Razón social" placeholder="Empire Fitness S.A. de C.V." fullWidth />
  </div>
)

export const WithHint = () => (
  <div className="max-w-sm p-6">
    <Input
      label="RFC"
      placeholder="EFI250814ABC"
      hint="12 caracteres para persona moral, 13 para física."
      fullWidth
    />
  </div>
)

export const WithError = () => (
  <div className="max-w-sm p-6">
    <Input
      label="Correo de facturación"
      defaultValue="facturacion@"
      error="Formato de correo no válido."
      fullWidth
    />
  </div>
)

export const WithPrefix = () => (
  <div className="max-w-sm p-6">
    <Input label="Anticipo" prefix="$" defaultValue="12,400.00" fullWidth />
  </div>
)

export const FormRow = () => (
  <div className="max-w-md p-6">
    <div className="flex flex-col gap-4">
      <Input label="Contacto" placeholder="Nombre y apellido" fullWidth />
      <Input label="Teléfono" prefix="+52" placeholder="222 000 0000" fullWidth />
      <Input label="Cuenta" defaultValue="Bloqueada por cartera" disabled fullWidth />
      <Button fullWidth>Guardar cliente</Button>
    </div>
  </div>
)
