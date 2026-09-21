import { LayoutGrid, Users, ShoppingCart, Package, BarChart3 } from 'lucide-react';
import * as S from './styles.js';

const NAV = [
  { icon: LayoutGrid, label: 'Dashboard', active: true },
  { icon: ShoppingCart, label: 'PDV' },
  { icon: Package, label: 'Produtos' },
  { icon: Users, label: 'Clientes' },
  { icon: BarChart3, label: 'Relatórios' },
];

const BAR_HEIGHTS = [38, 55, 30, 68, 46, 60];

export default function KsGestaoPreview() {
  return (
    <S.Layout>
      <S.Sidebar>
        {NAV.map(({ icon: Icon, label, active }) => (
          <S.SideItem key={label} $active={active}>
            <Icon size={12} />
            <span className="label">{label}</span>
          </S.SideItem>
        ))}
      </S.Sidebar>

      <S.Main>
        <S.StatsRow>
          <S.StatCard>
            <S.StatLabel>Vendas hoje</S.StatLabel>
            <S.StatValue>
              R$ 2.450 <S.Trend>▲ 12%</S.Trend>
            </S.StatValue>
          </S.StatCard>
          <S.StatCard>
            <S.StatLabel>Clientes ativos</S.StatLabel>
            <S.StatValue>
              128 <S.Trend>▲ 6%</S.Trend>
            </S.StatValue>
          </S.StatCard>
        </S.StatsRow>

        <S.ChartCard>
          <S.ChartTitle>Vendas da semana</S.ChartTitle>
          <S.Bars>
            {BAR_HEIGHTS.map((h, i) => (
              <S.Bar
                key={i}
                initial={{ height: 0 }}
                whileInView={{ height: `${h}px` }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7, delay: i * 0.08, ease: 'easeOut' }}
              />
            ))}
          </S.Bars>
        </S.ChartCard>

        <S.ActivityCard>
          {[70, 45, 85].map((w, i) => (
            <S.ActivityLine
              key={i}
              initial={{ width: 0 }}
              whileInView={{ width: `${w}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
            />
          ))}
        </S.ActivityCard>
      </S.Main>
    </S.Layout>
  );
}
