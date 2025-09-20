import React from 'react';
import Image from 'next/image';

type Driver = {
  name: string;
  role: string;
  message: string;
  image: string;
};

const drivers: Driver[] = [
  {
    name: 'U.T. Khader',
    role: 'Honourable Speaker, Legislative Assembly, Govt. Of Karnataka',
    message:
      'Every report brings us closer to protecting a young mind. Stay vigilant, speak up, and we will stand with you.',
    image: '/U.T._Khadar.webp',
  },
  {
    name: 'Brijesh Chowta',
    role: 'Member of Parliament',
    message:
      'A drug-free coastline demands fearless citizens. Your courage to report fuels our resolve to act.',
    image: '/Brijesh_Chowta.webp',
  },
  {
    name: 'Darshan H V',
    role: 'Deputy Commissioner, Dakshina Kannda',
    message:
      'We are aligning every district resource to back genuine information and protect families from traffickers.',
    image: '/Darshan_HV.webp',
  },
  {
    name: 'Sudhir Kumar Reddy',
    role: 'IPS, Mangaluru City Police',
    message:
      'Timely intelligence from the community lets us dismantle the supply chain before it reaches our children.',
    image: '/Sudhir_Kumar_Reddy.webp',
  },
  {
    name: 'Dr. Arun Kumar',
    role: 'Superintendent of Police, Dakshina Kannada',
    message:
      'This campaign ensures every student has a shield. Report without fear—we are ready to respond.',
    image: '/Dr_Arun.webp',
  },
  {
    name: 'Hariram Shankar',
    role: 'IPS, Superintendent of Police, Udupi',
    message:
      'Together we build a protective network across Udupi district. Your vigilance strengthens our mission to keep communities drug-free.',
    image: '/Hariram.webp',
  },
];

const InitiativeDrivers = () => {
  return (
    <section className="bg-background py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-flex items-center justify-center rounded-full bg-primary/10 px-4 py-1 text-sm font-semibold uppercase tracking-wide text-primary">
            Initiative Drivers
          </span>
          <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
            Leaders Powering The Mission
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Civic and law enforcement champions are reinforcing the community&apos;s voice so every credible lead triggers swift, coordinated action.
          </p>
        </div>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 xl:grid-cols-3">
          {drivers.map((driver) => (
            <div
              key={driver.name}
              className="bg-card rounded-3xl p-6 sm:p-8 shadow-lg transition transform duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mb-5">
                <div className="mx-auto sm:mx-0 h-20 w-20 overflow-hidden rounded-2xl border border-border/60">
                  <Image
                    src={driver.image}
                    alt={driver.name}
                    width={80}
                    height={80}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground">{driver.name}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">{driver.role}</p>
                </div>
              </div>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                {driver.message}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InitiativeDrivers;
