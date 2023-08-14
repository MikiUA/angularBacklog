import { Tag } from "./TagType";

export interface NewTask {
    label: string,
    description?: string,
    priority?: number,
    tags?: Tag[]
}

export class Task {
    // id:number;
    label: string;
    description?: string;
    priority: number;
    created: number;
    updated?: number;
    tags: Tag[]

    constructor(data: NewTask) {
        this.label = data.label;
        this.description = data.description;
        this.priority = data.priority || 0;
        this.created = Date.now();
        this.tags = data.tags || [];
    }
    update(data: Task) {
        this.label = data.label;
        this.description = data.description;
        this.priority = data.priority;
        this.created = data.created;
        this.updated = Date.now();
        this.tags = data.tags || this.tags;
    }
}
