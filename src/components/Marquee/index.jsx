import * as S from './styles.js';

const DEFAULT_ITEMS = ['KS Dev', 'React', 'Node.js', 'Full Stack', 'UI Motion', 'SaaS', 'JavaScript', 'Styled Components', 'APIs REST'];

function Track({ items, reverse, duration }) {
  // A lista é duplicada: ao chegar em -50% o loop recomeça sem "pulo" visível.
  const loop = [...items, ...items];
  return (
    <S.Track
      animate={{ x: reverse ? ['-50%', '0%'] : ['0%', '-50%'] }}
      transition={{ duration, repeat: Infinity, ease: 'linear' }}
    >
      {loop.map((item, i) => (
        <S.Item key={i}>
          {item}
          <S.Star>✦</S.Star>
        </S.Item>
      ))}
    </S.Track>
  );
}

/**
 * Faixas de texto em loop infinito, cruzadas em diagonal — estilo motion design.
 */
export default function Marquee({ items = DEFAULT_ITEMS }) {
  return (
    <S.Wrapper aria-hidden="true">
      <S.Band $variant="lime" $tilt={-3}>
        <Track items={items} duration={28} />
      </S.Band>
      <S.Band $variant="cobalt" $tilt={2.5}>
        <Track items={items} duration={34} reverse />
      </S.Band>
    </S.Wrapper>
  );
}
