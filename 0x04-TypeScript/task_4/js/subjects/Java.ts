namespace Subjects {
    export interface Teacher {
        experienceTeachingJava?: number;
    }

    export class Java extends Subject {
        getRequirements(): string {
            return "";
        }
        getAvailableTeacher(): string {
            if (!this.teacher.experienceTeachingJava) {
            return "No available teacher";
        }
        return `Available Teacher: ${this.teacher.firstName}`;
    }
}
}
