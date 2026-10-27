import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Nav = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  display: flex;
  justify-content: center;
  padding: 18px 24px;
`;

export const Inner = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.maxWidth};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 18px;
  border-radius: ${({ theme }) => theme.radius.pill};
  background: ${({ $scrolled, theme }) => ($scrolled ? 'rgba(3, 4, 7, 0.75)' : 'transparent')};
  border: 1px solid ${({ $scrolled, theme }) => ($scrolled ? theme.colors.border : 'transparent')};
  backdrop-filter: ${({ $scrolled }) => ($scrolled ? 'blur(16px)' : 'none')};
  box-shadow: ${({ $scrolled, theme }) => ($scrolled ? theme.shadow.card : 'none')};
  transition: background 0.3s ease, border 0.3s ease, box-shadow 0.3s ease;
`;

export const Logo = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: ${({ theme }) => theme.font.heading};
  font-weight: 700;
  font-size: 18px;
  letter-spacing: -0.02em;

  span.dot {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

export const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  @media (max-width: 760px) {
    display: none;
  }
`;

export const LinkItem = styled.button`
  position: relative;
  background: none;
  border: none;
  padding: 8px 18px;
  font-size: 14px;
  font-weight: 500;
  color: ${({ $active, theme }) => ($active ? theme.colors.text : theme.colors.textMuted)};
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const Pill = styled(motion.span)`
  position: absolute;
  inset: 0;
  background: ${({ theme }) => theme.colors.surfaceStrong};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.pill};
  z-index: -1;
`;

export const CTA = styled.a`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 9px 18px;
  border-radius: ${({ theme }) => theme.radius.pill};
  background: ${({ theme }) => theme.colors.gradient};
  color: #fff;
  font-size: 14px;
  font-weight: 600;

  @media (max-width: 760px) {
    display: none;
  }
`;

export const MenuButton = styled.button`
  display: none;
  background: none;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.sm};
  color: ${({ theme }) => theme.colors.text};
  padding: 8px;
  align-items: center;
  justify-content: center;

  @media (max-width: 760px) {
    display: flex;
  }
`;

export const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 78px;
  left: 16px;
  right: 16px;
  z-index: 999;
  display: none;
  flex-direction: column;
  gap: 4px;
  padding: 14px;
  border-radius: ${({ theme }) => theme.radius.md};
  background: rgba(3, 4, 7, 0.92);
  border: 1px solid ${({ theme }) => theme.colors.border};
  backdrop-filter: blur(16px);

  @media (max-width: 760px) {
    display: flex;
  }
`;

export const MobileLink = styled.button`
  background: none;
  border: none;
  text-align: left;
  padding: 12px 10px;
  font-size: 15px;
  font-weight: 500;
  border-radius: ${({ theme }) => theme.radius.sm};
  color: ${({ $active, theme }) => ($active ? theme.colors.text : theme.colors.textMuted)};
  background: ${({ $active, theme }) => ($active ? theme.colors.surface : 'transparent')};
`;
