import { Badge, Table, type TableColumn } from '@digiall/ui'

interface Proyecto {
  cliente: string
  modulo: string
  horas: number
  estado: 'activo' | 'pausa' | 'cerrado'
}

const PROYECTOS: Proyecto[] = [
  { cliente: 'Empire Fitness', modulo: 'Membresías', horas: 128, estado: 'activo' },
  { cliente: 'Worldcam', modulo: 'Inventario', horas: 64, estado: 'activo' },
  { cliente: 'Soluciones Garac', modulo: 'Importación SAP', horas: 92, estado: 'pausa' },
  { cliente: 'LACOCS', modulo: 'Sitio institucional', horas: 40, estado: 'cerrado' },
]

const TONO = { activo: 'accent', pausa: 'warn', cerrado: 'neutral' } as const

const COLUMNAS: TableColumn<Proyecto>[] = [
  { key: 'cliente', header: 'Cliente' },
  { key: 'modulo', header: 'Módulo' },
  { key: 'horas', header: 'Horas', align: 'right', mono: true },
  {
    key: 'estado',
    header: 'Estado',
    render: (row) => (
      <Badge tone={TONO[row.estado]} dot>
        {row.estado}
      </Badge>
    ),
  },
]

export const ProjectList = () => (
  <div className="p-6">
    <Table columns={COLUMNAS} rows={PROYECTOS} rowKey={(row) => row.cliente} />
  </div>
)

export const Empty = () => (
  <div className="p-6">
    <Table columns={COLUMNAS} rows={[]} emptyState="Sin proyectos en este periodo" />
  </div>
)
