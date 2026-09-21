import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Section = styled.section`
  padding: 100px 0 40px;
`;

export const FeaturedList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 70px;
  margin-bottom: 90px;
`;

export const FeaturedGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: center;
  direction: ${({ $reverse }) => ($reverse ? 'rtl' : 'ltr')};

  & > * {
    direction: ltr;
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    direction: ltr;
  }
`;

export const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 5px 12px;
  border-radius: ${({ theme }) => theme.radius.pill};
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.accent};
  font-size: 11.5px;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const FeaturedTitle = styled.h3`
  font-size: clamp(24px, 3vw, 32px);
  font-weight: 700;
`;

export const Tagline = styled.p`
  margin-top: 6px;
  color: ${({ theme }) => theme.colors.primaryLight};
  font-weight: 500;
  font-size: 15px;
`;

export const FeaturedText = styled.p`
  margin-top: 16px;
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.75;
  font-size: 15px;
`;

export const List = styled.ul`
  list-style: none;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ListItem = styled(motion.li)`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text};

  svg {
    margin-top: 2px;
    flex-shrink: 0;
    color: ${({ theme }) => theme.colors.success};
  }
`;

export const StackRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 22px;
`;

export const Chip = styled.span`
  padding: 5px 12px;
  border-radius: ${({ theme }) => theme.radius.pill};
  font-size: 12px;
  font-weight: 500;
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.textMuted};
`;

export const ButtonRow = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 26px;
`;

export const FeaturedButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 11px 20px;
  border-radius: ${({ theme }) => theme.radius.pill};
  font-size: 14px;
  font-weight: 600;
  background: ${({ theme }) => theme.colors.gradient};
  color: #fff;
`;

/* grid de projetos pessoais */
export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 24px;
`;

export const Card = styled(motion.div)`
  display: flex;
  flex-direction: column;
  border-radius: ${({ theme }) => theme.radius.md};
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.surface};
`;

export const CardImageWrap = styled.div`
  position: relative;
  height: 170px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
`;

export const CardBody = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const CardTitle = styled.h4`
  font-size: 17px;
  font-weight: 600;
  margin-bottom: 8px;
`;

export const CardText = styled.p`
  font-size: 13.5px;
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.6;
  flex: 1;
`;

export const CardStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin: 14px 0;
`;

export const CardChip = styled.span`
  font-size: 10.5px;
  padding: 3px 9px;
  border-radius: ${({ theme }) => theme.radius.pill};
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.textDim};
`;

export const CardLinks = styled.div`
  display: flex;
  gap: 10px;
`;

export const CardLink = styled.a`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 9px;
  border-radius: ${({ theme }) => theme.radius.sm};
  border: 1px solid ${({ theme }) => theme.colors.border};
  font-size: 12.5px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  transition: background 0.2s ease, border-color 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.gradient};
    border-color: transparent;
  }
`;

export const MoreWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 44px;
`;

export const MoreLink = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  border-radius: ${({ theme }) => theme.radius.pill};
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.surface};
  font-weight: 600;
  font-size: 14px;
`;
