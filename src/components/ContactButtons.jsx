import { contact } from "../data/contact.js";

const Icon = ({ d }) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d={d} />
  </svg>
);

export default function ContactButtons({ stacked = false }) {
  const cls = stacked ? "flex flex-col gap-3" : "flex flex-wrap gap-3";
  return (
    <div className={cls}>
      <a href={contact.whatsappUrl} target="_blank" rel="noreferrer" className="btn-primary">
        <Icon d="M21 12a9 9 0 1 1-3.6-7.2L21 4l-1.1 3.4A9 9 0 0 1 21 12Z M8 11.5c.4 1.6 1.9 3.1 3.5 3.5l1.4-1.4 2.1 1c.3.6.1 1.4-.5 1.8a3.5 3.5 0 0 1-3.4 0A8 8 0 0 1 6.6 13a3.5 3.5 0 0 1 0-3.4c.4-.6 1.2-.8 1.8-.5l1 2.1L8 11.5Z" />
        WhatsApp
      </a>
      <a href={`mailto:${contact.email}`} className="btn-ghost">
        <Icon d="M4 6h16v12H4zM4 6l8 7 8-7" />
        Email
      </a>
      <a href={contact.linkedin} target="_blank" rel="noreferrer" className="btn-ghost">
        <Icon d="M4 4h4v16H4zM6 2.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3ZM10 8h4v2c.6-1.2 2-2.2 4-2.2 3 0 4 2 4 5V20h-4v-6c0-1.5-.5-2.5-2-2.5s-2 1-2 2.5V20h-4z" />
        LinkedIn
      </a>
      <a href={contact.github} target="_blank" rel="noreferrer" className="btn-ghost">
        <Icon d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.2-3.4-1.2-.5-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.4 1.1 3 .8.1-.7.4-1.1.7-1.4-2.2-.3-4.6-1.1-4.6-5a3.9 3.9 0 0 1 1-2.7c-.1-.3-.5-1.3.1-2.8 0 0 .8-.3 2.7 1a9.4 9.4 0 0 1 5 0c1.9-1.3 2.7-1 2.7-1 .6 1.5.2 2.5.1 2.8.6.7 1 1.6 1 2.7 0 3.9-2.4 4.7-4.6 5 .4.3.7 1 .7 2v3c0 .3.2.6.7.5A10 10 0 0 0 12 2Z" />
        GitHub
      </a>
    </div>
  );
}
