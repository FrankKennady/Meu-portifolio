import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Section = styled.section`
  min-height: 100svh;
  display: flex;
  align-items: center;
  padding: 140px 24px 80px;
`;

export const Inner = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  align-items: center;
  gap: 40px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

export const Badge = styled(motion.div)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 7px 14px;
  border-radius: ${({ theme }) => theme.radius.pill};
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.surface};
  font-size: 13px;
  color: ${({ theme }) => theme.colors.textMuted};
  margin-bottom: 22px;

  @media (max-width: 900px) {
    margin-inline: auto;
  }
`;

export const Dot = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.success};
  box-shadow: 0 0 0 0 rgba(52, 211, 153, 0.6);
  animation: pulse 2s infinite;

  @keyframes pulse {
    0% { box-shadow: 0 0 0 0 rgba(52, 211, 153, 0.55); }
    70% { box-shadow: 0 0 0 8px rgba(52, 211, 153, 0); }
    100% { box-shadow: 0 0 0 0 rgba(52, 211, 153, 0); }
  }
`;

export const Hello = styled(motion.p)`
  color: ${({ theme }) => theme.colors.accent};
  font-weight: 600;
  font-size: 18px;
  margin-bottom: 6px;
`;

export const Name = styled(motion.h1)`
  font-size: clamp(38px, 6vw, 68px);
  font-weight: 700;
  letter-spacing: -0.02em;
`;

export const RoleRow = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  margin-top: 8px;
  margin-bottom: 20px;

  @media (max-width: 900px) {
    justify-content: center;
  }
`;

export const Role = styled(motion.h2)`
  font-size: clamp(20px, 2.6vw, 28px);
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primaryLight};
`;

export const Description = styled(motion.p)`
  font-size: 17px;
  line-height: 1.75;
  color: ${({ theme }) => theme.colors.textMuted};
  max-width: 540px;

  @media (max-width: 900px) {
    margin-inline: auto;
  }
`;

export const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 32px;

  @media (max-width: 900px) {
    justify-content: center;
  }
`;

export const PrimaryButton = styled(motion.button)`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 13px 24px;
  border-radius: ${({ theme }) => theme.radius.pill};
  border: none;
  background: ${({ theme }) => theme.colors.gradient};
  color: #fff;
  font-weight: 600;
  font-size: 15px;
  box-shadow: ${({ theme }) => theme.shadow.glow};
`;

export const GhostButton = styled(motion.button)`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 13px 24px;
  border-radius: ${({ theme }) => theme.radius.pill};
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.text};
  font-weight: 600;
  font-size: 15px;
`;

export const SocialRow = styled.div`
  display: flex;
  gap: 14px;
  margin-top: 36px;

  @media (max-width: 900px) {
    justify-content: center;
  }
`;

export const SocialLink = styled(motion.a)`
  width: 42px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.textMuted};

  &:hover {
    color: #fff;
    border-color: transparent;
    background: ${({ theme }) => theme.colors.gradient};
  }
`;

export const ImageWrap = styled(motion.div)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Ring = styled.div`
  position: absolute;
  width: min(420px, 80vw);
  height: min(420px, 80vw);
  border-radius: 50%;
  background: conic-gradient(from 0deg, #7c3aed, #38bdf8, #7c3aed);
  filter: blur(2px);
  opacity: 0.55;
  animation: spin 12s linear infinite;

  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`;

export const ImageCircle = styled(motion.div)`
  position: relative;
  width: min(380px, 72vw);
  height: min(380px, 72vw);
  border-radius: 50%;
  padding: 6px;
  background: ${({ theme }) => theme.colors.bg};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
`;

export const FloatingCard = styled(motion.div)`
  position: absolute;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 16px;
  border-radius: ${({ theme }) => theme.radius.md};
  background: rgba(15, 15, 24, 0.85);
  border: 1px solid ${({ theme }) => theme.colors.border};
  backdrop-filter: blur(10px);
  box-shadow: ${({ theme }) => theme.shadow.card};
  font-size: 13px;
  font-weight: 600;

  @media (max-width: 600px) {
    display: none;
  }
`;

export const ScrollHint = styled(motion.button)`
  position: absolute;
  left: 50%;
  bottom: 28px;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.textDim};
  font-size: 12px;
  letter-spacing: 0.08em;
  text-transform: uppercase;

  @media (max-width: 900px) {
    display: none;
  }
`;
