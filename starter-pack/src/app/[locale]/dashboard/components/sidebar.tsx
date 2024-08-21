import React from 'react';
import { Card, Button } from "@nextui-org/react";
import { FaHouse, FaChartBar, FaUser, FaGear } from 'react-icons/fa6';

const DashboardSidebar = () => {
  return (
    <Card className="h-screen w-64 p-4">
      <div className="flex flex-col gap-4">
        <Button
          startContent={<FaHouse size={24} />}
          className="justify-start"
          variant="light"
        >
          Home
        </Button>
        <Button
          startContent={<FaChartBar size={24} />}
          className="justify-start"
          variant="light"
        >
          Analytics
        </Button>
        <Button
          startContent={<FaUser size={24} />}
          className="justify-start"
          variant="light"
        >
          Profile
        </Button>
        <Button
          startContent={<FaGear size={24} />}
          className="justify-start"
          variant="light"
        >
          Settings
        </Button>
      </div>
    </Card>
  );
};

export default DashboardSidebar;