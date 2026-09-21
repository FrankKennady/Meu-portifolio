import { motion } from 'framer-motion';

const directions = {
  up: { y: 36, x: 0 },
  down: { y: -36, x: 0 },
  left: { y: 0, x: 36 },
  right: { y: 0, x: -36 },
};

/**
 * Envolve qualquer conteúdo e o revela com fade + slide quando entra na tela.
 * Uso: <Reveal delay={0.1} direction="up"><Card /></Reveal>
 */
export default function Reveal({
  children,
  delay = 0,
  duration = 0.6,
  direction = 'up',
  once = true,
  amount = 0.2,
  as = 'div',
  ...rest
}) {
  const offset = directions[direction] ?? directions.up;
  const MotionTag = motion[as] ?? motion.div;

  return (
    <MotionTag
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
