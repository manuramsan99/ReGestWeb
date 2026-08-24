"use client";

import { useRef, useState, type FocusEvent, type FormEvent } from "react";
import { isValidEmail, isValidPhone } from "@/lib/validation";

const MESSAGE_MAX_HEIGHT = 240;

function resizeTextarea(el: HTMLTextAreaElement) {
  el.style.height = "auto";
  el.style.height = `${Math.min(el.scrollHeight, MESSAGE_MAX_HEIGHT)}px`;
}

type Status = "idle" | "loading" | "success" | "error";
type FieldErrors = { email?: string; phone?: string };

const baseInputClassName =
  "mt-1.5 w-full rounded-lg border bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/40 focus:outline-none";
const validBorder = "border-white/15 focus:border-regest-green";
const invalidBorder = "border-red-400/60 focus:border-red-400";

function fieldClassName(hasError: boolean) {
  return `${baseInputClassName} ${hasError ? invalidBorder : validBorder}`;
}

function validateEmailField(value: string) {
  if (!value.trim()) return undefined;
  return isValidEmail(value) ? undefined : "Escribe un email válido, ej: tu@email.com";
}

function validatePhoneField(value: string) {
  if (!value.trim()) return undefined;
  return isValidPhone(value)
    ? undefined
    : "Escribe un teléfono español válido, ej: 600 000 000";
}

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const messageRef = useRef<HTMLTextAreaElement>(null);

  function handleEmailBlur(event: FocusEvent<HTMLInputElement>) {
    setFieldErrors((prev) => ({ ...prev, email: validateEmailField(event.target.value) }));
  }

  function handlePhoneBlur(event: FocusEvent<HTMLInputElement>) {
    setFieldErrors((prev) => ({ ...prev, phone: validatePhoneField(event.target.value) }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;

    const errors: FieldErrors = {
      email: validateEmailField(data.email ?? ""),
      phone: validatePhoneField(data.phone ?? ""),
    };
    setFieldErrors(errors);
    if (errors.email || errors.phone) {
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const body = await response.json().catch(() => null);
        throw new Error(body?.error || "No se pudo enviar el mensaje.");
      }

      setStatus("success");
      form.reset();
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "No se pudo enviar el mensaje."
      );
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
        <p className="text-lg font-semibold text-regest-green">¡Mensaje enviado!</p>
        <p className="mt-2 text-white/70">
          Te contestaremos lo antes posible.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="grid gap-4 text-left">
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-medium text-white/80">
            Nombre
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className={fieldClassName(false)}
            placeholder="Tu nombre"
          />
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-medium text-white/80">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            onBlur={handleEmailBlur}
            aria-invalid={Boolean(fieldErrors.email)}
            className={fieldClassName(Boolean(fieldErrors.email))}
            placeholder="tu@email.com"
          />
          {fieldErrors.email && (
            <p className="mt-1 text-xs text-red-300">{fieldErrors.email}</p>
          )}
        </div>
      </div>
      <div>
        <label htmlFor="phone" className="text-sm font-medium text-white/80">
          Teléfono <span className="text-white/40">(opcional)</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          onBlur={handlePhoneBlur}
          aria-invalid={Boolean(fieldErrors.phone)}
          className={fieldClassName(Boolean(fieldErrors.phone))}
          placeholder="600 000 000"
        />
        {fieldErrors.phone && (
          <p className="mt-1 text-xs text-red-300">{fieldErrors.phone}</p>
        )}
      </div>
      <div>
        <label htmlFor="message" className="text-sm font-medium text-white/80">
          Cuéntanos cómo llevas tus obras hoy
        </label>
        <textarea
          id="message"
          name="message"
          ref={messageRef}
          required
          rows={4}
          onInput={(event) => resizeTextarea(event.currentTarget)}
          className={`${fieldClassName(false)} themed-scrollbar resize-none overflow-y-auto leading-relaxed`}
          placeholder="Ej: llevo las obras en un Excel suelto y quiero ver cómo quedaría con ReGest"
        />
      </div>

      {status === "error" && <p className="text-sm text-red-300">{errorMessage}</p>}

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-2 rounded-full bg-regest-green px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-regest-green-dark disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "loading" ? "Enviando…" : "Enviar mensaje"}
      </button>

      <p className="text-center text-xs text-white/50">
        O escríbenos directamente a{" "}
        <a href="mailto:hola@regest.es" className="underline hover:text-white">
          hola@regest.es
        </a>
      </p>
    </form>
  );
}
