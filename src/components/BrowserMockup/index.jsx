import { Lock } from 'lucide-react';
import * as S from './styles.js';

/**
 * Moldura de "janela de navegador" usada para exibir a tela de um sistema.
 * Com `href`, a moldura inteira vira link para o sistema.
 */
export default function BrowserMockup({ url, tint = '#1558C9', href, children }) {
  const Frame = href ? S.FrameLink : S.Frame;
  const linkProps = href ? { href, target: '_blank', rel: 'noopener noreferrer', whileHover: { y: -6 }, $tint: tint } : {};

  return (
    <Frame
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      {...linkProps}
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
      <S.Content>{children}</S.Content>
    </Frame>
  );
}
