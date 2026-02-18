// app/lib/database.types.ts

export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: {
          epic_account_id: string;
          display_name: string | null;
          avatar_url: string | null;
          last_login_at: string | null;
        };
        Insert: {
          epic_account_id: string;
          display_name?: string | null;
          avatar_url?: string | null;
          last_login_at?: string | null;
        };
        Update: {
          epic_account_id?: string;
          display_name?: string | null;
          avatar_url?: string | null;
          last_login_at?: string | null;
        };
        Relationships: [];
      };
    };
    Views: {};
    Functions: {};
    Enums: {};
    CompositeTypes: {};
  };
};
