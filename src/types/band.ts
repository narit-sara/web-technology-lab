export type Member = {
  name: string;
  role: string;
  image?: string; // เพิ่มฟิลด์รูปสมาชิก (เป็น optional ใส่หรือไม่ใส่ก็ได้)
};

export type Band = {
  id: number;
  name: string;
  genre: string;
  description?: string;
  image?: string;
  members: Member[];
};