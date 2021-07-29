import React, { useEffect, useState } from "react";
import { getUserProfile } from "api";
import { User } from "models/_users";

export const UserHeaderFallback = () => (
  <div>
    <p className="text-lg text-red-500">Loading header</p>
  </div>
);

export default function UserHeader({ username }: { username: string }) {
  const [profile, setProfile] = useState<User | null>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        setProfile(null);

        const result = await getUserProfile(username);
        setProfile(result);
      } catch (err) {
        console.error("Error ", err);
      }
    };

    fetchProfile();
  }, []);

  if (!profile) {
    return null;
  }

  return (
    <div id="user-badge" className="mb-8">
      <div className="flex flex-col items-center p-4">
        <p className="text-white text-xl">
          {profile?.name} (@{profile?.login})
        </p>
        <p className="text-white text-lg">{profile?.location}</p>
      </div>
    </div>
  );
}
