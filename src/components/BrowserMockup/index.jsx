import { Lock } from 'lucide-react';
import * as S from './styles.js';

/**
 * Moldura de "janela de navegador" usada para exibir uma prévia (mock) da
 * interface de um sistema, sem depender de screenshots reais.
 */
export default function BrowserMockup({ url, tint = '#7c3aed', children }) {
  return (
    <S.Frame
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      <S.Chrome>
        <S.Dots>
          <span />
          <span />
          <span />
        </S.Dots>
        <S.UrlPill>
          <Lock size={10} /> {url}
        </S.UrlPill>
      </S.Chrome>
      <S.Content $tint={tint}>{children}</S.Content>
    </S.Frame>
  );
}
