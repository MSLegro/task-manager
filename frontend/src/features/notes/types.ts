export interface Note {
  id: string;
  title: string;
  description: string;
  type: "urgent" | "normal" | "recurring";
  completed: boolean;
}
