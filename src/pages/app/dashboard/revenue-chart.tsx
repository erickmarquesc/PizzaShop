import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import colors from 'tailwindcss/colors'

import {
  ResponsiveContainer,
  XAxis,
  YAxis,
  Line,
  CartesianGrid,
  LineChart,
} from 'recharts'

const data = [
  { date: '04/03', revenue: 1200 },
  { date: '05/03', revenue: 100 },
  { date: '06/03', revenue: 290 },
  { date: '07/03', revenue: 1600 },
  { date: '08/03', revenue: 3100 },
  { date: '09/03', revenue: 1600 },
  { date: '10/03', revenue: 1230 },
]

export function EvenueChart() {
  return (
    <Card className="col-span-6">
      <CardHeader className="flex-row items-center justify-between pb-8">
        <div className="text-base font-medium">
          <CardTitle>Receita no período</CardTitle>
          <CardDescription>Receita diária no período</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={240}>
          <LineChart data={data} style={{ fontSize: 12 }}>
            <XAxis
              dataKey="date"
              stroke="#888"
              axisLine={false}
              tickLine={false}
              dy={16}
            />
            <YAxis
              stroke="#888"
              axisLine={false}
              tickLine={false}
              width={80}
              tickFormatter={(value: number) =>
                value.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })
              }
            />
            <CartesianGrid vertical={false} className="stroke-muted" />
            <Line
              type="linear"
              strokeWidth={2}
              dataKey="revenue"
              stroke={colors.violet['500']}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
