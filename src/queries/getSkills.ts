// queries/getSkills.ts
import { Skill } from '../types';
import { skills } from '../data/skills';

export async function getSkills(): Promise<Skill[]> {
  // Return local data instead of making a DatoCMS API call
  return Promise.resolve(skills);
}
