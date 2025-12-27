import Link from "next/link";

export function Footer() {
  const footerSections = [
    {
      title: "Product",
      links: [
        { name: "Explore", href: "/explore" },
        { name: "Search", href: "/search" },
        { name: "Community", href: "/community" },
        { name: "Templates", href: "/templates" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Content", href: "/content" },
        { name: "Jobs", href: "/jobs" },
        { name: "Marketplace", href: "/marketplace" },
        { name: "Blog", href: "/content" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About", href: "/about" },
        { name: "Contact", href: "/about#contact" },
        { name: "Privacy", href: "/legal#privacy" },
        { name: "Terms", href: "/legal#terms" },
      ],
    },
  ];

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <h3 className="text-h3 mb-4">UniAI</h3>
            <p className="text-caption text-muted-foreground">
              The unified homebase for AI builders.
            </p>
          </div>
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-body mb-4 font-semibold">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-caption text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-8 border-t border-border pt-8">
          <p className="text-caption text-center text-muted-foreground">
            © {new Date().getFullYear()} UniAI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

