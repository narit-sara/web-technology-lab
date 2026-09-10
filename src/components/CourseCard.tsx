import type { Course } from "@/types/course";

type CourseCardProps = {
  course: Course;
  isFavorite: boolean;
  onToggleFavorite: (id: number) => void;
};

export default function CourseCard({
  course,
  isFavorite,
  onToggleFavorite,
}: CourseCardProps) {
  return (
    <article className="border p-4 rounded mb-2 bg-black/20 text-white">
      <h2 className="text-xl font-bold">{course.title}</h2>
      <p>รหัสวิชา: {course.code}</p>
      <p>{course.credits} หน่วยกิต</p>
      <p className={course.isOpen ? "text-green-400" : "text-red-400"}>
        {course.isOpen ? "เปิดลงทะเบียน" : "ปิดลงทะเบียน"}
      </p>
      <button
        type="button"
        aria-pressed={isFavorite}
        onClick={() => onToggleFavorite(course.id)}
        className="mt-2 px-3 py-1 bg-purple-600 hover:bg-purple-700 text-white rounded"
      >
        {isFavorite ? "อยู่ในรายการโปรด" : "เพิ่มเป็นรายการโปรด"}
      </button>
    </article>
  );
}