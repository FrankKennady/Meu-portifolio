import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Button = styled(motion.button)`
  position: fixed;
  right: 24px;
  bottom: 24px;
  width: 46px;
  height: 46px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.gradient};
  color: #fff;
  box-shadow: ${({ theme }) => theme.shadow.glow};
  z-index: 900;

  @media (max-width: 600px) {
    right: 16px;
    bottom: 16px;
    width: 42px;
    height: 42px;
  }
`;
