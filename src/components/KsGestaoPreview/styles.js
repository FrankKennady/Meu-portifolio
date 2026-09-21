import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Layout = styled.div`
  display: grid;
  grid-template-columns: 100px 1fr;
  gap: 14px;

  @media (max-width: 480px) {
    grid-template-columns: 60px 1fr;
  }
`;

export const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const SideItem = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 8px;
  border-radius: 8px;
  font-size: 10.5px;
  font-weight: 600;
  color: ${({ $active }) => ($active ? '#fff' : '#5c6a8c')};
  background: ${({ $active, theme }) => ($active ? theme.colors.gradient : 'transparent')};

  span.dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: currentColor;
    flex-shrink: 0;
  }

  @media (max-width: 480px) {
    span.label { display: none; }
    justify-content: center;
  }
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const StatsRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
`;

export const StatCard = styled.div`
  padding: 12px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.06);
`;

export const StatLabel = styled.div`
  font-size: 10px;
  color: #6f7fa3;
  margin-bottom: 4px;
`;

export const StatValue = styled.div`
  font-family: ${({ theme }) => theme.font.heading};
  font-size: 16px;
  font-weight: 700;
  color: #f3f3f7;
`;

export const Trend = styled.span`
  font-size: 10px;
  color: #34d399;
  margin-left: 6px;
`;

export const ChartCard = styled.div`
  padding: 14px 12px 10px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.06);
`;

export const ChartTitle = styled.div`
  font-size: 10px;
  color: #6f7fa3;
  margin-bottom: 10px;
`;

export const Bars = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 8px;
  height: 70px;
`;

export const Bar = styled(motion.div)`
  flex: 1;
  border-radius: 4px 4px 0 0;
  background: ${({ theme }) => theme.colors.gradient};
  opacity: 0.9;
`;

export const ActivityCard = styled.div`
  padding: 12px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.06);
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ActivityLine = styled(motion.div)`
  height: 6px;
  border-radius: 6px;
  background: linear-gradient(90deg, rgba(124,58,237,0.5), rgba(56,189,248,0.2));
`;
