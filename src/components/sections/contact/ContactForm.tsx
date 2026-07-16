export default function ContactForm() {
  return (
    <form className="space-y-5">
      <input
        placeholder="Your Name"
        className="w-full
rounded-2xl
border
border-border
bg-background/50
px-5
py-4
outline-none
transition-all
focus:border-violet-500
focus:ring-4
focus:ring-violet-500/20"
      />

      <input
        placeholder="Your Email"
        className="w-full
rounded-2xl
border
border-border
bg-background/50
px-5
py-4
outline-none
transition-all
focus:border-violet-500
focus:ring-4
focus:ring-violet-500/20"
      />

      <textarea
        rows={6}
        placeholder="Message"
        className="w-full
rounded-2xl
border
border-border
bg-background/50
px-5
py-4
outline-none
transition-all
focus:border-violet-500
focus:ring-4
focus:ring-violet-500/20"
      />

      <button className="rounded-xl bg-primary px-8 py-4 text-primary-foreground">
        Send Message
      </button>
    </form>
  );
}
