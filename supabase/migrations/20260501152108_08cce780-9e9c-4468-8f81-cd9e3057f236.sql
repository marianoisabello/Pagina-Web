ALTER TABLE public.contact_submissions
  ADD COLUMN IF NOT EXISTS company TEXT,
  ADD COLUMN IF NOT EXISTS solution_type TEXT,
  ADD COLUMN IF NOT EXISTS source TEXT NOT NULL DEFAULT 'pampai_website';