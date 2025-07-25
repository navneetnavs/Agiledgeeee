import React, { useState } from 'react';

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
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    role: '',
    location: '',
    linkedin: '',
    resume: null,
  });
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      setForm({ ...form, [name]: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
    setError('');
    setSuccess('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.firstName || !form.lastName || !form.phone || !form.email || !form.role || !form.location || !form.linkedin || !form.resume) {
      setError('Please fill in all fields.');
      return;
    }
    setSuccess('Application submitted!');
    setForm({
      firstName: '', lastName: '', phone: '', email: '', role: '', location: '', linkedin: '', resume: null,
    });
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-white via-blue-50 to-cyan-100 flex flex-col items-center justify-center py-16 px-4">
      <div className="max-w-2xl w-full mx-auto mb-10 text-center">
        <h1 className="font-heading font-bold text-3xl md:text-4xl text-gray-900 mb-4 tracking-tight leading-tight">Join Our Team</h1>
        <p className="font-inter text-gray-700 text-base md:text-lg font-normal mb-2 leading-relaxed">We're always looking for talented people to help us build the future of cloud, DevOps, and digital transformation.</p>
        <p className="font-inter text-gray-600 text-sm md:text-base font-normal mb-2 leading-relaxed">Fill out the form below and our team will get in touch if there's a fit!</p>
      </div>
      <form
        className="max-w-2xl w-full mx-auto bg-white/60 backdrop-blur-md shadow-xl rounded-2xl px-6 md:px-12 py-10 md:py-12 flex flex-col gap-6"
        onSubmit={handleSubmit}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block font-inter text-gray-800 font-medium text-base md:text-base tracking-wide leading-snug mb-1">First Name</label>
            <input name="firstName" value={form.firstName} onChange={handleChange} type="text" placeholder="Enter First Name" className="w-full font-inter font-normal text-base bg-transparent border-b border-gray-300 focus:border-blue-400 outline-none py-2 px-1 leading-snug tracking-normal placeholder:text-gray-400" />
          </div>
          <div>
            <label className="block font-inter text-gray-800 font-medium text-base md:text-base tracking-wide leading-snug mb-1">Last Name</label>
            <input name="lastName" value={form.lastName} onChange={handleChange} type="text" placeholder="Enter Last Name" className="w-full font-inter font-normal text-base bg-transparent border-b border-gray-300 focus:border-blue-400 outline-none py-2 px-1 leading-snug tracking-normal placeholder:text-gray-400" />
          </div>
          <div>
            <label className="block font-inter text-gray-800 font-medium text-base md:text-base tracking-wide leading-snug mb-1">Phone Number</label>
            <input name="phone" value={form.phone} onChange={handleChange} type="tel" placeholder="Your Phone Number" className="w-full font-inter font-normal text-base bg-transparent border-b border-gray-300 focus:border-blue-400 outline-none py-2 px-1 leading-snug tracking-normal placeholder:text-gray-400" />
          </div>
          <div>
            <label className="block font-inter text-gray-800 font-medium text-base md:text-base tracking-wide leading-snug mb-1">Email Address</label>
            <input name="email" value={form.email} onChange={handleChange} type="email" placeholder="Your Email Address" className="w-full font-inter font-normal text-base bg-transparent border-b border-gray-300 focus:border-blue-400 outline-none py-2 px-1 leading-snug tracking-normal placeholder:text-gray-400" />
          </div>
          <div className="md:col-span-2">
            <label className="block font-inter text-gray-800 font-medium text-base md:text-base tracking-wide leading-snug mb-1">Role Applied For</label>
            <select name="role" value={form.role} onChange={handleChange} className="w-full font-inter font-normal text-base bg-transparent border-b border-gray-300 focus:border-blue-400 outline-none py-2 px-1 leading-snug tracking-normal">
              <option value="">Select a role</option>
              {roles.map((role) => (
                <option key={role} value={role}>{role}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block font-inter text-gray-800 font-medium text-base md:text-base tracking-wide leading-snug mb-1">Location</label>
            <input name="location" value={form.location} onChange={handleChange} type="text" placeholder="Your Location" className="w-full font-inter font-normal text-base bg-transparent border-b border-gray-300 focus:border-blue-400 outline-none py-2 px-1 leading-snug tracking-normal placeholder:text-gray-400" />
          </div>
          <div>
            <label className="block font-inter text-gray-800 font-medium text-base md:text-base tracking-wide leading-snug mb-1">LinkedIn URL</label>
            <input name="linkedin" value={form.linkedin} onChange={handleChange} type="url" placeholder="https://linkedin.com/in/yourprofile" className="w-full font-inter font-normal text-base bg-transparent border-b border-gray-300 focus:border-blue-400 outline-none py-2 px-1 leading-snug tracking-normal placeholder:text-gray-400" />
          </div>
          <div className="md:col-span-2">
            <label className="block font-inter text-gray-800 font-medium text-base md:text-base tracking-wide leading-snug mb-1">Resume</label>
            <input name="resume" onChange={handleChange} type="file" accept=".pdf,.doc,.docx" className="w-full font-inter font-normal text-base bg-transparent border-b border-gray-300 focus:border-blue-400 outline-none py-2 px-1 leading-snug tracking-normal file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" />
          </div>
        </div>
        {error && <div className="mb-2 text-red-600 font-semibold text-center font-inter text-base leading-snug">{error}</div>}
        {success && <div className="mb-2 text-green-600 font-semibold text-center font-inter text-base leading-snug">{success}</div>}
        <button type="submit" className="mt-2 px-8 py-3 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white font-bold font-inter rounded-2xl hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 transition-all duration-500 transform hover:scale-110 text-base md:text-lg tracking-wide">Submit Application</button>
      </form>
    </div>
  );
};

export default Careers; 