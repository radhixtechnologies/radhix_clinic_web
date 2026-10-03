export type UserRole = "super_admin" | "clinic_admin" | "receptionist" | "doctor";

export type AppointmentStatus = "pending" | "confirmed" | "completed" | "cancelled" | "no_show";

export type PaymentStatus = "paid" | "due" | "refunded";

export type PaymentMethod = "online" | "pay_at_clinic";

export interface Clinic {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  logo_url?: string;
  brand_color: string;
  accent_color: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  phone: string;
  email: string;
  opening_time: string;
  closing_time: string;
  advance_booking_days: number;
  cancellation_window_hours: number;
  razorpay_key_id?: string;
  razorpay_test_mode: boolean;
  is_active: boolean;
}

export interface DoctorSchedule {
  day_of_week: number; // 0=Sun, 1=Mon, ..., 6=Sat
  start_time: string; // "09:00"
  end_time: string; // "18:00"
  is_working: boolean;
}

export interface DoctorLeave {
  id: string;
  doctor_id: string;
  start_date: string; // YYYY-MM-DD
  end_date: string;
  reason?: string;
}

export interface Doctor {
  id: string;
  clinic_id: string;
  name: string;
  email: string;
  phone: string;
  specialty: string;
  qualification: string;
  experience_years: number;
  consultation_fee: number;
  bio: string;
  avatar_url: string;
  slot_duration_minutes: number;
  break_start_time?: string;
  break_end_time?: string;
  rating: number;
  review_count: number;
  is_active: boolean;
  schedules?: DoctorSchedule[];
}

export interface Service {
  id: string;
  clinic_id: string;
  name: string;
  department: string;
  description: string;
  fee: number;
  duration_minutes: number;
  is_active: boolean;
}

export interface Patient {
  id: string;
  clinic_id: string;
  full_name: string;
  phone: string;
  email?: string;
  age?: number;
  gender?: string;
  blood_group?: string;
  address?: string;
  medical_notes?: string;
  created_at: string;
}

export interface Appointment {
  id: string;
  booking_id: string;
  clinic_id: string;
  doctor_id: string;
  doctor_name?: string;
  doctor_specialty?: string;
  doctor_avatar?: string;
  service_id?: string;
  service_name?: string;
  patient_id: string;
  patient_name: string;
  patient_phone: string;
  patient_email?: string;
  patient_age?: number;
  patient_gender?: string;
  appointment_date: string; // YYYY-MM-DD
  time_slot: string; // "10:00 AM"
  status: AppointmentStatus;
  payment_status: PaymentStatus;
  payment_method: PaymentMethod;
  total_amount: number;
  patient_notes?: string;
  admin_notes?: string;
  razorpay_order_id?: string;
  razorpay_payment_id?: string;
  created_at: string;
  updated_at: string;
}

export interface PaymentTransaction {
  id: string;
  appointment_id: string;
  booking_id: string;
  patient_name: string;
  doctor_name: string;
  amount: number;
  payment_method: PaymentMethod;
  razorpay_payment_id?: string;
  status: "captured" | "failed" | "refunded";
  created_at: string;
}

export interface Review {
  id: string;
  doctor_id: string;
  patient_name: string;
  rating: number;
  comment: string;
  date: string;
}

export interface NotificationItem {
  id: string;
  recipient_name: string;
  recipient_contact: string;
  channel: "email" | "sms" | "whatsapp";
  type: "confirmation" | "reminder_24h" | "cancellation";
  message: string;
  sent_at: string;
  status: "sent" | "delivered" | "failed";
}

export interface DashboardStats {
  todayAppointmentsCount: number;
  pendingCount: number;
  confirmedCount: number;
  completedCount: number;
  cancelledCount: number;
  revenueToday: number;
  amountDueToday: number;
  newPatientsCount: number;
}
