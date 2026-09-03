import BandCard from "@/components/BandCard";
import { bands } from "@/data/bandsdata";

export default function BandsPage() {
  return (
    <main className="p-6 max-w-4xl mx-auto min-h-screen bg-black">
      <h1 className="text-3xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-red-500">
        วงดนตรีที่ชอบ (Favorite Bands)
      </h1>
      <section className="grid gap-4">
        {bands.map((band) => (
          <BandCard key={band.id} band={band} />
        ))}
      </section>
    </main>
  );
}