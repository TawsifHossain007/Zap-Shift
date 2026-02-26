import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
// import "react-tabs/style/react-tabs.css"; // keep removed

export default function AboutUs() {
  // reusable styles
  const tabStyle =
    "py-3 px-2 cursor-pointer text-gray-500 border-b-2 border-transparent transition";

  const activeTabStyle =
    "text-primary border-b-2 border-primary font-semibold";

  return (
    <div className="max-w-5xl mx-auto p-20 bg-white rounded-xl shadow mt-10">
      
      {/* Heading */}
      <h1 className="text-3xl font-bold mb-3">About Us</h1>

      <p className="text-[#606060] font-normal text-[16px] mb-6 border-b-2 border-gray-200 pb-6">
        Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle.
        From personal <br />
        packages to business shipments — we deliver on time, every time.
      </p>

      <Tabs>
        {/* Tabs */}
        <TabList className="flex gap-8 border-b border-gray-200">
          <Tab className={tabStyle} selectedClassName={activeTabStyle}>
            Story
          </Tab>

          <Tab className={tabStyle} selectedClassName={activeTabStyle}>
            Mission
          </Tab>

          <Tab className={tabStyle} selectedClassName={activeTabStyle}>
            Success
          </Tab>

          <Tab className={tabStyle} selectedClassName={activeTabStyle}>
            Team & Others
          </Tab>
        </TabList>

        {/* STORY */}
        <TabPanel>
          <div className="mt-6 space-y-4 text-gray-700">
            <p>
              We started with a simple promise — to make parcel delivery fast,
              reliable, and stress-free. Over the years, our commitment to
              real-time tracking, efficient logistics, and customer-first service
              has made us a trusted partner for thousands.
            </p>

            <p>
              Whether it’s a personal gift or a time-sensitive business delivery,
              we ensure it reaches its destination safely and on time. Our
              platform connects customers, riders, and administrators in one
              smart ecosystem for smooth parcel handling.
            </p>

            <p>
              Today, we provide nationwide delivery services, secure payment
              systems, and flexible rider opportunities to support modern
              logistics needs.
            </p>
          </div>
        </TabPanel>

        {/* MISSION */}
        <TabPanel>
          <div className="mt-6 space-y-4 text-gray-700">
            <p>
              Our mission is to revolutionize delivery services by combining
              technology with efficient logistics operations.
            </p>

            <ul className="list-disc ml-6 space-y-2">
              <li>Provide fast and secure parcel delivery services.</li>
              <li>Enable real-time tracking for full transparency.</li>
              <li>Create earning opportunities for delivery riders.</li>
              <li>Ensure affordable and fair pricing for customers.</li>
              <li>Build an efficient admin system for task delegation.</li>
            </ul>

            <p>
              We aim to simplify parcel sending while maintaining high reliability,
              safety, and customer satisfaction.
            </p>
          </div>
        </TabPanel>

        {/* SUCCESS */}
        <TabPanel>
          <div className="mt-6 space-y-4 text-gray-700">
            <p>
              Our platform has successfully delivered thousands of parcels with
              high customer satisfaction and reliable service.
            </p>

            <ul className="list-disc ml-6 space-y-2">
              <li>Thousands of successful parcel deliveries.</li>
              <li>Growing network of verified riders.</li>
              <li>Efficient admin-controlled delivery management.</li>
              <li>Secure payment and transaction system.</li>
              <li>Trusted by individuals and businesses.</li>
            </ul>

            <p>
              Through innovation and continuous improvement, we continue to expand
              our delivery network and enhance service quality.
            </p>
          </div>
        </TabPanel>

        {/* TEAM */}
        <TabPanel>
          <div className="mt-6 space-y-4 text-gray-700">
            <p>
              Our system operates through collaboration between customers,
              riders, and administrators.
            </p>

            <h3 className="font-semibold text-lg">Platform Roles</h3>

            <ul className="list-disc ml-6 space-y-2">
              <li>
                <strong>Customers:</strong> Send parcels by paying a delivery fee
                and track shipments in real-time.
              </li>

              <li>
                <strong>Riders:</strong> Register to deliver parcels and earn by
                completing delivery tasks assigned by admins.
              </li>

              <li>
                <strong>Admins:</strong> Manage deliveries, assign tasks to riders,
                monitor operations, and ensure service quality.
              </li>
            </ul>

            <p>
              Together, we maintain a reliable delivery ecosystem that benefits
              everyone.
            </p>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
}