/*export type CanvasState = 
    | {
        mode: CanvasMode.None;
    }
*/

export enum LayerType {
    Text,
    Note,
    Template,
    Rectangle,
    Square,
    Circle,
    Sharpsquare,
    Thinking,
    Triangle,
    Arrowleft,
    Arrowdown,
    Arrowright,
    Standpr,
    Triangledarrow,
    Linedarrow,
    Combin,
    IdeasRectRaffin,
    RaffinementColumns,
    RoundedRect,
    IdeasRectCombin,
    PriorityMoscow,
    IdeasRectMoscow
};


export enum Side {
    Top = 1,
    Bottom = 2,
    Left = 4,
    Right = 8,
}

export enum CanvasMode {
    None,
    Pressing,
    SelectionNet,
    Translating,
    Inserting,
    Resizing,
    //Pencil,
};




