function extractAndConvert<T extends object, U extends keyof T>(
    obj: T,
    key: U
) {
    return 'Value: ' + obj[key];
}

extractAndConvert({ name: 'Max' }, 'name');

// Generic Classes

class DataStorage<T extends string | number | boolean> {
    private data: T[] = [];

    addItem(item: T) {
        this.data.push(item);
    }

    removeItem(item: T) {
        if (this.data.indexOf(item) === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1);
    }

    getItems() {
        return [...this.data];
    }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('Max');
textStorage.addItem('Manu');
textStorage.removeItem('Max');
console.log(textStorage.getItems());

// const obsStorage = new DataStorage<object>();
// obsStorage.addItem({ name: 'Max' });
// obsStorage.addItem({ name: 'Manu' });

// obsStorage.removeItem({ name: 'Max' });

interface CourseGoal {
    title: string;
    description: string;
    completeUntil: Date;
}

function createCourseGoal(
    title: string,
    description: string,
    date: Date
): CourseGoal {
    let courseGoal: Partial<CourseGoal> = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal as CourseGoal;
}

const names: Readonly<string[]> = ['Max', 'Anna'];
