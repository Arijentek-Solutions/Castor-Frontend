"use client";

import { useState } from "react";
import { Truck } from "lucide-react";

type ContactAddressFormProps = {
  defaultValues?: {
    fullName?: string;
    email?: string;
    phone?: string;
    addressLine1?: string;
    addressLine2?: string;
    city?: string;
    state?: string;
    zipCode?: string;
    country?: string;
  };
 onChange?: (data: Record<string, string>) => void;
};

export function ContactAddressForm({ defaultValues = {}, onChange }: ContactAddressFormProps) {
  const [formData, setFormData] = useState({
    fullName: defaultValues.fullName || "",
    email: defaultValues.email || "",
    phone: defaultValues.phone || "",
    addressLine1: defaultValues.addressLine1 || "",
    addressLine2: defaultValues.addressLine2 || "",
    city: defaultValues.city || "",
    state: defaultValues.state || "",
    zipCode: defaultValues.zipCode || "",
    country: defaultValues.country || "US",
  });

  const handleChange = (field: string, value: string) => {
    const newData = { ...formData, [field]: value };
    setFormData(newData);
    onChange?.(newData);
  };

  return (
    <div className="space-y-6">
      {/* Contact Information */}
      <section className="space-y-4">
        <h3 className="text-lg font-bold text-[#0e1b33]">Contact Information</h3>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="fullName" className="mb-2 block text-sm font-bold text-[#0e1b33]">
              Full Name *
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              required
              value={formData.fullName}
              onChange={(e) => handleChange("fullName", e.target.value)}
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-[#0e1b33] focus:border-[#20a9ad] focus:outline-none focus:ring-2 focus:ring-[#20a9ad]/20"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-bold text-[#0e1b33]">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-[#0e1b33] focus:border-[#20a9ad] focus:outline-none focus:ring-2 focus:ring-[#20a9ad]/20"
              placeholder="john@example.com"
            />
          </div>
        </div>

        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-bold text-[#0e1b33]">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-[#0e1b33] focus:border-[#20a9ad] focus:outline-none focus:ring-2 focus:ring-[#20a9ad]/20"
            placeholder="+1 (555) 123-4567"
          />
          <p className="mt-1 text-xs text-[#6a6a67]">For delivery updates and order notifications</p>
        </div>
      </section>

      {/* Shipping Address */}
      <section className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6">
        <div className="flex items-center gap-2 border-b border-slate-100 pb-4">
          <Truck size={20} className="text-[#20a9ad]" />
          <h3 className="text-lg font-bold text-[#0e1b33]">Shipping Address</h3>
        </div>

        <div className="space-y-4">
          <div>
            <label htmlFor="addressLine1" className="mb-2 block text-sm font-bold text-[#0e1b33]">
              Street Address *
            </label>
            <input
              type="text"
              id="addressLine1"
              name="addressLine1"
              required
              value={formData.addressLine1}
              onChange={(e) => handleChange("addressLine1", e.target.value)}
              className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-[#0e1b33] focus:border-[#20a9ad] focus:outline-none focus:ring-2 focus:ring-[#20a9ad]/20"
              placeholder="123 Main Street, Apt 4"
            />
          </div>

          <div>
            <label htmlFor="addressLine2" className="mb-2 block text-sm font-bold text-[#0e1b33]">
              Apartment, suite, etc. <span className="font-normal text-[#6a6a67]">(optional)</span>
            </label>
            <input
              type="text"
              id="addressLine2"
              name="addressLine2"
              value={formData.addressLine2}
              onChange={(e) => handleChange("addressLine2", e.target.value)}
              className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-[#0e1b33] focus:border-[#20a9ad] focus:outline-none focus:ring-2 focus:ring-[#20a9ad]/20"
              placeholder="Suite 100"
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <div>
              <label htmlFor="city" className="mb-2 block text-sm font-bold text-[#0e1b33]">
                City *
              </label>
              <input
                type="text"
                id="city"
                name="city"
                required
                value={formData.city}
                onChange={(e) => handleChange("city", e.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-[#0e1b33] focus:border-[#20a9ad] focus:outline-none focus:ring-2 focus:ring-[#20a9ad]/20"
                placeholder="New York"
              />
            </div>

            <div>
              <label htmlFor="state" className="mb-2 block text-sm font-bold text-[#0e1b33]">
                State *
              </label>
              <input
                type="text"
                id="state"
                name="state"
                required
                value={formData.state}
                onChange={(e) => handleChange("state", e.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-[#0e1b33] focus:border-[#20a9ad] focus:outline-none focus:ring-2 focus:ring-[#20a9ad]/20"
                placeholder="NY"
              />
            </div>

            <div>
              <label htmlFor="zipCode" className="mb-2 block text-sm font-bold text-[#0e1b33]">
                ZIP / Postal Code *
              </label>
              <input
                type="text"
                id="zipCode"
                name="zipCode"
                required
                value={formData.zipCode}
                onChange={(e) => handleChange("zipCode", e.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-[#0e1b33] focus:border-[#20a9ad] focus:outline-none focus:ring-2 focus:ring-[#20a9ad]/20"
                placeholder="10001"
              />
            </div>
          </div>

          <div>
            <label htmlFor="country" className="mb-2 block text-sm font-bold text-[#0e1b33]">
              Country *
            </label>
            <select
              id="country"
              name="country"
              required
              value={formData.country}
              onChange={(e) => handleChange("country", e.target.value)}
              className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-[#0e1b33] focus:border-[#20a9ad] focus:outline-none focus:ring-2 focus:ring-[#20a9ad]/20"
            >
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="IN">India</option>
              <option value="GB">United Kingdom</option>
              <option value="AU">Australia</option>
              <option value="DE">Germany</option>
              <option value="FR">France</option>
            </select>
          </div>
        </div>
      </section>
    </div>
  );
}
