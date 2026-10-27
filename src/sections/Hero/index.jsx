import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ArrowRight, Mail, ChevronDown, Github, Linkedin, Instagram, MessageCircle } from 'lucide-react';
import * as S from './styles.js';

const ROLES = ['Desenvolvedor Full Stack', 'React & Node.js', 'Criador do KS Gestão & KS Agenda'];

const NAME = 'Frank Kennady';
const NAME_LENGTH = NAME.replace(' ', '').length;
// O Loader cobre a tela por ~2s; a revelação do nome começa quando a cortina sai.
const INTRO_DELAY = 2.1;

const SOCIALS = [
  { icon: MessageCircle, href: 'https://wa.me/5573981110968', label: 'WhatsApp' },
  { icon: Github, href: 'https://github.com/FrankKennady', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/frank-kennady-284685256/?skipRedirect=true', label: 'LinkedIn' },
  { icon: Instagram, href: 'https://www.instagram.com/frank_kennady?igsh=MWFvd3lmcmhpMGxvZw==', label: 'Instagram' },
  { icon: Mail, href: 'mailto:devfrankkennady@gmail.com', label: 'Email' },
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const goTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  return (
    <S.Section id="home">
      <S.Inner>
        <div>
          <S.Badge initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <S.Dot /> Disponível para novas oportunidades
          </S.Badge>

          <S.Hello
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
          >
            Olá, eu sou
          </S.Hello>

          <S.Name aria-label={NAME}>
            {NAME.split(' ').map((word, w, words) => {
              const offset = words.slice(0, w).join('').length;
              return (
                <S.Word key={word} aria-hidden="true">
                  {[...word].map((char, c) => {
                    const index = offset + c;
                    return (
                      <S.Letter
                        key={c}
                        // Cada letra recorta sua fatia do gradiente, para o nome inteiro formar um só degradê
                        style={{
                          backgroundSize: `${NAME_LENGTH * 100}% 100%`,
                          backgroundPosition: `${(index / (NAME_LENGTH - 1)) * 100}% 0`,
                        }}
                        initial={{ y: '110%', rotate: 8 }}
                        animate={{ y: '0%', rotate: 0 }}
                        transition={{ delay: INTRO_DELAY + index * 0.04, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                      >
                        {char}
                      </S.Letter>
                    );
                  })}
                </S.Word>
              );
            })}
          </S.Name>

          <S.RoleRow>
            <AnimatePresence mode="wait">
              <S.Role
                key={roleIndex}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.4 }}
              >
                {ROLES[roleIndex]}
              </S.Role>
            </AnimatePresence>
          </S.RoleRow>

          <S.Description
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.32, duration: 0.5 }}
          >
            Crio interfaces modernas, responsivas e sistemas full stack completos — do front ao banco de dados.
            Fundador da <strong>KS Dev</strong>, onde criei o <strong>KS Gestão</strong> e o{' '}
            <strong>KS Agenda</strong> — plataformas SaaS em produção usadas por negócios reais.
          </S.Description>

          <S.Actions>
            <S.PrimaryButton
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => goTo('projects')}
            >
              Ver Projetos <ArrowRight size={17} />
            </S.PrimaryButton>
            <S.GhostButton
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => goTo('contact')}
            >
              Entrar em contato
            </S.GhostButton>
          </S.Actions>

          <S.SocialRow>
            {SOCIALS.map(({ icon: Icon, href, label }, i) => (
              <S.SocialLink
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.06 }}
                whileHover={{ y: -4 }}
              >
                <Icon size={18} />
              </S.SocialLink>
            ))}
          </S.SocialRow>
        </div>

        <S.ImageWrap
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.25, duration: 0.7 }}
        >
          <S.Ring />
          <S.ImageCircle
            animate={{ y: [0, -16, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <img src="/assets/perfil-inicio.webp" alt="Frank Kennady" />
          </S.ImageCircle>

          <S.FloatingCard
            style={{ top: '8%', left: '-6%' }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0, y: [0, -10, 0] }}
            transition={{ x: { delay: 0.8 }, opacity: { delay: 0.8 }, y: { duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 } }}
          >
            ⚡ Full Stack Developer
          </S.FloatingCard>

          <S.FloatingCard
            style={{ bottom: '6%', right: '-8%' }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0, y: [0, 10, 0] }}
            transition={{ x: { delay: 1 }, opacity: { delay: 1 }, y: { duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1.2 } }}
          >
            🚀 2 SaaS em produção
          </S.FloatingCard>
        </S.ImageWrap>
      </S.Inner>

      <S.ScrollHint
        onClick={() => goTo('about')}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        aria-label="Rolar para baixo"
      >
        Scroll <ChevronDown size={16} />
      </S.ScrollHint>
    </S.Section>
  );
}
