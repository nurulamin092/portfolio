export default function ContactForm() {
  return (
    <form className="space-y-5">
      <input
        placeholder="Your Name"
        className="w-full rounded-xl border bg-background p-4"
      />

      <input
        placeholder="Your Email"
        className="w-full rounded-xl border bg-background p-4"
      />

      <textarea
        rows={6}
        placeholder="Message"
        className="w-full rounded-xl border bg-background p-4"
      />

      <button className="rounded-xl bg-primary px-8 py-4 text-primary-foreground">
        Send Message
      </button>
    </form>
  );
}
