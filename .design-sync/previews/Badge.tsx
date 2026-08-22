import { Badge } from '@digiall/ui'

export const Tones = () => (
  <div className="flex flex-wrap items-center gap-3 p-6">
    <Badge>Borrador</Badge>
    <Badge tone="plum">Interno</Badge>
    <Badge tone="accent">Aprobado</Badge>
    <Badge tone="warn">Por vencer</Badge>
    <Badge tone="danger">Rechazado</Badge>
  </div>
)

export const WithDot = () => (
  <div className="flex flex-wrap items-center gap-3 p-6">
    <Badge tone="accent" dot>
      En línea
    </Badge>
    <Badge tone="warn" dot>
      Degradado
    </Badge>
    <Badge tone="danger" dot>
      Caído
    </Badge>
    <Badge dot>Sin datos</Badge>
  </div>
)

export const InContext = () => (
  <div className="max-w-sm p-6">
    <div className="flex items-center justify-between rounded-[14px] border border-line p-4">
      <div>
        <p className="font-display font-semibold">Servidor Odoo · producción</p>
        <p className="text-sm text-muted">odoo19.digiall.mx</p>
      </div>
      <Badge tone="accent" dot>
        Activo
      </Badge>
    </div>
  </div>
)
