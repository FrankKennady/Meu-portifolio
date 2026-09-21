import { Github, ExternalLink } from 'lucide-react';
import * as S from './styles.js';

export default function ProjectCard({ project, index = 0 }) {
  return (
    <S.Card
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
      whileHover={{ y: -8 }}
    >
      <S.CardImageWrap>
        <img
          src={project.capa}
          alt={project.titulo}
          loading="lazy"
          onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.08)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
        />
      </S.CardImageWrap>
      <S.CardBody>
        <S.CardTitle>{project.titulo}</S.CardTitle>
        <S.CardText>{project.sintese}</S.CardText>
        <S.CardStack>
          {project.stack.map((tech) => (
            <S.CardChip key={tech}>{tech}</S.CardChip>
          ))}
        </S.CardStack>
        <S.CardLinks>
          <S.CardLink href={project.linkgithub} target="_blank" rel="noopener noreferrer">
            <Github size={14} /> Código
          </S.CardLink>
          <S.CardLink href={project.linkdeploy} target="_blank" rel="noopener noreferrer">
            <ExternalLink size={14} /> Ver
          </S.CardLink>
        </S.CardLinks>
      </S.CardBody>
    </S.Card>
  );
}
