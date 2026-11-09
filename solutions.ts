const multiplyValue = (value: number, multiplier?: number) => {
    if (multiplier !== undefined) {
        return value * multiplier;
    }

    return value * 2;
}


const processInput = (value: string | number | boolean) => {
    if (typeof value === "string") {
        return value.trim().toLowerCase();
    }
    if (typeof value === "number") {
        return value * 10;
    }
    else {
        if (value == true) {
            return "Active";
        }
        else {
            return "Inactive";
        }
    }
}


const formatCoordinate = (coordinate: readonly [number, number, string]) => {
    const [latitude, longitude, locationName] = coordinate;
    return `Location: ${locationName} (${latitude}, ${longitude})`;
}


const concatenateArrays = <T>(...arrays: T[][]): T[] => {
    return arrays.flat();
}


interface Course {
    title: string,
    students: number,
    isPublished: boolean
}

const getPopularCourses = (courses: Course[], minStudents: number): Course[] => {
    return courses.filter(course => course.isPublished && course.students >= minStudents);
}


const pluckValues = <T, K extends keyof T>(items: T[], key: K): T[K][] => {
    return items.map(t => t[key]);
}

class Employee {
    protected name: string;
    private baseSalary: number;

    constructor(name: string, baseSalary: number) {
        this.name = name;
        this.baseSalary = baseSalary
    }

    getDetails(): string {
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`
    }
}

class Manager extends Employee {
    private department: string;

    constructor(name: string, baseSalary: number, department: string) {
        super(name, baseSalary);
        this.department = department;
    }

    getRoleInfo(): string {
        return `Manager of ${this.department}: ${this.name}`;
    }
}


const validateAgeAsync = (age: number): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
        if (age >= 18) {
            setTimeout(() => {
                resolve("Access Granted");
            }, 1000);
        }
        else {
            reject("Access Denied: Must be 18 or older");
        }
    });
};
