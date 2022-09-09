export interface Category {
    id?: number;
    name: string;
    active?: boolean;
    created_at?: { date: string };
    updated_at?: { date: string };
}

export interface Tag {
    id?: number
    name: string
    label?: string
    created_at?: { date: string };
    updated_at?: { date: string };
}

export interface User {
    id?: number;
    name: string;
    email: string;
    phone?: string
    company_id?: string
    active?: boolean;
    created_at?: { date: string };
    updated_at?: { date: string };
}