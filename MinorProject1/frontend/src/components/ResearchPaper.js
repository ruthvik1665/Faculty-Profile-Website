import React, { useState } from "react";

const ResearchPapersComponent = ({ email }) => {
  const [researchPaper, setResearchPaper] = useState({
    title: "",
    author: "",
    year: "",
    description: "",
  });

  const handleAddResearchPaper = async () => {
    const { title, author, year, description } = researchPaper;

    if (
      title.trim() !== "" &&
      author.trim() !== "" &&
      year.trim() !== "" &&
      description.trim() !== ""
    ) {
      try {
        const response = await fetch(
          "http://localhost:8001/api/addResearchPaper",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, researchPaper }), // pass researchPaper directly
          }
        );

        if (response.ok) {
          console.log("Research paper added successfully!");
          // Optionally, you can fetch updated research papers and update the UI
        } else {
          console.error("Failed to add research paper.");
        }
      } catch (error) {
        console.error("Error adding research paper:", error);
      }
    } else {
      console.warn("All fields must be filled out.");
    }
  };

  return (
    <div>
      <h3>Add Research Paper</h3>
      <label>Title:</label>
      <input
        type="text"
        value={researchPaper.title}
        onChange={(e) =>
          setResearchPaper({ ...researchPaper, title: e.target.value })
        }
      />

      <label>Author:</label>
      <input
        type="text"
        value={researchPaper.author}
        onChange={(e) =>
          setResearchPaper({ ...researchPaper, author: e.target.value })
        }
      />

      <label>Year:</label>
      <input
        type="text"
        value={researchPaper.year}
        onChange={(e) =>
          setResearchPaper({ ...researchPaper, year: e.target.value })
        }
      />

      <label>Description:</label>
      <textarea
        value={researchPaper.description}
        onChange={(e) =>
          setResearchPaper({ ...researchPaper, description: e.target.value })
        }
      ></textarea>

      <button onClick={handleAddResearchPaper}>Add Research Paper</button>
    </div>
  );
};

export default ResearchPapersComponent;