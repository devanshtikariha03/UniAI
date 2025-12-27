import { Card } from "@/components/ui/Card";

export default function LegalPage() {
  return (
    <div className="pt-16">
      <div className="mx-auto max-w-4xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h1 className="text-h1 mb-4">Legal</h1>
          <p className="text-body text-muted-foreground">
            Terms of service and privacy policy
          </p>
        </div>

        <div className="space-y-12">
          <Card id="privacy">
            <h2 className="text-h2 mb-4">Privacy Policy</h2>
            <p className="text-body mb-4 text-muted-foreground">
              <strong>Last Updated:</strong> March 2024
            </p>
            <div className="space-y-4 text-body text-muted-foreground">
              <p>
                UniAI ("we", "our", or "us") is committed to protecting your privacy. This Privacy
                Policy explains how we collect, use, and safeguard your information when you use
                our platform.
              </p>
              <div>
                <h3 className="text-h3 mb-2 text-foreground">Information We Collect</h3>
                <p>
                  We collect information you provide directly to us, such as when you create an
                  account, subscribe to our newsletter, or contact us. This may include your name,
                  email address, and any other information you choose to provide.
                </p>
              </div>
              <div>
                <h3 className="text-h3 mb-2 text-foreground">How We Use Your Information</h3>
                <p>
                  We use the information we collect to provide, maintain, and improve our services,
                  process transactions, send you updates, and respond to your inquiries.
                </p>
              </div>
              <div>
                <h3 className="text-h3 mb-2 text-foreground">Data Security</h3>
                <p>
                  We implement appropriate technical and organizational measures to protect your
                  personal information against unauthorized access, alteration, disclosure, or
                  destruction.
                </p>
              </div>
              <p>
                For questions about this Privacy Policy, please contact us at{" "}
                <a href="mailto:privacy@uniai.dev" className="text-accent hover:underline">
                  privacy@uniai.dev
                </a>
                .
              </p>
            </div>
          </Card>

          <Card id="terms">
            <h2 className="text-h2 mb-4">Terms of Service</h2>
            <p className="text-body mb-4 text-muted-foreground">
              <strong>Last Updated:</strong> March 2024
            </p>
            <div className="space-y-4 text-body text-muted-foreground">
              <p>
                By accessing or using UniAI, you agree to be bound by these Terms of Service. If
                you disagree with any part of these terms, you may not access the service.
              </p>
              <div>
                <h3 className="text-h3 mb-2 text-foreground">Use License</h3>
                <p>
                  Permission is granted to temporarily access UniAI for personal, non-commercial
                  use. This is the grant of a license, not a transfer of title.
                </p>
              </div>
              <div>
                <h3 className="text-h3 mb-2 text-foreground">User Content</h3>
                <p>
                  You retain ownership of any content you post on UniAI. By posting content, you
                  grant us a license to use, display, and distribute that content on our platform.
                </p>
              </div>
              <div>
                <h3 className="text-h3 mb-2 text-foreground">Disclaimer</h3>
                <p>
                  The materials on UniAI are provided on an 'as is' basis. We make no warranties,
                  expressed or implied, and hereby disclaim all other warranties including,
                  without limitation, implied warranties or conditions of merchantability, fitness
                  for a particular purpose, or non-infringement of intellectual property.
                </p>
              </div>
              <p>
                For questions about these Terms of Service, please contact us at{" "}
                <a href="mailto:legal@uniai.dev" className="text-accent hover:underline">
                  legal@uniai.dev
                </a>
                .
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

