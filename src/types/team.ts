export interface User {
    id: string;
    name: string;
    role: string;
};

export interface Team {
    id: string;
    name: string;
    description: string;
    leader: string;
    users: User[];
};

// TeamItem Props
export type TeamItemProps = {
    team: Team;
    handleOpenUserModal: (teamId: string) => void;
}

// Types for Team Form - TeamScreen.tsx
export type NewTeam = Pick<Team, "name" | "description" | "leader">;

// Types for User Form - TeamList.tsx
export type NewUser = Pick<User, "name" | "role">;

// Using void to prevent TypeScript from treating the return type as any
export type TeamContextType = {
    teams: Team[];
    addTeam: (team: NewTeam) => void;
    addUser: (teamId: string, user: NewUser) => void;
    removeUser: (teamId: string, userId: string) => void;
};
  