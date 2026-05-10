
-- Add length constraints to prevent abuse on contact_submissions
ALTER TABLE public.contact_submissions 
  ADD CONSTRAINT contact_name_length CHECK (char_length(name) <= 200),
  ADD CONSTRAINT contact_email_length CHECK (char_length(email) <= 320),
  ADD CONSTRAINT contact_phone_length CHECK (char_length(phone) <= 30),
  ADD CONSTRAINT contact_message_length CHECK (char_length(message) <= 5000);

-- Add length constraint on newsletter
ALTER TABLE public.newsletter_subscribers
  ADD CONSTRAINT subscriber_email_length CHECK (char_length(email) <= 320);
