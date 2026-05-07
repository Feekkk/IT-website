const VENUQUIP_URL = "https://vequip.rcmp.edu.my";
const NEXCHECK_URL = "https://nims.rcmp.edu.my";
const HELPDESK_URL = "http://helpdesk.rcmp.unikl.edu.my";

export function SystemSection({ onClose }: { onClose: () => void }) {
  return (
    <section id="systems" className="scroll-mt-24 px-6 pb-20">
      <div className="mx-auto max-w-5xl rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-neutral-900">Internal Systems</h2>
            <p className="mt-2 max-w-2xl text-sm text-neutral-600">
              Quick links to the department’s internal platforms.
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="inline-flex w-fit items-center justify-center rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm font-semibold text-neutral-900 hover:bg-neutral-50"
          >
            Back to top
          </button>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <a
            href={VENUQUIP_URL}
            target="_blank"
            rel="noreferrer"
            className="group rounded-xl border border-neutral-200 bg-white p-5 transition hover:border-neutral-300 hover:bg-neutral-50"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-sm font-semibold text-neutral-900">VenuQuip</div>
                <div className="mt-1 text-sm text-neutral-600">Venue booking system.</div>
              </div>
              <span className="text-sm font-semibold text-neutral-900 group-hover:translate-x-0.5 transition">
                Open →
              </span>
            </div>
          </a>

          <a
            href={NEXCHECK_URL}
            target="_blank"
            rel="noreferrer"
            className="group rounded-xl border border-neutral-200 bg-white p-5 transition hover:border-neutral-300 hover:bg-neutral-50"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-sm font-semibold text-neutral-900">Nexcheck</div>
                <div className="mt-1 text-sm text-neutral-600">Request for equipment.</div>
              </div>
              <span className="text-sm font-semibold text-neutral-900 group-hover:translate-x-0.5 transition">
                Open →
              </span>
            </div>
          </a>

          <a
            href={HELPDESK_URL}
            target="_blank"
            rel="noreferrer"
            className="group rounded-xl border border-neutral-200 bg-white p-5 transition hover:border-neutral-300 hover:bg-neutral-50"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-sm font-semibold text-neutral-900">Helpdesk (Coming Soon)</div>
                <div className="mt-1 text-sm text-neutral-600">Submit and track complaints.</div>
              </div>
              <span className="text-sm font-semibold text-neutral-900 group-hover:translate-x-0.5 transition">
                Open →
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

