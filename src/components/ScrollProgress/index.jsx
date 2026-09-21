import { useScroll, useSpring } from 'framer-motion';
import * as S from './styles.js';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001,
  });

  return <S.Bar style={{ scaleX }} />;
}
