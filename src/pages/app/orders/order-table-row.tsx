import { Button } from '@/components/ui/button'
import { TableCell, TableRow } from '@/components/ui/table'
import { ArrowRight, X } from 'lucide-react'
import { OrderDetails } from './order-table-details'

export function OrderTableRow() {
  return (
    <TableRow>
      <TableCell>
        <OrderDetails />
      </TableCell>

      <TableCell className="font-mono text-xs font-medium">
        87f6sd8f564ses5d
      </TableCell>

      <TableCell className="font-medium">Erick Marques</TableCell>

      <TableCell className="text-muted-foreground">há 15 minutos</TableCell>

      <TableCell className="font-medium">R$ 60,90</TableCell>

      <TableCell>
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-slate-400" />
          <span className="font-medium text-muted-foreground">Pendente</span>
        </div>
      </TableCell>

      <TableCell>
        <Button variant="outline" size="xs">
          <ArrowRight className="mr-2 h-3 w-3" />
          Aprovar
        </Button>
      </TableCell>

      <TableCell>
        <Button variant="ghost" size="xs">
          <X className="mr-2 h-3 w-3" />
          Cancelar pedido
        </Button>
      </TableCell>
    </TableRow>
  )
}
