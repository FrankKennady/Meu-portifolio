import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Overlay = styled(motion.div)`
  position: fixed;
  inset: 0;
  z-index: 3000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 28px;
  background: ${({ theme }) => theme.colors.bg};
  overflow: hidden;
`;

export const Curtain = styled(motion.div)`
  position: fixed;
  inset: 0;
  z-index: 2999;
  background: ${({ theme }) => theme.colors.primary};
`;

export const Glow = styled.div`
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 50% 42%, rgba(21, 88, 201, 0.38), transparent 45%),
    radial-gradient(circle at 50% 100%, rgba(21, 88, 201, 0.2), transparent 60%);
  pointer-events: none;
`;

export const Ring = styled(motion.div)`
  position: relative;
  width: 84px;
  height: 84px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 50%;
    border: 2px solid rgba(255, 255, 255, 0.06);
    border-top-color: ${({ theme }) => theme.colors.accent};
    border-right-color: ${({ theme }) => theme.colors.primaryLight};
    animation: loader-spin 1s linear infinite;
  }

  @keyframes loader-spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

export const Mark = styled.span`
  font-family: ${({ theme }) => theme.font.heading};
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
`;

export const TextGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 0 24px;
`;

export const Title = styled(motion.h1)`
  font-family: ${({ theme }) => theme.font.heading};
  font-size: clamp(1.25rem, 4vw, 1.9rem);
  font-weight: 600;
  letter-spacing: -0.02em;
  text-align: center;
`;

export const Subtitle = styled(motion.p)`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 0.95rem;
  text-align: center;
`;

export const BarTrack = styled.div`
  width: 200px;
  height: 3px;
  border-radius: ${({ theme }) => theme.radius.pill};
  background: ${({ theme }) => theme.colors.surfaceStrong};
  overflow: hidden;
`;

export const BarFill = styled(motion.div)`
  height: 100%;
  border-radius: ${({ theme }) => theme.radius.pill};
  background: ${({ theme }) => theme.colors.gradientAccent};
`;
