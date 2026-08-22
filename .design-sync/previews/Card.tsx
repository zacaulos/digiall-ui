import { Badge, Button, Card } from '@digiall/ui'

export const Tones = () => (
  <div className="grid gap-4 p-6 md:grid-cols-3">
    <Card eyebrow="Fase 01" title="Descubrimiento" note="Cerrada el 12 de mayo.">
      <p className="text-sm text-muted">
        Levantamiento de procesos en almacén, compras y facturación.
      </p>
    </Card>
    <Card tone="surface" eyebrow="Fase 02" title="Configuración" note="En curso.">
      <p className="text-sm text-muted">
        Parametrización de Odoo, catálogos y reglas de inventario.
      </p>
    </Card>
    <Card tone="dark" eyebrow="Fase 03" title="Salida a producción" note="Programada para agosto.">
      <p className="text-sm text-plum-200">
        Migración de saldos, capacitación y acompañamiento de dos semanas.
      </p>
    </Card>
  </div>
)

export const WithActions = () => (
  <div className="max-w-md p-6">
    <Card eyebrow="Contrato · MSA-2026-014" title="Soporte mensual">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-2xl font-semibold">$24,800 MXN</p>
          <p className="text-sm text-muted">Renueva el 1 de septiembre</p>
        </div>
        <Badge tone="accent" dot>
          Vigente
        </Badge>
      </div>
      <div className="mt-4 flex gap-2">
        <Button size="sm">Renovar</Button>
        <Button size="sm" variant="ghost">
          Ver detalle
        </Button>
      </div>
    </Card>
  </div>
)

export const Flush = () => (
  <div className="max-w-md p-6">
    <Card flush eyebrow="Cobertura" note="Actualizado hace 4 minutos.">
      <div className="border-y border-line bg-surface px-5 py-8 text-center">
        <p className="font-mono text-4xl text-plum">98.4%</p>
        <p className="mt-1 text-sm text-muted">Tickets resueltos dentro de SLA</p>
      </div>
    </Card>
  </div>
)
