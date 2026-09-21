import styled from 'styled-components';

export const Wrap = styled.footer`
  padding: 32px 24px 40px;
  text-align: center;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  margin-top: 20px;
`;

export const Text = styled.p`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.textDim};
`;

export const Made = styled.p`
  margin-top: 6px;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.textDim};

  span {
    color: ${({ theme }) => theme.colors.primaryLight};
  }
`;
