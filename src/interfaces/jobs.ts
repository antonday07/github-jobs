export interface ISingleJob {
  id: number;
  title: string;
  thumbnail: string;
  company: string;
  location: string;
  type: string | null;
  created_time: string;
  created_at: string;
}
