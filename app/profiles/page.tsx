import { supabase } from "@/app/lib/supabase";

export default async function ProfilesPage() {
  const { data, error } = await supabase
    .from("profiles")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(1);

  if (error) {
    return (
      <div style={{ padding: 40, color: "red" }}>
        Erreur Supabase: {error.message}
      </div>
    );
  }

  if (!data || data.length === 0) {
    return (
      <div style={{ padding: 40, color: "white" }}>
        Aucun profils trouvé
      </div>
    );
  }

  const profile = data[0];

  return (
    <div style={{ padding: 40, color: "white" }}>
      <h1>Profils LYOST</h1>
      <p><strong>Epic ID:</strong> {profile.epic_account_id}</p>
      <p><strong>Nom:</strong> {profile.display_name}</p>
      <p><strong>Dernière connexion:</strong> {profile.last_login_at}</p>
    </div>
  );
}
