import styled from 'styled-components';

export const Wrapper = styled.div`
  text-align: ${({ $align }) => $align};
  margin-bottom: 56px;
`;

export const Kicker = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: ${({ theme }) => theme.font.heading};
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.accent};

  &::before {
    content: '';
    width: 22px;
    height: 2px;
    background: ${({ theme }) => theme.colors.gradient};
    border-radius: 2px;
  }
`;

export const Title = styled.h2`
  margin-top: 14px;
  font-size: clamp(28px, 4vw, 42px);
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
`;

export const Subtitle = styled.p`
  margin-top: 14px;
  max-width: 560px;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 16px;
  line-height: 1.7;
  ${({ $align }) => $align === 'center' && 'margin-left: auto; margin-right: auto;'}
`;
