export interface ISingleJob {
  id: number;
  title: string;
  thumbnail: string;
  company: string;
  location: string;
  type: string | null;
  created_at: string;
}
