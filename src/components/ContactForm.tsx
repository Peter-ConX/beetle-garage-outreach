import React, { useState, useEffect } from 'react';
import { Send, Phone, MessageSquare, AlertCircle, CheckCircle, Car } from 'lucide-react';
import { GARAGE_DATA } from '../config/garageData';

interface ContactFormProps {
  selectedServiceTitle?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({ selectedServiceTitle }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    vehicleMakeModel: '',
    registration: '',
    service: 'Vehicle Servicing',
    message: ''
  });

  const [submittedStatus, setSubmittedStatus] = useState<'idle' | 'demo_sent'>('idle');

  useEffect(() => {
    if (selectedServiceTitle) {
      setFormData(prev => ({ ...prev, service: selectedServiceTitle }));
    }
  }, [selectedServiceTitle]);

  const serviceOptions = [
    'Vehicle Servicing',
    'Brake Repairs',
    'Engine Diagnostics',
    'Battery & Electrical',
    'Exhaust & Emissions',
    'General Mechanical Repairs',
    'Suspension & Steering',
    'Vehicle Inspection',
    'Other'
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Honest client notification (No fake server routing message)
    setSubmittedStatus('demo_sent');
  };

  const generateWhatsAppUrl = () => {
    const text = `Hi Beetle Garage, I'd like to enquire about my vehicle.
Name: ${formData.name || 'Not provided'}
Phone: ${formData.phone || 'Not provided'}
Vehicle: ${formData.vehicleMakeModel || 'Not provided'} (Reg: ${formData.registration || 'N/A'})
Service: ${formData.service}
Details: ${formData.message || 'General Enquiry'}`;
    return `https://wa.me/447522574716?text=${encodeURIComponent(text)}`;
  };

  return (
    <section className="w-full bg-garage-secondary py-20 border-b border-garage-border/40" id="contact">
      <div className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Info & Instructions */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div>
              <span className="font-mono text-xs text-garage-yellow uppercase tracking-widest block mb-2 font-semibold">
                ENQUIRE ABOUT YOUR VEHICLE
              </span>
              <h2 className="font-heading text-4xl sm:text-5xl uppercase font-bold text-garage-text tracking-tight">
                TELL US WHAT YOUR CAR NEEDS.
              </h2>
              <p className="font-body text-base text-garage-muted mt-3 leading-relaxed">
                Need a service, repair or help diagnosing a problem? Contact Beetle Garage and tell us a little about your vehicle and what is happening.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="flex flex-col gap-4 pt-2">
              <a
                href={GARAGE_DATA.phoneTelLink}
                className="p-5 rounded-lg bg-garage-card border border-garage-border hover:border-garage-yellow transition-all flex items-center gap-4 group"
              >
                <div className="p-3 rounded bg-garage-elevated text-garage-yellow group-hover:bg-garage-yellow group-hover:text-garage-bg transition-colors">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="font-mono text-[10px] text-garage-muted uppercase block">DIRECT PHONE</span>
                  <span className="font-heading text-xl font-bold text-garage-text group-hover:text-garage-yellow transition-colors">
                    07522 574716
                  </span>
                  <span className="font-body text-xs text-garage-muted block">Mon–Fri: 09:00–17:00</span>
                </div>
              </a>

              <a
                href={GARAGE_DATA.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-lg bg-emerald-950/40 border border-emerald-800/50 hover:border-emerald-500 transition-all flex items-center gap-4 group"
              >
                <div className="p-3 rounded bg-emerald-900/60 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-garage-bg transition-colors">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <span className="font-mono text-[10px] text-emerald-400 uppercase block font-semibold">WHATSAPP GARAGE</span>
                  <span className="font-heading text-xl font-bold text-garage-text group-hover:text-emerald-400 transition-colors">
                    +44 7522 574716
                  </span>
                  <span className="font-body text-xs text-garage-muted block">Fast direct message enquiry</span>
                </div>
              </a>
            </div>

            <div className="p-4 rounded bg-garage-card border border-garage-border text-xs font-mono text-garage-muted">
              <p className="text-garage-yellow font-semibold mb-1">📌 Garage Location:</p>
              <p>Beetle Garage, Unit 10 Brunel Road, Corby, NN17 4AU</p>
            </div>
          </div>

          {/* Right Column: Enquiry Form */}
          <div className="lg:col-span-7 bg-garage-card border border-garage-border p-6 sm:p-8 rounded-xl shadow-xl relative">
            
            {submittedStatus === 'demo_sent' ? (
              <div className="p-6 bg-garage-elevated rounded-lg border border-garage-yellow/50 flex flex-col gap-4 text-center">
                <div className="w-12 h-12 rounded-full bg-garage-yellow/20 text-garage-yellow flex items-center justify-center mx-auto">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-2xl font-bold uppercase text-garage-text">
                  Enquiry Details Formatted
                </h3>
                <p className="font-body text-sm text-garage-muted max-w-md mx-auto">
                  To send your vehicle details directly to Beetle Garage right now, click below to launch WhatsApp or call us directly.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                  <a
                    href={generateWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-3 rounded bg-emerald-600 hover:bg-emerald-500 text-white font-heading font-bold uppercase tracking-wider text-sm flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Send via WhatsApp</span>
                  </a>
                  <a
                    href={GARAGE_DATA.phoneTelLink}
                    className="px-5 py-3 rounded bg-garage-yellow text-garage-bg font-heading font-bold uppercase tracking-wider text-sm flex items-center justify-center gap-2"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call 07522 574716</span>
                  </a>
                </div>
                <button
                  type="button"
                  onClick={() => setSubmittedStatus('idle')}
                  className="font-mono text-xs text-garage-muted underline mt-2 hover:text-garage-text"
                >
                  Edit Enquiry Details
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div>
                    <label className="block font-mono text-xs uppercase text-garage-muted mb-1.5 font-semibold">
                      Your Name <span className="text-garage-yellow">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Mark Smith"
                      className="w-full bg-garage-bg border border-garage-border rounded px-4 py-2.5 font-body text-sm text-garage-text focus:outline-none focus:border-garage-yellow transition-colors"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block font-mono text-xs uppercase text-garage-muted mb-1.5 font-semibold">
                      Phone Number <span className="text-garage-yellow">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. 07123 456789"
                      className="w-full bg-garage-bg border border-garage-border rounded px-4 py-2.5 font-body text-sm text-garage-text focus:outline-none focus:border-garage-yellow transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Email */}
                  <div>
                    <label className="block font-mono text-xs uppercase text-garage-muted mb-1.5 font-semibold">
                      Email Address <span className="text-garage-muted font-normal">(Optional)</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      className="w-full bg-garage-bg border border-garage-border rounded px-4 py-2.5 font-body text-sm text-garage-text focus:outline-none focus:border-garage-yellow transition-colors"
                    />
                  </div>

                  {/* Service Dropdown */}
                  <div>
                    <label className="block font-mono text-xs uppercase text-garage-muted mb-1.5 font-semibold">
                      Service Required <span className="text-garage-yellow">*</span>
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full bg-garage-bg border border-garage-border rounded px-4 py-2.5 font-body text-sm text-garage-text focus:outline-none focus:border-garage-yellow transition-colors"
                    >
                      {serviceOptions.map(option => (
                        <option key={option} value={option} className="bg-garage-card text-garage-text">
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Make & Model */}
                  <div>
                    <label className="block font-mono text-xs uppercase text-garage-muted mb-1.5 font-semibold">
                      Vehicle Make & Model <span className="text-garage-yellow">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="vehicleMakeModel"
                        required
                        value={formData.vehicleMakeModel}
                        onChange={handleChange}
                        placeholder="e.g. Ford Focus / VW Golf"
                        className="w-full bg-garage-bg border border-garage-border rounded px-4 py-2.5 font-body text-sm text-garage-text focus:outline-none focus:border-garage-yellow transition-colors pl-10"
                      />
                      <Car className="w-4 h-4 text-garage-muted absolute left-3 top-3" />
                    </div>
                  </div>

                  {/* Registration */}
                  <div>
                    <label className="block font-mono text-xs uppercase text-garage-muted mb-1.5 font-semibold">
                      Registration Number <span className="text-garage-muted font-normal">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      name="registration"
                      value={formData.registration}
                      onChange={handleChange}
                      placeholder="e.g. AB12 CDE"
                      className="w-full bg-garage-bg border border-garage-border rounded px-4 py-2.5 font-mono uppercase text-sm text-garage-yellow tracking-wider focus:outline-none focus:border-garage-yellow transition-colors"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block font-mono text-xs uppercase text-garage-muted mb-1.5 font-semibold">
                    Details of the Issue / Work Required
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us what is happening with the vehicle, any warning lights or symptoms, and when you would like to bring it in."
                    className="w-full bg-garage-bg border border-garage-border rounded px-4 py-2.5 font-body text-sm text-garage-text focus:outline-none focus:border-garage-yellow transition-colors resize-none"
                  />
                </div>

                {/* Disclaimer */}
                <div className="flex items-center gap-2 text-xs font-mono text-garage-muted">
                  <AlertCircle className="w-4 h-4 text-garage-yellow shrink-0" />
                  <span>Please do not include unnecessary sensitive personal information.</span>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-3.5 rounded bg-garage-yellow hover:bg-garage-gold text-garage-bg font-heading text-lg font-bold uppercase tracking-wider transition-all shadow-lg flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  <span>SEND ENQUIRY</span>
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
