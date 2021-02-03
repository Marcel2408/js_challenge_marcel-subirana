export interface Item {
  id: string;
  coverImageUrl: string;
  title: string;
  description: string;
  discount: number;
  fullPrice: string | null;
  finalPrice: string;
}
