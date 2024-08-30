function skillsMember() {
  return {
    skills: ["HTML", "CSS", "JavaScript"],
    showSkills: function() {
      this.skills.forEach((skill) => {
        console.log(`${skill} is a skill`);
      });
    },
  };
}