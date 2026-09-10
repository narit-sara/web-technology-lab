"use client";

import { useState, type ChangeEvent } from "react";
import type { Course } from "@/types/course";
import CourseCard from "@/components/CourseCard";

type CourseExplorerProps = {
  courses: Course[];
};

export default function CourseExplorer({ courses }: CourseExplorerProps) {
  const [keyword, setKeyword] = useState("");
  const [favoriteIds, setFavoriteIds] = useState<number[]>([]);
  const [onlyFavorite, setOnlyFavorite] = useState(false);

  function handleKeywordChange(event: ChangeEvent<HTMLInputElement>) {
    setKeyword(event.target.value);
  }

  function handleToggleFavorite(id: number) {
    setFavoriteIds((prevIds) =>
      prevIds.includes(id)
        ? prevIds.filter((favoriteId) => favoriteId !== id)
        : [...prevIds, id]
    );
  }

  const searchText = keyword.trim().toLowerCase();
  const visibleCourses = courses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchText) ||
      course.code.includes(searchText);
    const matchesFavorite = onlyFavorite
      ? favoriteIds.includes(course.id)
      : true;
    return matchesSearch && matchesFavorite;
  });

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
        <input
          type="search"
          aria-label="ค้นหารายวิชา"
          value={keyword}
          onChange={handleKeywordChange}
          placeholder="ค้นหาชื่อวิชาหรือรหัสวิชา"
          className="border px-3 py-2 rounded text-black bg-white w-full max-w-md"
        />

        <button
          type="button"
          onClick={() => setOnlyFavorite(!onlyFavorite)}
          className={`px-3 py-2 rounded text-sm ${
            onlyFavorite ? "bg-red-600 text-white" : "bg-gray-700 text-white"
          }`}
        >
          {onlyFavorite ? "แสดงทั้งหมด" : "แสดงเฉพาะรายการโปรด"}
        </button>

        <span className="text-sm">
          รายการโปรด: <strong>{favoriteIds.length}</strong> วิชา
        </span>
      </div>

      {visibleCourses.length === 0 ? (
        <p className="text-gray-400 py-4">ไม่พบรายวิชาที่ตรงกับเงื่อนไข</p>
      ) : (
        <section>
          {visibleCourses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              isFavorite={favoriteIds.includes(course.id)}
              onToggleFavorite={handleToggleFavorite}
            />
          ))}
        </section>
      )}
    </div>
  );
}