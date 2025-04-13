// queries/getProjects.ts
import { Project } from '../types';
import { projects } from '../data/projects';

export async function getProjects(): Promise<Project[]> {
  // Return local data instead of making a DatoCMS API call
  return Promise.resolve(projects);
}
