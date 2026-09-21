import * as S from './styles.js';

const DAYS = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

const BOOKINGS = [
  { time: '09:00', client: 'Ana Souza — Corte + Escova', tone: 'ok' },
  { time: '10:30', client: 'Marcos Lima — Barba', tone: 'ok' },
  { time: '13:00', client: 'Juliana Reis — Manicure', tone: 'pending' },
];

export default function KsAgendaPreview() {
  return (
    <S.Wrap>
      <S.DaysRow>
        {DAYS.map((day, i) => (
          <S.Day key={day} $active={i === 3}>
            {day}
          </S.Day>
        ))}
      </S.DaysRow>

      <S.List>
        {BOOKINGS.map((b, i) => (
          <S.Row
            key={b.time}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <S.Time>{b.time}</S.Time>
            <S.Client>{b.client}</S.Client>
            <S.Status $tone={b.tone}>{b.tone === 'ok' ? 'Confirmado' : 'Pendente'}</S.Status>
          </S.Row>
        ))}
      </S.List>

      <S.SummaryRow>
        <S.SummaryCard>
          <S.SummaryLabel>Faturamento do mês</S.SummaryLabel>
          <S.SummaryValue>R$ 8.320</S.SummaryValue>
        </S.SummaryCard>
        <S.SummaryCard>
          <S.SummaryLabel>Avaliação média</S.SummaryLabel>
          <S.SummaryValue>
            4.9 <S.Stars>★★★★★</S.Stars>
          </S.SummaryValue>
        </S.SummaryCard>
      </S.SummaryRow>
    </S.Wrap>
  );
}
