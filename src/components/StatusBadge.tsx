
import React from 'react';

type StatusType = 'delivered' | 'transit' | 'pending' | 'problem';

interface StatusBadgeProps {
  status: StatusType;
}

const statusLabels: Record<StatusType, string> = {
  delivered: 'Delivered',
  transit: 'In Transit',
  pending: 'Pending',
  problem: 'Problem'
};

const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  return (
    <span className={`status-badge status-${status}`}>
      {statusLabels[status]}
    </span>
  );
};

export default StatusBadge;
