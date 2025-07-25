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
        <h1 className="text-4xl md:text-5xl font-bold font-sans text-gray-900 mb-4">Join Our Team</h1>
        <p className="text-gray-700 text-base md:text-lg font-sans font-medium mb-2">We're always looking for talented people to help us build the future of cloud, DevOps, and digital transformation.</p>
        <p className="text-gray-500 text-sm md:text-base font-sans mb-2">Fill out the form below and our team will get in touch if there's a fit!</p>
      </div>
      <form
        className="max-w-2xl w-full mx-auto bg-white/60 backdrop-blur-md shadow-xl rounded-2xl px-6 md:px-12 py-10 md:py-12 flex flex-col gap-6"
        onSubmit={handleSubmit}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-800 font-medium font-sans mb-1">First Name</label>
            <input name="firstName" value={form.firstName} onChange={handleChange} type="text" placeholder="Enter First Name" className="w-full bg-transparent border-b border-gray-300 focus:border-blue-400 outline-none py-2 px-1 font-sans" />
          </div>
          <div>
            <label className="block text-gray-800 font-medium font-sans mb-1">Last Name</label>
            <input name="lastName" value={form.lastName} onChange={handleChange} type="text" placeholder="Enter Last Name" className="w-full bg-transparent border-b border-gray-300 focus:border-blue-400 outline-none py-2 px-1 font-sans" />
          </div>
          <div>
            <label className="block text-gray-800 font-medium font-sans mb-1">Phone Number</label>
            <input name="phone" value={form.phone} onChange={handleChange} type="tel" placeholder="Your Phone Number" className="w-full bg-transparent border-b border-gray-300 focus:border-blue-400 outline-none py-2 px-1 font-sans" />
          </div>
          <div>
            <label className="block text-gray-800 font-medium font-sans mb-1">Email Address</label>
            <input name="email" value={form.email} onChange={handleChange} type="email" placeholder="Your Email Address" className="w-full bg-transparent border-b border-gray-300 focus:border-blue-400 outline-none py-2 px-1 font-sans" />
          </div>
          <div className="md:col-span-2">
            <label className="block text-gray-800 font-medium font-sans mb-1">Role Applied For</label>
            <select name="role" value={form.role} onChange={handleChange} className="w-full bg-transparent border-b border-gray-300 focus:border-blue-400 outline-none py-2 px-1 font-sans">
              <option value="">Select a role</option>
              {roles.map((role) => (
                <option key={role} value={role}>{role}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-gray-800 font-medium font-sans mb-1">Location</label>
            <input name="location" value={form.location} onChange={handleChange} type="text" placeholder="Your Location" className="w-full bg-transparent border-b border-gray-300 focus:border-blue-400 outline-none py-2 px-1 font-sans" />
          </div>
          <div>
            <label className="block text-gray-800 font-medium font-sans mb-1">LinkedIn URL</label>
            <input name="linkedin" value={form.linkedin} onChange={handleChange} type="url" placeholder="https://linkedin.com/in/yourprofile" className="w-full bg-transparent border-b border-gray-300 focus:border-blue-400 outline-none py-2 px-1 font-sans" />
          </div>
          <div className="md:col-span-2">
            <label className="block text-gray-800 font-medium font-sans mb-1">Resume</label>
            <input name="resume" onChange={handleChange} type="file" accept=".pdf,.doc,.docx" className="w-full bg-transparent border-b border-gray-300 focus:border-blue-400 outline-none py-2 px-1 font-sans file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" />
          </div>
        </div>
        {error && <div className="mb-2 text-red-600 font-semibold text-center font-sans">{error}</div>}
        {success && <div className="mb-2 text-green-600 font-semibold text-center font-sans">{success}</div>}
        <button type="submit" className="mt-2 px-8 py-3 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white font-bold font-sans rounded-2xl hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 transition-all duration-500 transform hover:scale-110">Submit Application</button>
      </form>
    </div>
  );
};

export default Careers; 