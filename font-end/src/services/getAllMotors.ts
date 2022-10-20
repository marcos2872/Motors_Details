import api from './api';

const getMotors = async () => {
  const motors = await api.get('motors', {});
  console.log(motors);

  return motors;
};

export default getMotors;
