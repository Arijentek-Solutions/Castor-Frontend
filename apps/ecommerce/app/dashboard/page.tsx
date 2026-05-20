"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ShoppingBag, Calendar, Award, LogOut, ArrowRight, User } from "lucide-react";
import toast from "react-hot-toast";
import axios from "axios";

export default function DashboardPage() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [user, setUser] = useState<{ name: string; email: string; role: string } | null>(null);

  useEffect(() => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "/backend";

    axios
      .get(`${apiUrl}/auth/me`, { withCredentials: true })
      .then((res) => {
        setUser(res.data.user);
        setIsAuthenticated(true);
      })
      .catch(() => {
        toast.error("Access denied. Please login first.");
        setTimeout(() => {
          router.push("/auth?mode=login");
        }, 1500);
        setIsAuthenticated(false);
      });
  }, [router]);

  const handleLogout = async () => {
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "/backend";
      await axios.post(`${apiUrl}/auth/logout`, {}, { withCredentials: true });
    } catch {
    }

    toast.success("Logged out successfully");
    setTimeout(() => {
      router.push("/auth?mode=login");
    }, 1200);
  };

  if (isAuthenticated === null) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50">
        <div className="flex flex-col items-center gap-3">
          <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-[#20a9ad]"></div>
          <p className="text-sm text-gray-500 font-medium">Checking authorization...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50">
        <p className="text-gray-500 font-medium">Redirecting to login...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-tr from-[#f8fafc] via-white to-[#f0f9fa] pt-28 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Header Section */}
        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
              Welcome Back{user?.name ? `, ${user.name.split(" ")[0]}` : ""}!
            </h1>
            <p className="mt-1 text-sm text-gray-500">
              {user?.email ?? "Manage your medical supplies, orders, and rental reservations."}
            </p>
          </div>
          <button
            onClick={handleLogout}
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm transition-all hover:bg-gray-50 hover:text-red-600 active:scale-95"
          >
            <LogOut className="h-4 w-4" />
            Sign Out
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {/* Card 1 */}
          <div className="relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:shadow-md">
            <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-teal-50 opacity-40"></div>
            <div className="flex items-center gap-4">
              <div className="rounded-xl bg-teal-50 p-3 text-[#20a9ad]">
                <ShoppingBag className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Total Orders</p>
                <h3 className="text-2xl font-bold text-gray-900 mt-0.5">0</h3>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:shadow-md">
            <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-sky-50 opacity-40"></div>
            <div className="flex items-center gap-4">
              <div className="rounded-xl bg-sky-50 p-3 text-sky-600">
                <Calendar className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Active Rentals</p>
                <h3 className="text-2xl font-bold text-gray-900 mt-0.5">0</h3>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:shadow-md">
            <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-indigo-50 opacity-40"></div>
            <div className="flex items-center gap-4">
              <div className="rounded-xl bg-indigo-50 p-3 text-indigo-600">
                <Award className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Member Points</p>
                <h3 className="text-2xl font-bold text-gray-900 mt-0.5">150</h3>
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard Content Areas */}
        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Left / Center Panels */}
          <div className="space-y-8 lg:col-span-2">
            {/* Recent Activity */}
            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-bold text-gray-900">Recent Activity</h2>
              <div className="mt-6 flex flex-col items-center justify-center py-8 text-center">
                <div className="rounded-full bg-gray-50 p-4 text-gray-400">
                  <ShoppingBag className="h-8 w-8" />
                </div>
                <h3 className="mt-4 text-sm font-semibold text-gray-900">No orders yet</h3>
                <p className="mt-1 text-sm text-gray-500">
                  When you purchase supplies or rent equipment, they will appear here.
                </p>
              </div>
            </div>
          </div>

          {/* Right Panels / Quick Links */}
          <div className="space-y-6">
            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-bold text-gray-900">Quick Actions</h2>
              <div className="mt-4 space-y-3">
                <a
                  href="/products"
                  className="flex items-center justify-between rounded-xl border border-gray-100 bg-gray-50 p-4 font-medium text-gray-700 transition-all hover:bg-gray-100/70"
                >
                  <span>Browse Medical Supplies</span>
                  <ArrowRight className="h-4 w-4 text-[#20a9ad]" />
                </a>
                <a
                  href="/rentals"
                  className="flex items-center justify-between rounded-xl border border-gray-100 bg-gray-50 p-4 font-medium text-gray-700 transition-all hover:bg-gray-100/70"
                >
                  <span>Rent Equipment</span>
                  <ArrowRight className="h-4 w-4 text-[#20a9ad]" />
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-gradient-to-br from-[#0e1b33] to-[#1a2d52] p-6 text-white shadow-md">
              <h3 className="font-bold text-lg">Need Assistance?</h3>
              <p className="mt-2 text-sm text-gray-300 leading-relaxed">
                Our support team is available 24/7 to help you coordinate your medical equipment rentals and shipping.
              </p>
              <a
                href="/contact"
                className="mt-4 inline-flex items-center justify-center gap-2 rounded-lg bg-[#20a9ad] px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all hover:bg-[#1b8f92] active:scale-95"
              >
                Contact Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
