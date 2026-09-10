"use client";

import { useState } from "react";
import Image from "next/image";
import type { Band } from "@/types/band";

type BandCardProps = {
  band: Band;
  isFollowed: boolean;
  onToggleFollow: (id: number) => void;
};

export default function BandCard({
  band,
  isFollowed,
  onToggleFollow,
}: BandCardProps) {
  const [likes, setLikes] = useState(0);

  // คำนวณจำนวนสมาชิกจากข้อมูลที่มีอยู่แล้ว (ไม่สร้าง State ใหม่)
  const memberCount = band.members ? band.members.length : 0;

  return (
    <article className="border border-purple-900/50 bg-black/40 rounded-xl p-6 mb-6 text-white relative">
      <div className="flex gap-6 items-start">
        {band.image && (
          <div className="relative w-40 h-40 rounded-lg overflow-hidden flex-shrink-0">
            <Image
              src={band.image}
              alt={band.name}
              fill
              className="object-cover"
            />
          </div>
        )}

        <div className="flex-1">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-2xl font-bold text-purple-400">{band.name}</h2>
              {/* แสดงจำนวนสมาชิกของแต่ละวง */}
              <p className="text-xs text-purple-300 mt-1">
                จำนวนสมาชิก: <strong>{memberCount}</strong> คน
              </p>
            </div>
            {band.genre && (
              <span className="text-xs bg-red-950/80 text-red-400 border border-red-800 px-3 py-1 rounded-full">
                {band.genre}
              </span>
            )}
          </div>

          {band.description && (
            <p className="text-gray-300 mt-2 text-sm">{band.description}</p>
          )}

          <div className="flex items-center gap-3 mt-4">
            <button
              type="button"
              onClick={() => setLikes(likes + 1)}
              className="text-xs bg-zinc-800 hover:bg-zinc-700 text-white px-3 py-1.5 rounded-lg border border-zinc-700 transition"
            >
              ❤️ Like {likes}
            </button>

            <button
              type="button"
              onClick={() => onToggleFollow(band.id)}
              className={`text-xs px-4 py-1.5 rounded-lg font-medium transition ${
                isFollowed
                  ? "bg-red-600 hover:bg-red-700 text-white"
                  : "bg-purple-600 hover:bg-purple-700 text-white"
              }`}
            >
              {isFollowed ? "เลิกติดตาม" : "ติดตาม"}
            </button>
          </div>
        </div>
      </div>

      {band.members && band.members.length > 0 && (
        <div className="mt-6 pt-4 border-t border-zinc-800">
          <h3 className="text-xs font-semibold text-gray-400 mb-3">สมาชิกในวง</h3>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            {band.members.map((member, idx) => {
              const isNeedsAdjustment =
                member.name.includes("ฮง") || member.name.includes("ตุ้ย");

              return (
                <div
                  key={member.id || idx}
                  className="bg-zinc-900/80 border border-zinc-800/80 rounded-lg p-3 text-center flex flex-col items-center"
                >
                  {member.image && (
                    <div className="relative w-20 h-20 rounded-full overflow-hidden mb-2 border-2 border-purple-500">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className={`object-cover ${
                          isNeedsAdjustment
                            ? "scale-125 -translate-y-1 object-center"
                            : "object-top"
                        }`}
                      />
                    </div>
                  )}
                  <p className="font-semibold text-xs text-white">{member.name}</p>
                  {member.role && (
                    <p className="text-[10px] text-gray-400 mt-0.5">{member.role}</p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </article>
  );
}