// queries/getProfileBanner.ts
import { ProfileBanner } from '../types';
import { profileBanner } from '../data/profileBanner';

export async function getProfileBanner(): Promise<ProfileBanner> {
  // Return local data instead of making a DatoCMS API call
  return Promise.resolve(profileBanner);
}
