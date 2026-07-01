/**
 * Contact form validation schema.
 *
 * Uses Zod to validate the enquiry form on the Contact section. Each field is
 * trimmed before validation. Optional fields accept `""` so an empty input
 * still passes validation.
 *
 * Exports:
 * - `contactSchema` — the Zod schema, used with `safeParse` in the form handler.
 * - `ContactInput`  — TS type inferred from the schema (parsed shape).
 * - `ContactErrors` — map of field-name → error message for inline UI display.
 */
import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your name (2+ characters).")
    .max(100, "Name must be under 100 characters."),
  email: z
    .string()
    .trim()
    .min(1, "Email is required.")
    .email("Please enter a valid email address.")
    .max(255, "Email must be under 255 characters."),
  phone: z
    .string()
    .trim()
    .max(30, "Phone must be under 30 characters.")
    .regex(/^[+()\-\d\s]*$/, "Phone can only contain digits, spaces, +, -, ().")
    .optional()
    .or(z.literal("")),
  occasion: z
    .string()
    .trim()
    .max(120, "Occasion must be under 120 characters.")
    .optional()
    .or(z.literal("")),
  message: z
    .string()
    .trim()
    .max(1000, "Message must be under 1000 characters.")
    .optional()
    .or(z.literal("")),
});

export type ContactInput = z.infer<typeof contactSchema>;
export type ContactErrors = Partial<Record<keyof ContactInput, string>>;
