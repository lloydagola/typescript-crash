export interface Todo{
    id:number;
    todo: string;
    isDone: boolean;
}

export type Event = React.ChangeEvent<HTMLInputElement>;