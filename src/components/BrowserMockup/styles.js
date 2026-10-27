import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

const frame = css`
  display: block;
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: #080b12;
  box-shadow: 0 30px 70px -25px rgba(0, 0, 0, 0.65);
`;

export const Frame = styled(motion.div)`
  ${frame}
`;

export const FrameLink = styled(motion.a)`
  ${frame}
  transition: border-color 0.3s, box-shadow 0.3s;

  &:hover {
    border-color: ${({ $tint }) => $tint}88;
    box-shadow: 0 30px 80px -25px ${({ $tint }) => $tint}66;
  }
`;

export const Chrome = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 10px 14px;
  background: #05070c;
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
  color: #7a8296;
  font-size: 11px;
  font-family: ${({ theme }) => theme.font.heading};
`;

export const Content = styled.div`
  overflow: hidden;
  line-height: 0;
  background: #080b12;
`;
