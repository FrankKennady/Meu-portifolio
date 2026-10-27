import { CheckCircle2, ExternalLink } from 'lucide-react';
import Reveal from '../../components/Reveal/index.jsx';
import BrowserMockup from '../../components/BrowserMockup/index.jsx';
import * as S from './styles.js';

const PREVIEWS = {
  gestao: { image: '/assets/ks-gestao.webp', url: 'ksdev.systems/ks-gestao', tint: '#1558C9' },
  agenda: { image: '/assets/ks-agenda.webp', url: 'ksdev.systems/ks-agenda', tint: '#D4FF24' },
};

export default function FeaturedCard({ project, reverse = false }) {
  const preview = PREVIEWS[project.variant];

  return (
    <S.FeaturedGrid $reverse={reverse}>
      <Reveal direction={reverse ? 'left' : 'right'}>
        <div>
          <S.Badge>{project.badge}</S.Badge>
          <S.FeaturedTitle>{project.titulo}</S.FeaturedTitle>
          <S.Tagline>{project.tagline}</S.Tagline>
          <S.FeaturedText>{project.sintese}</S.FeaturedText>

          <S.List>
            {project.destaques.map((item, i) => (
              <S.ListItem
                key={item}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
              >
                <CheckCircle2 size={17} />
                <span>{item}</span>
              </S.ListItem>
            ))}
          </S.List>

          <S.StackRow>
            {project.stack.map((tech) => (
              <S.Chip key={tech}>{tech}</S.Chip>
            ))}
          </S.StackRow>

          <S.ButtonRow>
            <S.FeaturedButton
              href={project.linksistema}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              <ExternalLink size={16} /> Acessar o sistema
            </S.FeaturedButton>
          </S.ButtonRow>
        </div>
      </Reveal>

      <Reveal direction={reverse ? 'right' : 'left'} delay={0.1}>
        {preview && (
          <BrowserMockup url={preview.url} tint={preview.tint} href={project.linksistema}>
            <S.Screenshot
              src={preview.image}
              alt={`Tela inicial do ${project.titulo}`}
              loading="lazy"
              initial={{ scale: 1.12 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            />
          </BrowserMockup>
        )}
      </Reveal>
    </S.FeaturedGrid>
  );
}
