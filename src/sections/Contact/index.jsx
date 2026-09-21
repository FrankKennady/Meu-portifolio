import { Github, Linkedin, Instagram, Mail, MessageCircle } from 'lucide-react';
import SectionHeading from '../../components/SectionHeading/index.jsx';
import Reveal from '../../components/Reveal/index.jsx';
import * as S from './styles.js';

const SOCIALS = [
  { icon: MessageCircle, label: 'WhatsApp', href: 'https://wa.me/5573981110968' },
  { icon: Github, label: 'GitHub', href: 'https://github.com/FrankKennady' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/frank-kennady-284685256/?skipRedirect=true' },
  { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/frank_kennady?igsh=MWFvd3lmcmhpMGxvZw==' },
  { icon: Mail, label: 'Email', href: 'mailto:devfrankkennady@gmail.com' },
];

export default function Contact() {
  return (
    <S.Section id="contact">
      <div className="section-inner">
        <S.Panel>
          <div>
            <SectionHeading
              kicker="Contato"
              title="Vamos conversar?"
              subtitle="Sempre aberto para colaborações, discussões sobre código e novas oportunidades!"
            />
            <S.SocialGrid>
              {SOCIALS.map(({ icon: Icon, label, href }, i) => (
                <S.SocialButton
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06, duration: 0.4 }}
                  whileHover={{ y: -3, scale: 1.02 }}
                >
                  <Icon size={18} /> {label}
                </S.SocialButton>
              ))}
            </S.SocialGrid>
          </div>

          <S.ImageWrap>
            <Reveal direction="left">
              <S.ImageCircle animate={{ y: [0, -14, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}>
                <img src="/assets/perfil.webp" alt="Frank Kennady" />
              </S.ImageCircle>
            </Reveal>
          </S.ImageWrap>
        </S.Panel>
      </div>
    </S.Section>
  );
}
