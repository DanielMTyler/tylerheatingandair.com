const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=61594824293297";
const GOOGLE_URL = "https://share.google/MEAoLkUVHofFy08VL";

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function GoogleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
    </svg>
  );
}

/** Small round icon buttons for the header (hidden on very small screens). */
export function HeaderSocialLinks() {
  const base =
    "flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-700 transition hover:bg-slate-900 hover:text-white";
  return (
    <div className="hidden items-center gap-2 sm:flex">
      <a
        href={FACEBOOK_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Tyler Heating & Air on Facebook"
        title="Facebook"
        className={base}
      >
        <FacebookIcon className="h-5 w-5" />
      </a>
      <a
        href={GOOGLE_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Tyler Heating & Air on Google, reviews"
        title="Google reviews"
        className={base}
      >
        <GoogleIcon className="h-4 w-4" />
      </a>
    </div>
  );
}

/** Labeled buttons for the footer. */
export function FooterSocialLinks() {
  const base =
    "inline-flex items-center gap-2 rounded-full border border-slate-600 px-4 py-2 text-sm font-bold text-white transition hover:border-white hover:bg-white hover:text-slate-900";
  return (
    <div className="mt-4 flex flex-wrap justify-center gap-3 md:justify-start">
      <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className={base}>
        <FacebookIcon className="h-4 w-4" />
        Follow on Facebook
      </a>
      <a href={GOOGLE_URL} target="_blank" rel="noopener noreferrer" className={base}>
        <GoogleIcon className="h-4 w-4" />
        Google Reviews
      </a>
    </div>
  );
}
