import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled.div`
  position: relative;
  height: 170px;
  overflow: hidden;
  display: grid;
  place-items: center;

  @media (max-width: 600px) {
    height: 130px;
  }
`;

export const Band = styled.div`
  position: absolute;
  left: -5%;
  width: 110%;
  padding: 14px 0;
  overflow: hidden;
  transform: rotate(${({ $tilt }) => $tilt}deg);

  ${({ $variant, theme }) =>
    $variant === 'lime'
      ? css`
          z-index: 2;
          background: ${theme.colors.accent};
          color: ${theme.colors.onAccent};
        `
      : css`
          z-index: 1;
          background: ${theme.colors.bgAlt};
          border-block: 1px solid ${theme.colors.border};
          color: ${theme.colors.textDim};
        `}
`;

export const Track = styled(motion.div)`
  display: flex;
  width: max-content;
`;

export const Item = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 28px;
  padding-right: 28px;
  font-family: ${({ theme }) => theme.font.heading};
  font-size: clamp(20px, 3vw, 30px);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.02em;
  white-space: nowrap;
`;

export const Star = styled.span`
  font-size: 0.7em;
`;
