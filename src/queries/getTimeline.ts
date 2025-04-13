// queries/getTimeline.ts
import { TimelineItem } from '../types';
import { timeline } from '../data/timeline';

export async function getTimeline(): Promise<TimelineItem[]> {
  // Return local data instead of making a DatoCMS API call
  return Promise.resolve(timeline);
}
