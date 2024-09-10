"use client";

import { useEffect, useState } from "react";

interface Course {
  id: number;
  subject: string;
  courseNumber: string;
}

export default function Home() {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    async function fetchCourses() {
      const response = await fetch("https://localhost:7249/api/courses");
      const data = await response.json();
      setCourses(data);
    }

    fetchCourses();
  });

  return (
    <main className="h-full">
      <ul className="flex flex-col items-center p-20 h-full gap-1">
        {courses.map((course) => (
          <li key={course.id}>
            {course.subject}
            {course.courseNumber}
          </li>
        ))}
      </ul>
    </main>
  );
}
