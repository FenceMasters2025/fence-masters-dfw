import React, { useState } from "react";
import { ArrowRight, Shield, User, Phone, Mail } from "lucide-react";

interface LeadCaptureFormProps {
  onSuccess: () => void;
}

const LeadCaptureForm: React.FC<LeadCaptureFormProps> = ({ onSuccess }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">(
    "idle"
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const formElement = e.target as HTMLFormElement;
      const formDataToSubmit = new FormData(formElement);

      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formDataToSubmit as any).toString(),
      });

      if (!response.ok) throw new Error("Form submission failed");

      setSubmitStatus("success");
      localStorage.setItem("leadContact", JSON.stringify(formData));

      setTimeout(() => {
        onSuccess();
      }, 1000);
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-2xl mx-auto px-4">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <User className="w-8 h-8 text-blue-700" />
            </div>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              Get Your Ballpark Estimate
            </h1>
            <p className="text-lg text-gray-600">
              Please provide your contact information to access our instant
              estimate calculator.
            </p>
          </div>

          {submitStatus === "success" ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ArrowRight className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Thank you!
              </h3>
              <p className="text-gray-600">
                Redirecting you to the estimate calculator...
              </p>
            </div>
          ) : (
            <form
              name="quote-request"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <input type="hidden" name="form-name" value="quote-request" />
              <div style={{ display: "none" }}>
                <label>
                  Don’t fill this out if you’re human: <input name="bot-field" />
                </label>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-700 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-700 focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-700 focus:border-transparent"
                    placeholder="(214) 555-0123"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-700 focus:border-transparent"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              {submitStatus === "error" && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <p className="text-red-600">
                    There was an error processing your request. Please try again
                    or call us directly at{" "}
                    <a
                      href="tel:214-493-3438"
                      className="font-semibold hover:underline"
                    >
                      (214) 493-3438
                    </a>
                    .
                  </p>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-700 text-white py-4 px-6 rounded-lg font-semibold hover:bg-blue-800 disabled:bg-gray-400 transition-colors flex items-center justify-center text-lg"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Processing...
                  </>
                ) : (
                  <>
                    Get My Estimate
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </>
                )}
              </button>

              {/* Privacy & Security Section */}
              <div className="flex flex-col items-center justify-center text-center text-sm text-gray-600 mt-4 space-y-1">
                <div className="flex items-center justify-center text-blue-700">
                  <Shield className="w-4 h-4 mr-2 text-blue-700" />
                  <span className="font-medium">
                    Your information is secure and will not be shared.
                  </span>
                </div>
                <p className="text-xs text-gray-500 max-w-md leading-snug">
                  We respect your privacy — your contact details will only be
                  used to respond to your estimate request and will never be
                  sold or distributed.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default LeadCaptureForm;
