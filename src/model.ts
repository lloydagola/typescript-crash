export interface TodoModel{
    id:number;
    todo: string;
    isDone: boolean;
}

export type Event = React.ChangeEvent<HTMLInputElement>;