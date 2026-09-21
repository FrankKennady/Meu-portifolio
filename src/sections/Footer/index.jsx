import * as S from './styles.js';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <S.Wrap>
      <S.Text>© {year} Frank Kennady. Todos os direitos reservados.</S.Text>
      <S.Made>
        Construído com <span>React</span> + <span>Vite</span> + <span>styled-components</span>
      </S.Made>
    </S.Wrap>
  );
}
