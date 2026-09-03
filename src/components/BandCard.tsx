import Image from "next/image";
import type { Band } from "@/types/band";

type BandCardProps = {
  band: Band;
};

export default function BandCard({ band }: BandCardProps) {
  return (
    <article className="border border-purple-900/40 p-5 mb-6 rounded-xl shadow-lg bg-black text-white hover:border-purple-600 transition-all flex flex-col gap-5">
      {/* ส่วนแสดงข้อมูลวง */}
      <div className="flex flex-col md:flex-row gap-5 items-center">
        {band.image && (
          <div className="relative w-full md:w-48 h-48 flex-shrink-0 overflow-hidden rounded-lg">
            <Image
              src={band.image}
              alt={band.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 192px"
            />
          </div>
        )}

        <div className="flex-1 w-full">
          <div className="flex justify-between items-start">
            <h2 className="text-2xl font-bold text-purple-400">{band.name}</h2>
            <span className="text-xs bg-red-900/60 text-red-200 px-3 py-1 rounded-full font-medium border border-red-700/50">
              {band.genre}
            </span>
          </div>
          
          {band.description && (
            <p className="mt-2 text-gray-300 text-sm">{band.description}</p>
          )}
        </div>
      </div>

      {/* ส่วนแสดงสมาชิกพร้อมรูปโปรไฟล์ */}
      <div className="pt-4 border-t border-zinc-800">
        <h3 className="font-semibold text-xs text-gray-400 uppercase tracking-wider mb-3">
          สมาชิกในวง
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {band.members.map((member, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-3 rounded-lg bg-zinc-900 border border-purple-900/40 text-center"
            >
              {member.image ? (
                <div className="relative w-16 h-16 mb-2 overflow-hidden rounded-full border-2 border-purple-500 shadow-md">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top"
                    sizes="64px"
                  />
                </div>
              ) : (
                <div className="w-16 h-16 mb-2 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-500 text-xs border border-zinc-700">
                  No Image
                </div>
              )}
              <strong className="text-sm text-purple-200 font-medium">{member.name}</strong>
              <span className="text-xs text-gray-400 mt-0.5">{member.role}</span>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}