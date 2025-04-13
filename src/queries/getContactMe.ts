// queries/getContactMe.ts
import { ContactMe } from '../types';
import { contactMe } from '../data/contactMe';

export async function getContactMe(): Promise<ContactMe> {
  // Return local data instead of making a DatoCMS API call
  return Promise.resolve(contactMe);
}
