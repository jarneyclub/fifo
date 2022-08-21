// A mock function to mimic making an async request for data
export function fetchCourses(userID = 1) {
  return new Promise<{ data: number }>((resolve) =>
    setTimeout(() => resolve({ data: userID }), 500)
  );
}