import { CheckCircle2, Github } from 'lucide-react';
import Reveal from '../../components/Reveal/index.jsx';
import BrowserMockup from '../../components/BrowserMockup/index.jsx';
import KsGestaoPreview from '../../components/KsGestaoPreview/index.jsx';
import KsAgendaPreview from '../../components/KsAgendaPreview/index.jsx';
import * as S from './styles.js';

const PREVIEWS = {
  gestao: { Component: KsGestaoPreview, url: 'app.ksgestao.com.br', tint: '#7c3aed' },
  agenda: { Component: KsAgendaPreview, url: 'app.ksagenda.com.br', tint: '#38bdf8' },
};

export default function FeaturedCard({ project, reverse = false }) {
  const preview = PREVIEWS[project.variant];
  const Preview = preview?.Component;

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
              href={project.linkgithub}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              <Github size={16} /> Ver Repositório
            </S.FeaturedButton>
          </S.ButtonRow>
        </div>
      </Reveal>

      <Reveal direction={reverse ? 'right' : 'left'} delay={0.1}>
        {Preview && <BrowserMockup url={preview.url} tint={preview.tint}><Preview /></BrowserMockup>}
      </Reveal>
    </S.FeaturedGrid>
  );
}
