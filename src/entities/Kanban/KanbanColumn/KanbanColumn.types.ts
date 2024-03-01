import { UniqueIdentifier } from "@dnd-kit/core";

export interface IKanbanColumn {
    id: UniqueIdentifier;
    children: React.ReactNode;
    title?: string;
    description?: string;
    onAddItem?: () => void;
}