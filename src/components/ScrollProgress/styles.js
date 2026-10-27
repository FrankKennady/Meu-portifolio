import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Bar = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  transform-origin: 0%;
  background: ${({ theme }) => theme.colors.gradientAccent};
  z-index: 1100;
`;
