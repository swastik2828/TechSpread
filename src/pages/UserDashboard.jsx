import React from 'react'

const UserDashboard = () => {
  return (
    <div>
       <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0a0f1c] via-[#111827] to-[#0f172a] text-gray-100">
      <motion.h1
        className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        Coming Soon....
      </motion.h1>
    </section>
    </div>
  )
}

export default UserDashboard
