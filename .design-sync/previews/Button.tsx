import { Button } from '@digiall/ui'

export const Variants = () => (
  <div className="flex flex-wrap items-center gap-3 p-6">
    <Button variant="primary">Generar cotización</Button>
    <Button variant="secondary">Guardar borrador</Button>
    <Button variant="ghost">Cancelar</Button>
    <Button variant="danger">Eliminar registro</Button>
  </div>
)

export const Sizes = () => (
  <div className="flex flex-wrap items-center gap-3 p-6">
    <Button size="sm">Pequeño</Button>
    <Button size="md">Mediano</Button>
    <Button size="lg">Grande</Button>
  </div>
)

export const States = () => (
  <div className="flex flex-wrap items-center gap-3 p-6">
    <Button>Normal</Button>
    <Button loading>Sincronizando</Button>
    <Button disabled>Deshabilitado</Button>
    <Button variant="secondary" disabled>
      Sin permisos
    </Button>
  </div>
)

export const FullWidth = () => (
  <div className="max-w-sm p-6">
    <Button fullWidth size="lg">
      Iniciar sesión
    </Button>
  </div>
)
