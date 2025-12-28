/**
 * Type definitions for data.json
 * Auto-inferred from JSON structure for type-safe access
 */

export interface Profile {
  name: string;
  tagline: string;
  photo: string;
  contacts: {
    telegram: string;
    email: string;
    phone: string;
  };
}

export interface Project {
  id: string;
  type: "project";
  title: string;
  cardColor: string;
  logo: string;
  description: string;
  website: string;
  hidden?: boolean;
}

export interface Stack {
  id: string;
  type: "stack";
  title: string;
  cardColor: string;
  count: number;
  items: string[]; // StackItemId[]
  hidden?: boolean;
}

export interface StackItem {
  id: string;
  type: "project";
  title: string;
  cardColor: string;
  logo: string;
  description: string;
  website: string;
  hidden?: boolean;
}

export interface DataStructure {
  profile: Profile;
  walletOrder: string[]; // (ProjectId | StackId)[]
  projects: Record<string, Project>;
  stacks: Record<string, Stack>;
  stackItems: Record<string, StackItem>;
}

// Type-safe ID types
export type ProjectId = keyof DataStructure["projects"];
export type StackId = keyof DataStructure["stacks"];
export type StackItemId = keyof DataStructure["stackItems"];
export type WalletId = ProjectId | StackId;
