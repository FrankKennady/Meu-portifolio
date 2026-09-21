import { Github } from 'lucide-react';
import SectionHeading from '../../components/SectionHeading/index.jsx';
import { featuredProjects, projects } from '../../data/projects.js';
import FeaturedCard from './FeaturedCard.jsx';
import ProjectCard from './ProjectCard.jsx';
import * as S from './styles.js';

export default function Projects() {
  return (
    <S.Section id="projects">
      <div className="section-inner">
        <SectionHeading
          kicker="Projetos"
          title="Sistemas & Projetos"
          subtitle="Dos sistemas full stack em produção aos projetos de estudo que me trouxeram até aqui."
        />

        <S.FeaturedList>
          {featuredProjects.map((project, i) => (
            <FeaturedCard key={project.id} project={project} reverse={i % 2 === 1} />
          ))}
        </S.FeaturedList>

        <SectionHeading kicker="Estudos & Front-end" title="Outros Projetos" />

        <S.Grid>
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </S.Grid>

        <S.MoreWrap>
          <S.MoreLink
            href="https://github.com/FrankKennady?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            <Github size={16} /> Ver mais no GitHub
          </S.MoreLink>
        </S.MoreWrap>
      </div>
    </S.Section>
  );
}
