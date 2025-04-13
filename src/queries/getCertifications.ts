// queries/getCertifications.ts
import { Certification } from '../types';
import { certifications } from '../data/certifications';

export async function getCertifications(): Promise<Certification[]> {
  // Return local data instead of making a DatoCMS API call
  return Promise.resolve(certifications);
}
