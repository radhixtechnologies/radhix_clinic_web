"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Search, 
  Bell, 
  Moon, 
  Sun, 
  ShieldCheck, 
  Sparkles, 
  Check, 
  UserCheck, 
  Building,
  RotateCcw
} from "lucide-react";
import { clinicStore } from "@/lib/store";

export default function AdminTopbar() {
  const [role, setRole] = useState("Clinic Admin");
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [selectedClinic, setSelectedClinic] = useState("Radhix Clinic (Faridabad)");

  const handleResetData = () => {
    if (confirm("Reset demo data to default clean state?")) {
      clinicStore.resetToDemoData();
      window.location.reload();
    }
  };

  return (
    <header className="h-20 px-6 bg-white dark:bg-slate-900 border-b border-slate-200/80 dark:border-slate-800 flex items-center justify-between gap-4 sticky top-0 z-30">
      
      {/* Clinic Selector & Breadcrumb */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-bold text-slate-800 dark:text-slate-200">
          <Building className="w-4 h-4 text-blue-600" />
          <select
            value={selectedClinic}
            onChange={(e) => setSelectedClinic(e.target.value)}
            className="bg-transparent border-none outline-none cursor-pointer"
          >
            <option value="Radhix Clinic (Faridabad)">Radhix Clinic (Vipul Plaza, Faridabad)</option>
            <option value="Radhix MediCare Centre (Pune)">Radhix MediCare (Pune)</option>
          </select>
        </div>
      </div>

      {/* Right Controls */}
      <div className="flex items-center gap-3">
        
        {/* Reset Demo Data button */}
        <button
          onClick={handleResetData}
          title="Reset sample data"
          className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-semibold"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Reset Demo</span>
        </button>

        {/* Demo Role Switcher */}
        <div className="hidden md:flex items-center gap-1 px-2.5 py-1 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs text-amber-700 dark:text-amber-300">
          <Sparkles className="w-3.5 h-3.5 text-amber-500" />
          <span className="font-bold">Role:</span>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="bg-transparent font-bold outline-none cursor-pointer text-amber-800 dark:text-amber-300"
          >
            <option value="Clinic Admin">Clinic Admin</option>
            <option value="Super Admin (Radhix)">Super Admin (Radhix)</option>
            <option value="Receptionist">Receptionist</option>
            <option value="Doctor">Doctor</option>
          </select>
        </div>

        {/* Notification Bell */}
        <div className="relative">
          <button
            onClick={() => setNotificationsOpen(!notificationsOpen)}
            className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 relative"
          >
            <Bell className="w-4 h-4" />
            <span className="w-2 h-2 rounded-full bg-rose-500 absolute top-2 right-2 ring-2 ring-white dark:ring-slate-900" />
          </button>

          {notificationsOpen && (
            <div className="absolute right-0 mt-2 w-80 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl space-y-3 z-50">
              <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800">
                <span className="text-xs font-bold text-slate-900 dark:text-white">Recent Activity</span>
                <span className="text-[10px] text-teal-600 font-bold">Mark all read</span>
              </div>
              <div className="space-y-2 text-xs">
                <div className="p-2 rounded-xl bg-blue-50/60 dark:bg-blue-950/40">
                  <p className="font-bold text-slate-800 dark:text-slate-200">New Booking: RDX-2026-013</p>
                  <p className="text-slate-500 text-[11px]">Rohan Bhatia booked Dr. Amit Verma</p>
                </div>
                <div className="p-2 rounded-xl bg-emerald-50/60 dark:bg-emerald-950/40">
                  <p className="font-bold text-slate-800 dark:text-slate-200">Razorpay Payment Captured</p>
                  <p className="text-slate-500 text-[11px]">₹800 received for RDX-2026-009</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Admin Avatar */}
        <div className="flex items-center gap-2 pl-2">
          <img
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
            alt="Admin"
            className="w-9 h-9 rounded-xl object-cover ring-2 ring-blue-600/30"
          />
          <div className="hidden lg:block text-left">
            <span className="text-xs font-bold text-slate-900 dark:text-white block leading-tight">Admin Demo</span>
            <span className="text-[10px] text-slate-400 font-medium">{role}</span>
          </div>
        </div>
      </div>
    </header>
  );
}
