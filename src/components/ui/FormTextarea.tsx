/**
 * Reusable labeled textarea matched to `FormField`'s styling.
 */
export function FormTextarea({
  label,
  name,
  rows = 5,
  maxLength,
  placeholder,
  error,
}: {
  label: string;
  name: string;
  rows?: number;
  maxLength?: number;
  placeholder?: string;
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
      <textarea
        id={id}
        name={name}
        rows={rows}
        maxLength={maxLength}
        placeholder={placeholder}
        aria-invalid={error ? true : undefined}
        aria-describedby={errorId}
        className={`w-full bg-transparent border-b py-3 focus:outline-none resize-none placeholder:text-[var(--mocha)]/40 ${
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
