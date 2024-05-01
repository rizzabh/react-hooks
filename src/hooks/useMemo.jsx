import React, { useState, useMemo } from "react";

const UseMemo = () => {
  const [showContent, setShowContent] = useState(false);
  const [clear, setClear] = useState(false);
  const delayedContent = useMemo(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 5000); // Delay for 5 seconds

    return () => setClear(true); // Cleanup function to clear the timeout
  }, [clear]); // No dependencies, runs only once

  return (
    <div className="card">
      <h1>useMemo</h1>
      <p>
        So let us say we want to compute a very large problem and over here its
        nothing but just a delay of 5 seconds Once the computation is done im
        memoizing it in delayedContent.
      </p>
      <button
        onClick={() => {
          window.location.reload();
        }}
      >
        refresh
      </button>
      {showContent ? (
        <p>Content rendered after 5 seconds!</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default UseMemo;
