import React, { useEffect, useRef } from 'react';
import { useForm, ValidationError } from '@formspree/react';

const roles = [
  'Frontend Developer',
  'Backend Developer',
  'Full Stack Engineer',
  'DevOps Engineer',
  'Cloud Architect',
  'UI/UX Designer',
  'Project Manager',
  'Other',
];

const Careers = () => {
  const [state, handleSubmit] = useForm("mzzvgwly");
  const formRef = useRef(null);

  // Clear form after successful submission
  useEffect(() => {
    if (state.succeeded && formRef.current) {
      formRef.current.reset()
    }
  }, [state.succeeded]);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-white via-blue-50 to-cyan-100 flex flex-col items-center justify-center py-16 px-4">
      <div className="max-w-2xl w-full mx-auto mb-10 text-center">
        <h1 className="font-heading font-bold text-3xl md:text-4xl text-gray-900 mb-4 tracking-tight leading-tight">Join Our Team</h1>
        <p className="font-inter text-gray-700 text-base md:text-lg font-normal mb-2 leading-relaxed">We're always looking for talented people to help us build the future of cloud, DevOps, and digital transformation.</p>
        <p className="font-inter text-gray-600 text-sm md:text-base font-normal mb-2 leading-relaxed">Fill out the form below and our team will get in touch if there's a fit!</p>
      </div>
      {state.succeeded ? (
        <div className="max-w-2xl w-full mx-auto bg-white/80 rounded-2xl p-8 text-center">
          <div className="text-green-600 text-lg font-semibold mb-2">Thank you!</div>
          <div className="text-gray-600">Your application has been submitted successfully. We will review your details and contact you if there's a fit.</div>
        </div>
      ) : (
        <form
          ref={formRef}
          className="max-w-2xl w-full mx-auto bg-white/60 backdrop-blur-md shadow-xl rounded-2xl px-6 md:px-12 py-10 md:py-12 flex flex-col gap-6"
          onSubmit={handleSubmit}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block font-inter text-gray-800 font-medium text-base md:text-base tracking-wide leading-snug mb-1">First Name</label>
              <input name="firstName" id="firstName" type="text" placeholder="Enter First Name" className="w-full font-inter font-normal text-base bg-transparent border-b border-gray-300 focus:border-blue-400 outline-none py-2 px-1 leading-snug tracking-normal placeholder:text-gray-400" required />
              <ValidationError prefix="First Name" field="firstName" errors={state.errors} />
            </div>
            <div>
              <label className="block font-inter text-gray-800 font-medium text-base md:text-base tracking-wide leading-snug mb-1">Last Name</label>
              <input name="lastName" id="lastName" type="text" placeholder="Enter Last Name" className="w-full font-inter font-normal text-base bg-transparent border-b border-gray-300 focus:border-blue-400 outline-none py-2 px-1 leading-snug tracking-normal placeholder:text-gray-400" required />
              <ValidationError prefix="Last Name" field="lastName" errors={state.errors} />
            </div>
            <div>
              <label className="block font-inter text-gray-800 font-medium text-base md:text-base tracking-wide leading-snug mb-1">Phone Number</label>
              <input name="phone" id="phone" type="tel" placeholder="Your Phone Number" className="w-full font-inter font-normal text-base bg-transparent border-b border-gray-300 focus:border-blue-400 outline-none py-2 px-1 leading-snug tracking-normal placeholder:text-gray-400" required />
              <ValidationError prefix="Phone" field="phone" errors={state.errors} />
            </div>
            <div>
              <label className="block font-inter text-gray-800 font-medium text-base md:text-base tracking-wide leading-snug mb-1">Email Address</label>
              <input name="email" id="email" type="email" placeholder="Your Email Address" className="w-full font-inter font-normal text-base bg-transparent border-b border-gray-300 focus:border-blue-400 outline-none py-2 px-1 leading-snug tracking-normal placeholder:text-gray-400" required />
              <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>
            <div className="md:col-span-2">
              <label className="block font-inter text-gray-800 font-medium text-base md:text-base tracking-wide leading-snug mb-1">Role Applied For</label>
              <select name="role" id="role" className="w-full font-inter font-normal text-base bg-transparent border-b border-gray-300 focus:border-blue-400 outline-none py-2 px-1 leading-snug tracking-normal" required>
                <option value="">Select a role</option>
                {roles.map((role) => (
                  <option key={role} value={role}>{role}</option>
                ))}
              </select>
              <ValidationError prefix="Role" field="role" errors={state.errors} />
            </div>
            <div>
              <label className="block font-inter text-gray-800 font-medium text-base md:text-base tracking-wide leading-snug mb-1">Location</label>
              <input name="location" id="location" type="text" placeholder="Your Location" className="w-full font-inter font-normal text-base bg-transparent border-b border-gray-300 focus:border-blue-400 outline-none py-2 px-1 leading-snug tracking-normal placeholder:text-gray-400" required />
              <ValidationError prefix="Location" field="location" errors={state.errors} />
            </div>
            <div>
              <label className="block font-inter text-gray-800 font-medium text-base md:text-base tracking-wide leading-snug mb-1">LinkedIn URL</label>
              <input name="linkedin" id="linkedin" type="url" placeholder="https://linkedin.com/in/yourprofile" className="w-full font-inter font-normal text-base bg-transparent border-b border-gray-300 focus:border-blue-400 outline-none py-2 px-1 leading-snug tracking-normal placeholder:text-gray-400" required />
              <ValidationError prefix="LinkedIn" field="linkedin" errors={state.errors} />
            </div>
            <div className="md:col-span-2">
              <label className="block font-inter text-gray-800 font-medium text-base md:text-base tracking-wide leading-snug mb-1">Resume Link</label>
              <input name="resumeLink" id="resumeLink" type="url" placeholder="Paste a link to your resume (Google Drive, Dropbox, LinkedIn, etc.)" className="w-full font-inter font-normal text-base bg-transparent border-b border-gray-300 focus:border-blue-400 outline-none py-2 px-1 leading-snug tracking-normal placeholder:text-gray-400" required />
              <ValidationError prefix="Resume Link" field="resumeLink" errors={state.errors} />
            </div>
          </div>
          <button type="submit" disabled={state.submitting} className="mt-2 px-8 py-3 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white font-bold font-inter rounded-2xl hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 transition-all duration-500 transform hover:scale-110 text-base md:text-lg tracking-wide disabled:opacity-50 disabled:cursor-not-allowed">
            {state.submitting ? 'Submitting...' : 'Submit Application'}
          </button>
        </form>
      )}
    </div>
  );
};

export default Careers; 