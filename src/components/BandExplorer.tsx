"use client";

import { useState, type ChangeEvent } from "react";
import type { Band } from "@/types/band";
import BandCard from "@/components/BandCard";

type BandExplorerProps = {
  bands: Band[];
};

export default function BandExplorer({ bands }: BandExplorerProps) {
  const [keyword, setKeyword] = useState("");
  const [followedIds, setFollowedIds] = useState<number[]>([]);
  // เก็บเฉพาะเงื่อนไขการเรียงลำดับไว้ใน State
  const [sortBy, setSortBy] = useState<"name" | "year">("name");

  function handleKeywordChange(event: ChangeEvent<HTMLInputElement>) {
    setKeyword(event.target.value);
  }

  function handleToggleFollow(id: number) {
    setFollowedIds((prevIds) =>
      prevIds.includes(id)
        ? prevIds.filter((bandId) => bandId !== id)
        : [...prevIds, id]
    );
  }

  // ล้างเงื่อนไขทั้งหมดให้กลับสู่สถานะเริ่มต้น
  function handleResetAll() {
    setKeyword("");
    setFollowedIds([]);
    setSortBy("name");
  }

  const searchText = keyword.trim().toLowerCase();

  // กรองข้อมูลตามคำค้นหา
  const filteredBands = bands.filter((band) =>
    band.name.toLowerCase().includes(searchText)
  );

  // เรียงลำดับรายการตามชื่อวง หรือ ปีที่ก่อตั้ง (Derived State)
  const visibleBands = [...filteredBands].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name, "th");
    }
    return (a.establishedYear || 0) - (b.establishedYear || 0);
  });

  return (
    <div className="space-y-6">
      {/* แถบควบคุม: ค้นหา / เรียงลำดับ / รีเซ็ต */}
      <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
        <div className="flex flex-wrap gap-2 w-full max-w-2xl">
          <input
            type="search"
            aria-label="ค้นหาชื่อวงดนตรี"
            value={keyword}
            onChange={handleKeywordChange}
            placeholder="ค้นหาชื่อวงดนตรี..."
            className="border border-zinc-700 bg-zinc-900 px-4 py-2 rounded-lg text-white placeholder-gray-500 flex-1 min-w-[200px] focus:outline-none focus:border-purple-500"
          />

          {/* เมนูเลือกการเรียงลำดับ */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as "name" | "year")}
            className="border border-zinc-700 bg-zinc-900 px-3 py-2 rounded-lg text-white text-sm focus:outline-none focus:border-purple-500"
          >
            <option value="name">เรียงตามชื่อวง</option>
            <option value="year">เรียงตามปีก่อตั้ง</option>
          </select>

          {/* ปุ่มล้างเงื่อนไขทั้งหมด */}
          <button
            type="button"
            onClick={handleResetAll}
            className="px-3 py-2 rounded-lg text-sm bg-zinc-800 hover:bg-zinc-700 text-gray-300 border border-zinc-700 transition"
          >
            ล้างเงื่อนไขทั้งหมด
          </button>
        </div>

        <div className="text-sm text-gray-300">
          ติดตามอยู่: <strong className="text-purple-400">{followedIds.length}</strong> วง
        </div>
      </div>

      {visibleBands.length === 0 ? (
        <p className="text-gray-400 py-8 text-center bg-zinc-900/50 rounded-lg">
          ไม่พบวงดนตรีที่ตรงกับคำค้นหา
        </p>
      ) : (
        <div>
          {visibleBands.map((band) => (
            <BandCard
              key={band.id}
              band={band}
              isFollowed={followedIds.includes(band.id)}
              onToggleFollow={handleToggleFollow}
            />
          ))}
        </div>
      )}
    </div>
  );
}