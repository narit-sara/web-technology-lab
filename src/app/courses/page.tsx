import CounterDemo from "@/components/CounterDemo";
import CourseExplorer from "@/components/CourseExplorer";
import type { Course } from "@/types/course";

// ประกาศข้อมูลวิชาพร้อมระบุ Type ให้ตรงกับ CourseExplorer
const courses: Course[] = [
  {
    id: 1,
    code: "10301231",
    title: "เว็บเทคโนโลยี",
    credits: 3,
    isOpen: true,
  },
  {
    id: 2,
    code: "10301202",
    title: "โครงสร้างข้อมูล",
    credits: 3,
    isOpen: true,
  },
  {
    id: 3,
    code: "10301245",
    title: "ระบบฐานข้อมูล",
    credits: 3,
    isOpen: false,
  },
  {
    id: 4,
    code: "10301321",
    title: "วิศวกรรมซอฟต์แวร์",
    credits: 3,
    isOpen: true,
  },
];

export default function CoursesPage() {
  return (
    <div className="p-4 space-y-4">
      <p>ปุ่มทดลอง</p>

      <div className="flex flex-col items-start gap-1 my-2">
        <CounterDemo />
      </div>

      <CourseExplorer courses={courses} />
    </div>
  );
}