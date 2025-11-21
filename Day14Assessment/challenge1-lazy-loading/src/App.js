import React, { Suspense, useState } from "react";
import Loader from "./Loader";

const CourseDetails = React.lazy(() => import("./components/CourseDetails"));
const InstructorProfile = React.lazy(() => import("./components/InstructorProfile"));

function App() {
  const [showCourse, setShowCourse] = useState(false);
  const [showInstructor, setShowInstructor] = useState(false);

  return (
    <div style={{ padding: 20 }}>
      <h1>Lazy Loading Demo</h1>

      <button onClick={() => setShowCourse(true)}>View Course Details</button>
      <button onClick={() => setShowInstructor(true)} style={{ marginLeft: 10 }}>
        View Instructor Profile
      </button>

      <Suspense fallback={<Loader />}>
        {showCourse && <CourseDetails />}
        {showInstructor && <InstructorProfile />}
      </Suspense>
    </div>
  );
}

export default App;
