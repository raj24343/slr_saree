"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    if (!name.trim() || !username.trim() || password.length < 6) {
      setError("Please fill all fields. Password must be at least 6 characters.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/admin/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, username, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data?.error || "Signup failed");
      } else {
        setSuccess("Signup successful. Redirecting to sign in...");
        setTimeout(() => router.push("/admin/signin"), 900);
      }
    } catch {
      setError("Network error. Try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-md p-8">
        <h1 className="text-2xl font-semibold text-center mb-6 text-black">
          Create Admin
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium mb-1 text-black">
              Name
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-lg border px-4 py-2 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Your full name"
              type="text"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-black">
              Username
            </label>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full rounded-lg border px-4 py-2 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="admin username"
              type="text"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-black">
              Password
            </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-lg border px-4 py-2 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="At least 6 characters"
              type="password"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition disabled:opacity-60"
          >
            {loading ? "Creating..." : "Create Admin"}
          </button>
        </form>

        {error && (
          <p className="text-sm text-red-600 mt-4 text-center">{error}</p>
        )}
        {success && (
          <p className="text-sm text-green-600 mt-4 text-center">{success}</p>
        )}

        <p className="text-center text-sm text-gray-600 mt-4">
          Already created?{" "}
          <a href="/admin/signin" className="font-medium text-black">
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
}
