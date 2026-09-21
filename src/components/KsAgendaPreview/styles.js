import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const DaysRow = styled.div`
  display: flex;
  gap: 6px;
`;

export const Day = styled.div`
  flex: 1;
  text-align: center;
  padding: 8px 4px;
  border-radius: 8px;
  font-size: 10.5px;
  font-weight: 600;
  color: ${({ $active }) => ($active ? '#fff' : '#6f7fa3')};
  background: ${({ $active, theme }) => ($active ? theme.colors.gradient : 'rgba(255,255,255,0.04)')};
  border: 1px solid rgba(255, 255, 255, 0.06);
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Row = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 12px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.06);
`;

export const Time = styled.span`
  font-family: ${({ theme }) => theme.font.heading};
  font-size: 11px;
  color: #7dd3fc;
  width: 42px;
  flex-shrink: 0;
`;

export const Client = styled.span`
  flex: 1;
  font-size: 11.5px;
  color: #f3f3f7;
`;

export const Status = styled.span`
  font-size: 9.5px;
  font-weight: 700;
  padding: 3px 9px;
  border-radius: 999px;
  text-transform: uppercase;
  letter-spacing: 0.03em;
  color: ${({ $tone }) => ($tone === 'ok' ? '#34d399' : '#fbbf24')};
  background: ${({ $tone }) => ($tone === 'ok' ? 'rgba(52,211,153,0.12)' : 'rgba(251,191,36,0.12)')};
`;

export const SummaryRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
`;

export const SummaryCard = styled.div`
  padding: 12px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.06);
`;

export const SummaryLabel = styled.div`
  font-size: 10px;
  color: #6f7fa3;
  margin-bottom: 4px;
`;

export const SummaryValue = styled.div`
  font-family: ${({ theme }) => theme.font.heading};
  font-size: 15px;
  font-weight: 700;
  color: #f3f3f7;
`;

export const Stars = styled.span`
  color: #fbbf24;
  font-size: 11px;
  margin-left: 6px;
`;
