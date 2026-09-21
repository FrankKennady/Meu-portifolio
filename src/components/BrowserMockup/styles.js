import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Frame = styled(motion.div)`
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: #0d1424;
  box-shadow: 0 30px 70px -25px rgba(0, 0, 0, 0.65);
`;

export const Chrome = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 10px 14px;
  background: #0a0f1c;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
`;

export const Dots = styled.div`
  display: flex;
  gap: 6px;

  span {
    width: 9px;
    height: 9px;
    border-radius: 50%;
  }

  span:nth-child(1) { background: #ff5f57; }
  span:nth-child(2) { background: #febc2e; }
  span:nth-child(3) { background: #28c840; }
`;

export const UrlPill = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 5px 14px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.05);
  color: #6f7fa3;
  font-size: 11px;
  font-family: ${({ theme }) => theme.font.heading};
`;

export const Content = styled.div`
  padding: 18px;
  min-height: 260px;
  background:
    radial-gradient(circle at 0% 0%, ${({ $tint }) => $tint}22, transparent 60%),
    #0d1424;
`;
