import Link from "next/link";

export default () => {
  return (
    <div className="text-white">
      <p>
        You've reached the online CV of Scott. An all around problem-solver that enjoys building tech using the latest in web-technologies. In search of new full-time and contract opportunities where I can gain experience working with new teams, and
        management styles. Presently I rely on Typescript, React + NextJS, NodeJS, SQL to deliver app experiences and
        use Kubernetes + Docker to deploy high availability APIs
        (REST/GraphQL) on a variety of cloud platforms (AWS, OVH and bare-metal).
        I'm actively searching for new projects to apply my skills in UI/API development as well as
        DevOps.
      </p>
      <br />
      <p>
        Outside of freelancing and developing private apps for clients (Shopify Apps, MS Teams Apps, Custom Rewards Programs, QR Code generators), I've spent the last 2 years developing a LinkedIn marketing platform called{" "}
        <Link href="https://sonity.info?via=Scotty1234" className="underline text-blue-500 visited:text-purple-500">
          Sonity
        </Link>.
        The crux of my LinkedIn automation tool uses Selenium web automation to manage LinkedIn outreach. It's used primarily by professional types to promote their services and boost their sales -- but it's also a great data-mining endeavour.
        The app is growing -- I'd be happy to{" "}
        <Link href="https://calendly.com/scotth-sonity/30min" target="_blank" className="underline text-blue-500 visited:text-purple-500">
          book a demo
        </Link>.
      </p>
      <br />
      <p>
        Although my trade is software development, I was formally educated in Electrical Engineering and frequently find myself working on IoT projects. Research-wise -- I try and keep up to
        date with topics and applications in AI, distributive systems, blockchain and have authored intellectual property pertaining thereto.
      </p>
    </div>
  );
};
