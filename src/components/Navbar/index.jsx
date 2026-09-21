import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';
import { useActiveSection } from '../../hooks/useActiveSection.js';
import * as S from './styles.js';

const NAV_ITEMS = [
  { id: 'home', label: 'Início' },
  { id: 'about', label: 'Sobre' },
  { id: 'projects', label: 'Projetos' },
  { id: 'contact', label: 'Contato' },
];

const IDS = NAV_ITEMS.map((item) => item.id);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(IDS);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const goTo = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <S.Nav initial={{ y: -80 }} animate={{ y: 0 }} transition={{ duration: 0.6, ease: 'easeOut' }}>
      <S.Inner $scrolled={scrolled}>
        <S.Logo href="#home" onClick={(e) => { e.preventDefault(); goTo('home'); }}>
          Kennady<span className="dot">.</span>dev
        </S.Logo>

        <S.Links>
          {NAV_ITEMS.map((item) => (
            <S.LinkItem key={item.id} $active={active === item.id} onClick={() => goTo(item.id)}>
              {active === item.id && (
                <S.Pill layoutId="nav-pill" transition={{ type: 'spring', stiffness: 380, damping: 30 }} />
              )}
              {item.label}
            </S.LinkItem>
          ))}
        </S.Links>

        <S.CTA href="/assets/curriculo-frank-kennady.pdf" target="_blank" rel="noopener noreferrer">
          <Download size={15} /> Currículo
        </S.CTA>

        <S.MenuButton onClick={() => setOpen((v) => !v)} aria-label="Abrir menu">
          {open ? <X size={20} /> : <Menu size={20} />}
        </S.MenuButton>
      </S.Inner>

      <AnimatePresence>
        {open && (
          <S.MobileMenu
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
          >
            {NAV_ITEMS.map((item) => (
              <S.MobileLink key={item.id} $active={active === item.id} onClick={() => goTo(item.id)}>
                {item.label}
              </S.MobileLink>
            ))}
            <S.MobileLink as="a" href="/assets/curriculo-frank-kennady.pdf" target="_blank" rel="noopener noreferrer">
              Baixar Currículo
            </S.MobileLink>
          </S.MobileMenu>
        )}
      </AnimatePresence>
    </S.Nav>
  );
}
