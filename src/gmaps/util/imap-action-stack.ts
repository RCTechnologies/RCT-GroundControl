import { IMapAction } from './imap-action';

// interface should contain the following:
// * private stack
// * public push()
// * public pop()
// * public getSize()
// * public isEmpty()

export interface IMapActionStack{
    // Contains all the snapshots of type IMapAction
    stack: Array<IMapAction>;

    // Pushes an instance of type IMapAction to the stack
    push(mapAction: IMapAction): void;

    // Pop's and returns the latest added instance of IMapAction, added to the stack
    pop(): IMapAction | undefined;

    // Returns the size of the stack
    getSize(): number;

    // Returns true || false whether the stack is empty
    isEmpty(): boolean;
    
}