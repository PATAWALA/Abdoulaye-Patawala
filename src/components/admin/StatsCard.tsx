import React from 'react';

interface StatsCardProps {
  label: string;
  value: string | number;
  icon: string;
  trend?: string;
}

const StatsCard: React.FC<StatsCardProps> = ({ label, value, icon, trend }) => (
  <div className="bg-dark-800 border border-dark-700 rounded-2xl p-6 hover:border-gold-500/20 transition-all duration-500">
    <div className="flex items-center justify-between mb-4">
      <span className="text-3xl">{icon}</span>
      {trend && <span className="text-xs text-green-400 bg-green-400/10 px-2 py-1 rounded-full">{trend}</span>}
    </div>
    <p className="text-3xl font-bold text-white mb-1">{value}</p>
    <p className="text-gray-500 text-sm">{label}</p>
  </div>
);

export default StatsCard;