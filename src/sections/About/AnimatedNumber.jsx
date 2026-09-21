import { useCountUp } from '../../hooks/useCountUp.js';
import * as S from './styles.js';

export default function AnimatedNumber({ value, suffix = '', label, delay = 0 }) {
  const { ref, value: current } = useCountUp(value);

  return (
    <S.StatCard
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ y: -4 }}
    >
      <S.StatValue>
        {current}
        {suffix}
      </S.StatValue>
      <S.StatLabel>{label}</S.StatLabel>
    </S.StatCard>
  );
}
