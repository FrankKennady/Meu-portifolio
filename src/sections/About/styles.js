import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Section = styled.section`
  padding: 120px 0 40px;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  gap: 56px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

export const Bio = styled.p`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 16px;
  line-height: 1.85;

  & + & {
    margin-top: 16px;
  }

  strong {
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const CVButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: 28px;
  padding: 12px 22px;
  border-radius: ${({ theme }) => theme.radius.pill};
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.surface};
  font-weight: 600;
  font-size: 14px;
`;

export const SkillsBox = styled.div`
  margin-top: 40px;
`;

export const SkillsTitle = styled.h3`
  font-size: 15px;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textDim};
  margin-bottom: 20px;
`;

export const SkillRow = styled.div`
  margin-bottom: 16px;
`;

export const SkillLabel = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  margin-bottom: 6px;
  color: ${({ theme }) => theme.colors.text};

  span:last-child {
    color: ${({ theme }) => theme.colors.textDim};
  }
`;

export const SkillTrack = styled.div`
  height: 6px;
  border-radius: 6px;
  background: ${({ theme }) => theme.colors.surface};
  overflow: hidden;
`;

export const SkillFill = styled(motion.div)`
  height: 100%;
  border-radius: 6px;
  background: ${({ theme }) => theme.colors.gradient};
`;

export const StatsRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
  margin-bottom: 24px;

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`;

export const StatCard = styled(motion.div)`
  padding: 20px 16px;
  text-align: center;
  border-radius: ${({ theme }) => theme.radius.md};
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.surface};
`;

export const StatValue = styled.div`
  font-family: ${({ theme }) => theme.font.heading};
  font-size: 30px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
`;

export const StatLabel = styled.div`
  margin-top: 4px;
  font-size: 12.5px;
  color: ${({ theme }) => theme.colors.textMuted};
`;

export const BoxGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 14px;

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`;

export const Box = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 22px 18px;
  border-radius: ${({ theme }) => theme.radius.md};
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.surface};
  transition: border-color 0.25s ease, transform 0.25s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primaryLight};
  }
`;

export const IconWrap = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.radius.sm};
  background: ${({ theme }) => theme.colors.gradient};
  color: #fff;
`;

export const BoxLabel = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
`;
