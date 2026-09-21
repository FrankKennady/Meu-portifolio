import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Section = styled.section`
  padding: 110px 0 60px;
`;

export const Panel = styled.div`
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  align-items: center;
  gap: 40px;
  padding: 48px;
  border-radius: ${({ theme }) => theme.radius.lg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.surface};
  position: relative;
  overflow: hidden;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    padding: 32px 24px;
    text-align: center;
  }
`;

export const Text = styled.p`
  margin-top: 12px;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 15.5px;
  line-height: 1.7;
  max-width: 460px;

  @media (max-width: 900px) {
    margin-inline: auto;
  }
`;

export const SocialGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  margin-top: 32px;

  @media (max-width: 460px) {
    grid-template-columns: 1fr;
  }
`;

export const SocialButton = styled(motion.a)`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 13px 16px;
  border-radius: ${({ theme }) => theme.radius.md};
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: rgba(255, 255, 255, 0.02);
  font-size: 14px;
  font-weight: 500;

  svg {
    color: ${({ theme }) => theme.colors.accent};
  }

  &:hover {
    border-color: transparent;
    background: ${({ theme }) => theme.colors.gradient};
  }
`;

export const ImageWrap = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media (max-width: 900px) {
    display: none;
  }
`;

export const ImageCircle = styled(motion.div)`
  width: 260px;
  height: 260px;
  border-radius: 50%;
  padding: 5px;
  background: ${({ theme }) => theme.colors.gradient};

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
    background: ${({ theme }) => theme.colors.bg};
  }
`;
