"use client";

import { useState, useEffect } from "react";
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
  onFieldChange?: (field: any, value: string) => void;
  errors?: Record<string, string>;
};

export function ContactAddressForm({ defaultValues = {}, onChange, onFieldChange, errors = {} }: ContactAddressFormProps) {
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

  // Sync with parent when defaultValues change (e.g., saved info loaded)
  useEffect(() => {
    setFormData({
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
  }, [defaultValues.fullName, defaultValues.email, defaultValues.phone, defaultValues.addressLine1, defaultValues.addressLine2, defaultValues.city, defaultValues.state, defaultValues.zipCode, defaultValues.country]);

  const handleChange = (field: string, value: string) => {
    const newData = { ...formData, [field]: value };
    setFormData(newData);
    onChange?.(newData);
    onFieldChange?.(field, value);
  };

  return (
    <div className="space-y-6">
      {/* Contact Information */}
      <section className="space-y-4" aria-label="Contact information">
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
              aria-invalid={!!errors.fullName}
              aria-describedby={errors.fullName ? "fullName-error" : undefined}
              className={`w-full rounded-xl border ${
                errors.fullName ? "border-red-500 ring-red-500/20" : "border-slate-200"
              } bg-white px-4 py-3 text-[#0e1b33] focus:border-[#20a9ad] focus:outline-none focus:ring-2 focus:ring-[#20a9ad]/20`}
              placeholder="John Doe"
            />
            {errors.fullName && <p id="fullName-error" className="mt-1 text-xs text-red-500" role="alert">{errors.fullName}</p>}
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
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "email-error" : undefined}
              className={`w-full rounded-xl border ${
                errors.email ? "border-red-500 ring-red-500/20" : "border-slate-200"
              } bg-white px-4 py-3 text-[#0e1b33] focus:border-[#20a9ad] focus:outline-none focus:ring-2 focus:ring-[#20a9ad]/20`}
              placeholder="john@example.com"
            />
            {errors.email && <p id="email-error" className="mt-1 text-xs text-red-500" role="alert">{errors.email}</p>}
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
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "phone-error" : "phone-hint"}
            className={`w-full rounded-xl border ${
              errors.phone ? "border-red-500 ring-red-500/20" : "border-slate-200"
            } bg-white px-4 py-3 text-[#0e1b33] focus:border-[#20a9ad] focus:outline-none focus:ring-2 focus:ring-[#20a9ad]/20`}
            placeholder="+1 (555) 123-4567"
          />
          {errors.phone && <p id="phone-error" className="mt-1 text-xs text-red-500" role="alert">{errors.phone}</p>}
          <p id="phone-hint" className="mt-1 text-xs text-[#6a6a67]">For delivery updates and order notifications</p>
        </div>
      </section>

      {/* Shipping Address */}
      <section className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6" aria-label="Shipping address">
        <div className="flex items-center gap-2 border-b border-slate-100 pb-4">
          <Truck size={20} className="text-[#20a9ad]" aria-hidden="true" />
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
              aria-invalid={!!errors.addressLine1}
              aria-describedby={errors.addressLine1 ? "addressLine1-error" : undefined}
              className={`w-full rounded-xl border ${
                errors.addressLine1 ? "border-red-500 ring-red-500/20" : "border-slate-200"
              } bg-slate-50/50 px-4 py-3 text-[#0e1b33] focus:border-[#20a9ad] focus:outline-none focus:ring-2 focus:ring-[#20a9ad]/20`}
              placeholder="123 Main Street, Apt 4"
            />
            {errors.addressLine1 && <p id="addressLine1-error" className="mt-1 text-xs text-red-500" role="alert">{errors.addressLine1}</p>}
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
                aria-invalid={!!errors.city}
                aria-describedby={errors.city ? "city-error" : undefined}
                className={`w-full rounded-xl border ${
                  errors.city ? "border-red-500 ring-red-500/20" : "border-slate-200"
                } bg-slate-50/50 px-4 py-3 text-[#0e1b33] focus:border-[#20a9ad] focus:outline-none focus:ring-2 focus:ring-[#20a9ad]/20`}
                placeholder="New York"
              />
              {errors.city && <p id="city-error" className="mt-1 text-xs text-red-500" role="alert">{errors.city}</p>}
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
                aria-invalid={!!errors.state}
                aria-describedby={errors.state ? "state-error" : undefined}
                className={`w-full rounded-xl border ${
                  errors.state ? "border-red-500 ring-red-500/20" : "border-slate-200"
                } bg-slate-50/50 px-4 py-3 text-[#0e1b33] focus:border-[#20a9ad] focus:outline-none focus:ring-2 focus:ring-[#20a9ad]/20`}
                placeholder="NY"
              />
              {errors.state && <p id="state-error" className="mt-1 text-xs text-red-500" role="alert">{errors.state}</p>}
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
                aria-invalid={!!errors.zipCode}
                aria-describedby={errors.zipCode ? "zipCode-error" : undefined}
                className={`w-full rounded-xl border ${
                  errors.zipCode ? "border-red-500 ring-red-500/20" : "border-slate-200"
                } bg-slate-50/50 px-4 py-3 text-[#0e1b33] focus:border-[#20a9ad] focus:outline-none focus:ring-2 focus:ring-[#20a9ad]/20`}
                placeholder="10001"
              />
              {errors.zipCode && <p id="zipCode-error" className="mt-1 text-xs text-red-500" role="alert">{errors.zipCode}</p>}
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
