import React from "react";

function Skills() {
  return (
    <div>
      <form action="">
        <label for="skill">Skill</label>
        <input
          type="text"
          id="skill"
          name="skill"
          placeholder="Enter your skill"
        />
        <br />
        <label for="skill">Information/Sub-skills</label>
        <input
          type="text"
          id="skill"
          name="skill"
          placeholder="Enter your sub-skills"
        />
        <br />
        <button>Cancel</button>
        <button>Save</button>
      </form>
    </div>
  );
}

export default Skills;
