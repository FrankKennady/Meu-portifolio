import { useEffect } from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from 'framer-motion';
import * as S from './styles.js';

const SPRING = { stiffness: 120, damping: 20, mass: 0.6 };

export default function Background() {
  // Posição do mouse em px (para o holofote) — começa no centro do topo
  const mouseX = useMotionValue(typeof window !== 'undefined' ? window.innerWidth / 2 : 0);
  const mouseY = useMotionValue(200);
  const x = useSpring(mouseX, SPRING);
  const y = useSpring(mouseY, SPRING);

  // Posição normalizada (-1 a 1) para o parallax das manchas de luz
  const nx = useMotionValue(0);
  const ny = useMotionValue(0);
  const px = useSpring(nx, { stiffness: 40, damping: 18 });
  const py = useSpring(ny, { stiffness: 40, damping: 18 });

  useEffect(() => {
    const handleMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      nx.set((e.clientX / window.innerWidth) * 2 - 1);
      ny.set((e.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener('pointermove', handleMove, { passive: true });
    return () => window.removeEventListener('pointermove', handleMove);
  }, [mouseX, mouseY, nx, ny]);

  const spotlight = useMotionTemplate`radial-gradient(520px circle at ${x}px ${y}px, rgba(21, 88, 201, 0.28), transparent 65%)`;
  const gridMask = useMotionTemplate`radial-gradient(240px circle at ${x}px ${y}px, #000 0%, transparent 100%)`;

  // Cada mancha se desloca numa intensidade diferente — dá profundidade
  const far = { x: useTransform(px, (v) => v * -60), y: useTransform(py, (v) => v * -40) };
  const near = { x: useTransform(px, (v) => v * -30), y: useTransform(py, (v) => v * 50) };

  return (
    <S.Wrapper aria-hidden="true">
      <S.Layer style={far}>
        <S.Blob
          style={{ width: 560, height: 560, top: '-12%', left: '-10%', background: '#1558C9' }}
          animate={{ x: [0, 60, 0], y: [0, 40, 0], scale: [1, 1.08, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        />
      </S.Layer>
      <S.Layer style={near}>
        <S.Blob
          style={{ width: 440, height: 440, bottom: '-10%', left: '25%', background: '#1558C9' }}
          animate={{ x: [0, 40, 0], y: [0, -35, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
        />
      </S.Layer>

      {/* Holofote azul que segue o cursor */}
      <S.Spotlight style={{ background: spotlight }} />

      <S.Grid />
      {/* Grade em lime que só "acende" ao redor do cursor */}
      <S.GridGlow
        style={{ maskImage: gridMask, WebkitMaskImage: gridMask }}
      />
    </S.Wrapper>
  );
}
