import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled.div`
  position: fixed;
  inset: 0;
  z-index: -1;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.bg};
`;

export const Grid = styled.div`
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.035) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.035) 1px, transparent 1px);
  background-size: 46px 46px;
  mask-image: radial-gradient(ellipse 80% 60% at 50% 0%, #000 40%, transparent 90%);
`;

export const Blob = styled(motion.div)`
  position: absolute;
  border-radius: 50%;
  filter: blur(90px);
  opacity: 0.35;
`;
