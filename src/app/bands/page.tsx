import BandExplorer from "@/components/BandExplorer";
import { bands } from "@/data/bandsdata"; // หรือไฟล์เก็บข้อมูลวงดนตรีที่มีอยู่

export default function BandsPage() {
  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">วงดนตรีทั้งหมด</h1>
      <BandExplorer bands={bands} />
    </main>
  );
}