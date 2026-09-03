type Course = {
  id: number;
  code: string;
  title: string;
  credits: number;
  isOpen: boolean;
};

type CourseCardProps = {
  course: Course;
  index?: number;
};

export default function CoursesCard({ course }: CourseCardProps) {
  return (
    <>
      <article key={course.id} className="border p-4 mb-4 rounded-lg shadow-md">
        <h2>{course.title}</h2>
        <p>รหัสวิชา: {course.code}</p>
        <p>{course.credits} หน่วยกิต</p>
        <p className={course.isOpen ? "font-bold text-green-600" : "font-bold text-red-600"}>
          {course.isOpen ? "เปิดลงทะเบียน" : "ปิดลงทะเบียน"}
        </p>
      </article>
    </>
  );
}