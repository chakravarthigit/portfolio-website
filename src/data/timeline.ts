import { TimelineItem } from '../types';

export const timeline: TimelineItem[] = [
  {
    timelineType: 'work',
    name: "TechMark",
    title: "Generative AI Intern",
    techStack: "Generative AI, NLP, Python, GPT-3.5",
    summaryPoints: [
      "Worked on building and fine-tuning GPT-based models for text generation tasks",
      "Developed a Personal Email Assistant using GPT-3.5 for tone-adjustable professional emails",
      "Collaborated with senior AI engineers to implement prompt engineering best practices"
    ],
    dateRange: "Jan 2025 - Mar 2025"
  }, // <- This comma was missing

  {
    timelineType: 'education',
    name: "SRK Institute of Technology",
    title: "B.Tech in Computer Science and Engineering",
    techStack: "Artificial Intelligence, Machine Learning",
    summaryPoints: [
      "Thesis on Plant Disease Detection",
      "Published research paper on International Journal of Innovative Research in Technology "
    ],
    dateRange: "Jun 2021 - May 2025"
  }
];
