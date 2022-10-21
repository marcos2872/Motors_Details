import styled from '@emotion/styled';

const Body = styled.div`
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-items: center;
  min-height: 100vh;
  gap: 1.5rem;
`;

const Contents = styled.section`
  background-color: transparent;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const MotorDetails = styled.section`
  background-color: transparent;
  width: 30%;
  min-width: 300px;
  padding: 1rem;
  padding-top: 2rem;
  gap: 1rem;
`;

const ImageBravia = styled.img`
  background-color: transparent;
  width: 90%;
  border-radius: 10px;
`;

const ImageB = styled.section`
  background-color: transparent;
  width: 60%;
  min-width: 400px;
  display: flex;
  justify-content: center;
`;

const Text = styled.p`
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 48px;
`;

const ImagesMotor = styled.section`
  background-color: transparent;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
`;

const ImageM = styled.img`
  width: 30%;
  min-width: 300px;
  border-radius: 10px;
`;

const Video = styled.section`
  background-color: transparent;
  display: flex;
  justify-content: center;
`;

export { Body, Contents, MotorDetails, Text, ImageB, ImageBravia, ImagesMotor, ImageM, Video };
