import { motion } from 'framer-motion';
import Reveal from '../Reveal/index.jsx';
import * as S from './styles.js';

const TITLE_WIPE = {
  hidden: { clipPath: 'inset(0 100% 0 0)', x: -12 },
  visible: {
    clipPath: 'inset(0 0% 0 0)',
    x: 0,
    transition: { duration: 0.9, delay: 0.08, ease: [0.76, 0, 0.24, 1] },
  },
};

export default function SectionHeading({ kicker, title, subtitle, align = 'left' }) {
  return (
    <S.Wrapper $align={align}>
      <Reveal>
        <S.Kicker>{kicker}</S.Kicker>
      </Reveal>
      {/* Título revelado com "wipe" lateral, como uma transição de corte em vídeo.
          O wrapper é quem observa a viewport: um elemento 100% recortado por
          clip-path nunca é dado como visível pelo IntersectionObserver. */}
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.6 }}>
        <S.Title variants={TITLE_WIPE}>{title}</S.Title>
      </motion.div>
      {subtitle && (
        <Reveal delay={0.16}>
          <S.Subtitle $align={align}>{subtitle}</S.Subtitle>
        </Reveal>
      )}
    </S.Wrapper>
  );
}
