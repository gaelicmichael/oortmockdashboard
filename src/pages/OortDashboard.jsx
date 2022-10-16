import React, { useState } from 'react';
import { PageHeader, DataTable } from 'grommet';

import { PageTemplate } from "../components/PageTemplate";

const columns = [
  {
    property: 'name',
    header: 'Name',
    primary: true,
  },
  {
    property: 'id',
    header: 'ID',
  },
  {
    property: 'type',
    header: 'Type',
  },
  {
    property: 'state',
    header: 'State',
  },
  {
    property: 'az',
    header: 'Zone',
  },
  {
    property: 'publicIP',
    header: 'Public IP',
  },
  {
    property: 'privateIPs',
    header: 'Private IPs',
  },
];

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function getRandomName() {
  // const alphaNum = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const alpha = 'abcdefghijklmnopqrstuvwxyz';
  const len = getRandom(5, 12);
  let name = [];
  for (let i=0; i<len; i++) {
    const r = getRandom(0, 25);
    name.push(alpha.substring(r, r+1));
  }
  name[0] = name[0].toUpperCase();
  return name.join('');
}

function getRandomInstanceID() {
  const alphaNum = 'ABCDEF0123456789';
  let name = [];
  for (let i=0; i<16; i++) {
    const r = getRandom(0, 16);
    name.push(alphaNum.substring(r, r+1));
  }
  return 'i-' + name.join('');
}

function getRandomArrayItem(thisArray) {
  return thisArray[getRandom(0, thisArray.length-1)];
}

function getRandomAWSZone() {
  const allZones = [
    'us-east-2', 'us-east-1', 'us-west-1', 'us-west-2', 'af-south-1', 'ap-east-1',
    'ap-southeast-3', 'ap-south-1', 'ap-northeast-3', 'ap-northeast-2', 'ap-southeast-1',
    'ap-southeast-2', 'ap-northeast-1', 'ca-central-1', 'eu-central-1', 'eu-west-1',
    'eu-west-2', 'eu-south-1', 'eu-west-3', 'eu-north-1', 'me-south-1', 'me-central-1', 'sa-east-1'
  ];
  return getRandomArrayItem(allZones);
}

function getRandomType() {
  const allTypes = [
    't2.nano', 't2.micro', 't2.small', 't2.medium', 't2.large', 't2.xlarge', 't2.2xlarge'
  ];
  return getRandomArrayItem(allTypes);
}

function getRandomState() {
  const allStates = [
    'pending', 'running', 'stopping', 'stopped', 'shutting-down', 'terminated'
  ];
  return getRandomArrayItem(allStates);
}

function getRandomIP() {
  return `${getRandom(0, 127)}.${getRandom(0, 127)}.${getRandom(0, 127)}.${getRandom(0, 127)}`;
}

const data = [];

for (let i=0; i<40; i++) {
  let randomEntry = {
    name: getRandomName(),
    id: getRandomInstanceID(),
    type: getRandomType(),
    state: getRandomState(),
    az: getRandomAWSZone(),
    publicIP: getRandomIP(),
    privateIPs: getRandomIP(),
  };
  data.push(randomEntry);
}

export const OortDashboardPage = () => {
  const [select, setSelect] = useState([]);

  return (
  <PageTemplate>
    <PageHeader title="Dashboard" subtitle="Simulated Oort Dashboard with mock data" size="small" />
    <DataTable columns={columns} data={data} onSelect={setSelect} select={select}
      sortable step={10} paginate />
  </PageTemplate>
  )
};
