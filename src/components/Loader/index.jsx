import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import * as S from './styles.js';

const DISPLAY_TIME = 1700;
const EXIT_DELAY = 450;

// Isolado num componente próprio para que o intervalo da barra de progresso
// não re-renderize (e reinicie) as animações de entrada do título/anel.
function ProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 92 ? prev : prev + Math.random() * 14));
    }, 140);

    const finishTimeout = setTimeout(() => {
      clearInterval(interval);
      setProgress(100);
    }, DISPLAY_TIME);

    return () => {
      clearInterval(interval);
      clearTimeout(finishTimeout);
    };
  }, []);

  return (
    <S.BarTrack>
      <S.BarFill animate={{ width: `${progress}%` }} transition={{ ease: 'easeOut', duration: 0.2 }} />
    </S.BarTrack>
  );
}

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!loading) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const finishTimeout = setTimeout(() => setLoading(false), DISPLAY_TIME + EXIT_DELAY);

    return () => {
      clearTimeout(finishTimeout);
      document.body.style.overflow = previousOverflow;
    };
  }, [loading]);

  return (
    <AnimatePresence>
      {loading && (
        <S.Overlay
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
        >
          <S.Glow />

          <S.Ring
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <S.Mark>FK</S.Mark>
          </S.Ring>

          <S.TextGroup>
            <S.Title
              initial={{ y: 12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.15, duration: 0.5 }}
            >
              Bem-vindo ao <span className="gradient-text">Portfólio</span> de Frank Kennady
            </S.Title>
            <S.Subtitle
              initial={{ y: 8, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Desenvolvedor Front-End
            </S.Subtitle>
          </S.TextGroup>

          <ProgressBar />
        </S.Overlay>
      )}
    </AnimatePresence>
  );
}
