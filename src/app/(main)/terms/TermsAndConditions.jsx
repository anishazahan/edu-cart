const TermsAndConditions = () => {
  const sections = [
    { id: "introduction", title: "Introduction" },
    { id: "accounts", title: "Accounts" },
    { id: "content", title: "Course Content" },
    { id: "payments", title: "Payments and Refunds" },
    { id: "conduct", title: "Code of Conduct" },
    { id: "changes", title: "Changes to Terms" },
    { id: "contact", title: "Contact Us" },
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">Terms and Conditions</h1>
        <p className="text-gray-600 text-lg">Last updated: {new Date().toLocaleDateString()}</p>
      </header>

      <nav aria-label="Table of Contents" className="mb-12 bg-gray-50 p-4 rounded-lg">
        <h2 className="text-lg font-semibold text-gray-800 mb-3">Table of Contents</h2>
        <ul className="space-y-2">
          {sections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
              >
                {section.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="prose lg:prose-lg max-w-none">
        <section id="introduction" className="scroll-mt-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
          <p className="text-gray-800 leading-relaxed">
            Welcome to our course-selling platform. These terms and conditions outline the rules and regulations for the
            use of our services by both instructors and students.
          </p>
        </section>

        <section id="accounts" className="scroll-mt-16 pt-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Accounts</h2>
          <p className="text-gray-800 leading-relaxed">
            Instructors and students are required to create accounts to access our platform. You are responsible for
            maintaining the confidentiality of your account information, including securing your password and any other
            credentials used to access your account.
          </p>
        </section>

        <section id="content" className="scroll-mt-16 pt-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Course Content</h2>
          <p className="text-gray-800 leading-relaxed">
            Instructors are responsible for the accuracy and quality of the course content they provide. Students are
            granted access to courses upon successful enrollment. All content remains the intellectual property of the
            respective instructors or the platform.
          </p>
        </section>

        <section id="payments" className="scroll-mt-16 pt-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Payments and Refunds</h2>
          <p className="text-gray-800 leading-relaxed">
            Payments for courses are processed through secure payment gateways. Refunds are subject to our refund
            policy, which allows requests within 14 days of purchase under specific conditions. Detailed policy
            available in your account dashboard.
          </p>
        </section>

        <section id="conduct" className="scroll-mt-16 pt-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Code of Conduct</h2>
          <p className="text-gray-800 leading-relaxed">
            Our community thrives on respect and professionalism. We prohibit harassment, discrimination, and any form
            of inappropriate behavior. Violations may result in immediate account suspension or termination without
            notice.
          </p>
        </section>

        <section id="changes" className="scroll-mt-16 pt-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Changes to Terms</h2>
          <p className="text-gray-800 leading-relaxed">
            We reserve the right to modify these terms at any time. Significant changes will be notified through our
            platform and via registered email at least 30 days before taking effect.
          </p>
        </section>

        <section id="contact" className="scroll-mt-16 pt-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Contact Us</h2>
          <p className="text-gray-800 leading-relaxed">
            For questions regarding these terms, contact our support team at{" "}
            <a href="mailto:support@example.com" className="text-blue-600 hover:text-blue-800 underline">
              support@example.com
            </a>{" "}
            or through our help center.
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsAndConditions;
