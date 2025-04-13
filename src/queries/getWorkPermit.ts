// queries/getWorkPermit.ts
import { WorkPermit } from '../types';
import { workPermit } from '../data/workPermit';

export async function getWorkPermit(): Promise<WorkPermit> {
  // Return local data instead of making a DatoCMS API call
  return Promise.resolve(workPermit);
}
