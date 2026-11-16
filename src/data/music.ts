export interface Recording {
  title: string;
  composer: string;
  date?: string;
  location?: string;
  media: { type: 'youtube' | 'audio'; source: string };
}
export const recordings: Recording[] = [];
export const performances: { title: string; date: string; location: string; program?: string }[] = [];
