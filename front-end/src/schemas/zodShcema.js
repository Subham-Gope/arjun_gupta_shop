import { z } from "zod";

export const formSchema = z.object({
  name: z.string().min(3, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  message: z.string().min(15, "Message must 15 characters or more"),
});
