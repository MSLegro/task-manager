export interface Note {
  id: string;
  title: string;
  description: string;
  type: "urgent" | "normal" | "recurring";
  completed: boolean;
}

export const priorityOrder = {
  urgent: 1,
  normal: 2,
  recurring: 3,
};
