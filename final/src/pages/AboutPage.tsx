import { PageContainer } from '../components';
import { Typography } from '@mui/material';

const AboutPage = () => {
  return (
    <PageContainer styles={{ marginTop: '20px' }}>
      <Typography variant="h1" gutterBottom sx={{ fontSize: '2rem' }}>
        About
      </Typography>
      <Typography variant="body1" gutterBottom>
      With our easy-to-use platform, you can find the best hotels, flights, and rental services that suit your preferences and budget. We partner with leading travel providers to offer you exclusive deals and discounts, ensuring that you get the most value for your trip.

      <ul>Why Choose Travel With <span style={{ fontWeight: "600", color: "orange" }}>Booking</span>?
        <li style={{ paddingTop: "10px" }}>Comprehensive Search Options: Explore a wide range of destinations, accommodations, and travel services all in one place.</li>
        <li>Exclusive Deals: Take advantage of special offers and discounts that can make your travel more affordable.</li>
        <li>Customer Support: Our dedicated team is available 24/7 to assist you with any inquiries or issues, ensuring a smooth travel experience.</li>
        <li>User-Friendly Interface: Booking your next trip is simple and fast with our intuitive platform, whether you're a seasoned traveler or planning your first getaway.</li>
      </ul>
      </Typography>
    </PageContainer>
  );
};

export default AboutPage;
