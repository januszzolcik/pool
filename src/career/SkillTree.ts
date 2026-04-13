// SkillTree.ts

// Define a Skill class for the Skill Tree
class Skill {
    name: string;
    description: string;
    prerequisite: Skill | null;

    constructor(name: string, description: string, prerequisite: Skill | null = null) {
        this.name = name;
        this.description = description;
        this.prerequisite = prerequisite;
    }
}

// Define a SkillTree class to manage the skills
class SkillTree {
    private skills: Skill[];

    constructor() {
        this.skills = [];
    }

    addSkill(skill: Skill) {
        this.skills.push(skill);
    }

    getSkills() {
        return this.skills;
    }
}

// Example usage:
const skillTree = new SkillTree();
const skillA = new Skill('Skill A', 'First skill in the progression.');
const skillB = new Skill('Skill B', 'Second skill, requires Skill A.', skillA);

skillTree.addSkill(skillA);
skillTree.addSkill(skillB);
console.log(skillTree.getSkills());