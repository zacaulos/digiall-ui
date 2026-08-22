import { Button, SectionHeader } from '@digiall/ui'

export const PageOpener = () => (
  <div className="max-w-3xl p-6">
    <SectionHeader
      level="page"
      eyebrow="Implementación · Odoo 19"
      title="Migración Empire Fitness"
      lead="Consolidamos membresías, punto de venta y facturación CFDI en una sola instancia. El corte de datos históricos es el 31 de julio; todo lo anterior se archiva en modo lectura."
    />
  </div>
)

export const SectionWithActions = () => (
  <div className="max-w-3xl p-6">
    <SectionHeader
      eyebrow="04 · Entregables"
      title="Alcance de la fase"
      lead="Cada entregable se cierra con una demo grabada y la firma del responsable de área."
      actions={
        <>
          <Button variant="ghost" size="sm">
            Exportar
          </Button>
          <Button size="sm">Agregar entregable</Button>
        </>
      }
    />
  </div>
)

export const TitleOnly = () => (
  <div className="max-w-3xl p-6">
    <SectionHeader title="Configuración de la cuenta" />
  </div>
)
