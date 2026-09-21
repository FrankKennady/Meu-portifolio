import Reveal from '../Reveal/index.jsx';
import * as S from './styles.js';

export default function SectionHeading({ kicker, title, subtitle, align = 'left' }) {
  return (
    <S.Wrapper $align={align}>
      <Reveal>
        <S.Kicker>{kicker}</S.Kicker>
      </Reveal>
      <Reveal delay={0.08}>
        <S.Title>{title}</S.Title>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.16}>
          <S.Subtitle $align={align}>{subtitle}</S.Subtitle>
        </Reveal>
      )}
    </S.Wrapper>
  );
}
