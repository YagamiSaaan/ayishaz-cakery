/**
 * Reusable labeled text input with inline validation UI, styled to match
 * the atelier's cream-on-espresso form aesthetic.
 *
 * @param label      Human-readable label rendered above the input.
 * @param name       Form field name (also used to derive the DOM id).
 * @param type       HTML input `type`. Defaults to `"text"`.
 * @param placeholder Placeholder shown in the empty input.
 * @param required   Native `required` attribute.
 * @param maxLength  Character cap (mirror the Zod schema for parity).
 * @param error      Optional validation message; toggles error styling +
 *                   `aria-invalid` / `aria-describedby`.
 */
export function FormField({
  label,
  name,
  type = "text",
  placeholder,
  required,
  maxLength,
  error,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  maxLength?: number;
  error?: string;
}) {
  const id = `field-${name}`;
  const errorId = error ? `${id}-error` : undefined;
  return (
    <div>
      <label
        htmlFor={id}
        className="text-[0.65rem] tracking-[0.3em] uppercase text-[var(--mocha)] mb-2 block"
      >
        {label}
      </label>
      <input
        id={id}
        name={name}
        required={required}
        type={type}
        placeholder={placeholder}
        maxLength={maxLength}
        aria-invalid={error ? true : undefined}
        aria-describedby={errorId}
        className={`w-full bg-transparent border-b py-3 focus:outline-none placeholder:text-[var(--mocha)]/40 ${
          error
            ? "border-red-600 focus:border-red-700"
            : "border-[var(--mocha)]/30 focus:border-[var(--gold)]"
        }`}
      />
      {error && (
        <p id={errorId} className="text-xs text-red-700 mt-2">
          {error}
        </p>
      )}
    </div>
  );
}
