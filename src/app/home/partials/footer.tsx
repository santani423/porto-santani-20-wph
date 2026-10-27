import Image from 'next/image';
import Link from 'next/link';

const socials = [
  { label: 'Facebook', icon: '/icons/icon-facebook.svg', href: '#' },
  { label: 'Instagram', icon: '/icons/icon-instagram.svg', href: '#' },
  { label: 'LinkedIn', icon: '/icons/icon-linkedin.svg', href: '#' },
  { label: 'TikTok', icon: '/icons/icon-tiktok.svg', href: '#' },
];

const Footer = () => {
  return (
    <footer className="border-t border-neutral-900">
      <div className="custom-container flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between md:py-10">
        <div>
          <Image alt="logo" width={158} height={36} src="/images/logo.svg" />
          <p className="text-xs-regular mt-3 text-neutral-400">
            Another masterpiece by Edwin, trained at WebProgrammingHack bootcamp
          </p>
        </div>

        <ul className="flex gap-3">
          {socials.map((social) => (
            <li key={social.label}>
              <Link
                href={social.href}
                aria-label={social.label}
                className="hover:border-primary-300 flex size-10 items-center justify-center rounded-full border border-neutral-900 transition-colors"
              >
                <Image alt="" width={20} height={20} src={social.icon} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
