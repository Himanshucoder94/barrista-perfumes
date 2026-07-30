"use client";

import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { formWhatsAppUrl } from "@/lib/whatsapp";

const families = ["Woody", "Floral", "Fresh", "Oriental", "Oud", "Not sure"];

interface Errors {
  name?: string;
  perfume?: string;
  family?: string;
  message?: string;
}

export function ContactForm() {
  const [name, setName] = useState("");
  const [perfume, setPerfume] = useState("");
  const [family, setFamily] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Errors>({});

  function validate() {
    const nextErrors: Errors = {};
    if (name.trim().length < 2) nextErrors.name = "Enter your name.";
    if (perfume.trim().length < 2) nextErrors.perfume = "Enter a perfume name or area of interest.";
    if (!family) nextErrors.family = "Choose a fragrance family.";
    if (message.trim().length < 8) nextErrors.message = "Add a short message.";
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!validate()) return;
    window.open(
      formWhatsAppUrl({
        name: name.trim(),
        perfume: perfume.trim(),
        family,
        message: message.trim(),
      }),
      "_blank",
      "noopener,noreferrer",
    );
  }

  const inputClass = "mt-2 w-full border border-white/12 bg-[#090909] px-4 py-3 text-[#F3EEE5] transition placeholder:text-[#A7A29A]/60 focus:border-[#C6A66B]";
  const labelClass = "text-sm font-semibold text-[#F3EEE5]";
  const errorClass = "mt-2 text-sm text-[#E8B4A0]";

  return (
    <form onSubmit={onSubmit} noValidate className="border border-[#C6A66B]/22 bg-[#0D0D0D] p-6 sm:p-8">
      <h2 className="font-serif text-4xl text-[#F3EEE5]">WhatsApp enquiry</h2>
      <p className="mt-3 text-sm leading-7 text-[#A7A29A]">This form opens WhatsApp with your message. No data is stored or sent to a backend.</p>
      <div className="mt-8 grid gap-5">
        <div>
          <label htmlFor="name" className={labelClass}>Name</label>
          <input id="name" value={name} onChange={(event) => setName(event.target.value)} className={inputClass} placeholder="Your name" aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "name-error" : undefined} />
          {errors.name ? <p id="name-error" className={errorClass}>{errors.name}</p> : null}
        </div>
        <div>
          <label htmlFor="perfume" className={labelClass}>Interested perfume</label>
          <input id="perfume" value={perfume} onChange={(event) => setPerfume(event.target.value)} className={inputClass} placeholder="Perfume name or preference" aria-invalid={Boolean(errors.perfume)} aria-describedby={errors.perfume ? "perfume-error" : undefined} />
          {errors.perfume ? <p id="perfume-error" className={errorClass}>{errors.perfume}</p> : null}
        </div>
        <div>
          <label htmlFor="family" className={labelClass}>Preferred fragrance family</label>
          <select id="family" value={family} onChange={(event) => setFamily(event.target.value)} className={inputClass} aria-invalid={Boolean(errors.family)} aria-describedby={errors.family ? "family-error" : undefined}>
            <option value="">Select a family</option>
            {families.map((option) => <option key={option} value={option}>{option}</option>)}
          </select>
          {errors.family ? <p id="family-error" className={errorClass}>{errors.family}</p> : null}
        </div>
        <div>
          <label htmlFor="message" className={labelClass}>Message</label>
          <textarea id="message" rows={5} value={message} onChange={(event) => setMessage(event.target.value)} className={inputClass} placeholder="Tell us the occasion, notes or style you prefer." aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? "message-error" : undefined} />
          {errors.message ? <p id="message-error" className={errorClass}>{errors.message}</p> : null}
        </div>
      </div>
      <button type="submit" className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 border border-[#C6A66B] bg-[#C6A66B] px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#090909] transition hover:bg-[#F3EEE5]">
        <MessageCircle size={18} /> Open WhatsApp
      </button>
    </form>
  );
}
