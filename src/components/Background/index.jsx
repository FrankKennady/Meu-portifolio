import * as S from './styles.js';

export default function Background() {
  return (
    <S.Wrapper aria-hidden="true">
      <S.Blob
        style={{ width: 520, height: 520, top: '-10%', left: '-8%', background: '#7c3aed' }}
        animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <S.Blob
        style={{ width: 460, height: 460, top: '18%', right: '-10%', background: '#38bdf8' }}
        animate={{ x: [0, -30, 0], y: [0, 40, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />
      <S.Blob
        style={{ width: 420, height: 420, bottom: '-8%', left: '20%', background: '#6366f1' }}
        animate={{ x: [0, 30, 0], y: [0, -25, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />
      <S.Grid />
    </S.Wrapper>
  );
}
