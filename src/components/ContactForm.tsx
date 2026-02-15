import { FormEvent, useState } from 'react';

type State = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const initialState: State = { name: '', email: '', subject: '', message: '' };

export default function ContactForm() {
  const [form, setForm] = useState<State>(initialState);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [error, setError] = useState('');

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');

    if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      setStatus('error');
      setError('Please provide a valid email address.');
      return;
    }

    try {
      setStatus('loading');
      await new Promise((resolve) => setTimeout(resolve, 900));
      setStatus('success');
      setForm(initialState);
    } catch {
      setStatus('error');
      setError('Something went wrong. Please try again.');
    }
  };

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={onSubmit}
      className="mx-auto w-full max-w-2xl space-y-4 rounded-xl border border-borderColor bg-bgSecondary p-6"
      aria-label="Contact form"
    >
      <input type="hidden" name="form-name" value="contact" />
      <p className="hidden">
        <label htmlFor="bot-field">
          Don’t fill this out if you are human: <input id="bot-field" name="bot-field" />
        </label>
      </p>
      {(['name', 'email', 'subject'] as const).map((field) => (
        <label key={field} className="block text-sm text-textSecondary" htmlFor={field}>
          {field[0].toUpperCase() + field.slice(1)}
          <input
            id={field}
            name={field}
            type={field === 'email' ? 'email' : 'text'}
            required
            value={form[field]}
            onChange={(e) => setForm((prev) => ({ ...prev, [field]: e.target.value }))}
            className="mt-1 w-full rounded-lg border border-borderColor bg-bgPrimary px-3 py-2 text-textPrimary focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
          />
        </label>
      ))}
      <label className="block text-sm text-textSecondary" htmlFor="message">
        Message
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))}
          className="mt-1 w-full rounded-lg border border-borderColor bg-bgPrimary px-3 py-2 text-textPrimary focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
        />
      </label>

      <button
        type="submit"
        disabled={status === 'loading'}
        className="inline-flex items-center rounded-lg bg-accent px-5 py-2 font-medium text-white transition hover:scale-[1.02]"
      >
        {status === 'loading' ? 'Sending...' : 'Send Message'}
      </button>

      {status === 'success' && <p className="text-green-400">Thanks for reaching out! I'll get back to you soon.</p>}
      {status === 'error' && <p className="text-red-400">{error}</p>}
    </form>
  );
}
