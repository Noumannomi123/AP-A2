import { useRouter } from 'next/router';

export default function Help() {
  const router = useRouter();
  const { slug } = router.query;

  const renderContent = () => {
    if (!slug) return <p>Welcome to the Help Section</p>;

    switch (slug[0]) {
      case 'faqs':
        return <p>Frequently Asked Questions</p>;
      case 'contact':
        return <p>Contact Us</p>;
      case 'privacy':
        return <p>Privacy Policy</p>;
      default:
        return <p>Help Topic Not Found</p>;
    }
  };

  return (
    <div>
      <h1>Help Section</h1>
      {renderContent()}
    </div>
  );
} 