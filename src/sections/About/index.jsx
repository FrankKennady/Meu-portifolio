import { Code2, Smartphone, Zap, Sparkles, Download } from 'lucide-react';
import SectionHeading from '../../components/SectionHeading/index.jsx';
import Reveal from '../../components/Reveal/index.jsx';
import { skills, stats } from '../../data/skills.js';
import AnimatedNumber from './AnimatedNumber.jsx';
import * as S from './styles.js';

const BOXES = [
  { icon: Code2, label: 'Desenvolvimento Web' },
  { icon: Smartphone, label: 'Interfaces Responsivas' },
  { icon: Zap, label: 'Performance Otimizada' },
  { icon: Sparkles, label: 'Código Limpo' },
];

export default function About() {
  return (
    <S.Section id="about">
      <div className="section-inner">
        <SectionHeading kicker="Sobre mim" title="Quem é Frank Kennady" />

        <S.Grid>
          <Reveal direction="right">
            <div>
              <S.Bio>
                Olá, sou <strong>Frank Kennady</strong>, estudante de Análise e Desenvolvimento de Sistemas e aluno
                do curso Full Stack no DevClub. Atualmente trabalho na área administrativa e com análise de dados,
                e estou em transição de carreira — com foco em Front-End, mas aberto a desafios no Back-End.
              </S.Bio>
              <S.Bio>
                Possuo uma base sólida em <strong>HTML5, CSS3 e JavaScript (ES6+)</strong>, além de{' '}
                <strong>React, Node.js e PostgreSQL</strong>. Coloco isso em prática construindo sistemas reais:
                sou autor do <strong>KS Gestão</strong> e do <strong>KS Agenda</strong>, duas plataformas SaaS
                completas, hoje usadas por negócios de verdade.
              </S.Bio>
              <S.Bio>
                Tenho experiência prática no desenvolvimento de aplicações web responsivas e acessíveis, com foco
                em UX, performance e código limpo. Proativo, autodidata e com boa comunicação, busco contribuir
                para equipes e projetos desafiadores.
              </S.Bio>

              <S.CVButton
                href="/assets/curriculo-frank-kennady.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                <Download size={16} /> Baixar Currículo
              </S.CVButton>

              <S.SkillsBox>
                <S.SkillsTitle>Stack &amp; Ferramentas</S.SkillsTitle>
                {skills.map((skill, i) => (
                  <S.SkillRow key={skill.name}>
                    <S.SkillLabel>
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </S.SkillLabel>
                    <S.SkillTrack>
                      <S.SkillFill
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 1, delay: i * 0.06, ease: 'easeOut' }}
                      />
                    </S.SkillTrack>
                  </S.SkillRow>
                ))}
              </S.SkillsBox>
            </div>
          </Reveal>

          <Reveal direction="left" delay={0.1}>
            <div>
              <S.StatsRow>
                {stats.map((stat, i) => (
                  <AnimatedNumber key={stat.label} value={stat.value} suffix={stat.suffix} label={stat.label} delay={i * 0.08} />
                ))}
              </S.StatsRow>

              <S.BoxGrid>
                {BOXES.map(({ icon: Icon, label }, i) => (
                  <S.Box
                    key={label}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.5 }}
                    whileHover={{ y: -5 }}
                  >
                    <S.IconWrap>
                      <Icon size={20} />
                    </S.IconWrap>
                    <S.BoxLabel>{label}</S.BoxLabel>
                  </S.Box>
                ))}
              </S.BoxGrid>
            </div>
          </Reveal>
        </S.Grid>
      </div>
    </S.Section>
  );
}
