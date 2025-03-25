import { teamData } from '../constants/team';
import TeamMember from '../components/TeamMember';
import React from 'react';
const Team = () => {
  return (
    <div className="flex flex-col font-semibold">
      {/* Hero Section */}
      <section className="bg-black text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Team</h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto">
            Meet the experts behind Shivika Infra Solutions
          </p>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-black">Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamData.filter(member => member.role.toLowerCase().includes('founder') || member.role.toLowerCase().includes('ceo')).map((member, index) => (
              <TeamMember key={index} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Core Team */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-black">Core Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamData.filter(member => !member.role.toLowerCase().includes('founder') && !member.role.toLowerCase().includes('ceo')).map((member, index) => (
              <TeamMember key={index} member={member} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;