import React from 'react';
import { motion } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

export const Reviews = () => {
  const reviews = [
    // Add more reviews as needed
    {
      name: "Shounak Chandra",
      position: "Intern @ Ericsson | Software Developer | AR/VR, Game Dev & DevOps Enthusiast | AWS Geek | Ex-Blockchain Developer @ Cubane | Oracle Certified Professional",
      image: "https://media.licdn.com/dms/image/v2/D5603AQEnQwM66gcJNQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1704660465223?e=1741824000&v=beta&t=RflMZfE7H8iwELFICS7Uqbv9Ts_dyjAjMHpJlc_oZ_k",
      text: "Shaurya Srinet is a powerhouse of talent and leadership. Having worked alongside him on numerous projects and hackathons, I’ve witnessed firsthand his unmatched ability to drive teams toward extraordinary success. Shaurya doesn’t just lead; he commands with vision, precision, and an unrelenting drive for excellence. His strategic brilliance and ability to solve challenges with ease make him an unstoppable force. If you’re lucky enough to work with Shaurya, prepare to have your expectations shattered—in the best way possible. This is a leader who defines what it means to dominate and deliver.",
      connection: "Worked together at SRMIST"
    },
    {
      name: "Yusuf Usmani",
      position: "Content marketer & Architect for your needs",
      image: "https://media.licdn.com/dms/image/v2/C4D03AQElWInM24SZTw/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1626007966839?e=1741824000&v=beta&t=0joSZVtewtLOcHtZF_OyMuyd3sFxy0myvEfKcx8fiqM",
      text: "Today's AI times require a developer who can precisely solve your problem. And Shaurya happens to fall in that category for sure. For my product exploration journey and the team I assembled on projects, Shaurya turned out to be the fastest. He can easily convince your machine to behave as per requirements, just not his friends. If a startup is looking forward to assembling a team of developers who can work to close the objectives in the shortest turnaround time possible, they can onboard Shaurya!",
      connection: "Worked together at Stick & Dot"
    },
    {
      name: "Shinjan P ",
      position: " building stuff | sde - ai @ Ionio.ai | gen.ai, saas products",
      image: "https://media.licdn.com/dms/image/v2/D5603AQGXDzb5fZB76w/profile-displayphoto-shrink_400_400/B56ZRBuQifHoAk-/0/1736269433512?e=1741824000&v=beta&t=a7388faNlcI3YMh_cCAhsP8QuH_1rRksyhQFewPi950",
      text: "During our time working together on IoT and ML projects at dBug Labs, I've been consistently struck by Shaurya's remarkable intellectual prowess, unwavering dedication to his work, and a deep-rooted passion for Computer Science. His unique blend of creative and analytical skills in tackling complex problems is truly noteworthy. Shaurya excels not only academically but also shines as a proactive member of various technical groups, infusing our academic circles with a spirit of positivity and teamwork. I am confident in recommending Shaurya Srinet to any future employer or academic program within the IT realm. His solid integrity, commendable character, and steadfast commitment set him up as an exceptional senior, poised for significant achievements in his future endeavors!",
      connection: "Worked together at DBug Labs, SRM"
    },
    {
      name: "Charvi Jain",
      position: "AI/ML Engineer | Building Smarter, Scalable Solutions",
      image: "https://media.licdn.com/dms/image/v2/D5603AQFw_YpC2H4QuA/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1720300671687?e=1741824000&v=beta&t=ylZvFd7Uou7XZXFvjjQCJAlwPWpi3KoQZ0mqSHx4SO8",
      text: "I had the privilege of collaborating with Shaurya Srinet on numerous projects and hackathons, where his exceptional teamwork, leadership qualities, and ability to seamlessly integrate into diverse teams stood out. Shaurya's strategic approach and dedication were pivotal in guiding our teams toward success, and his ability to inspire and navigate challenges made him an invaluable asset. His positive influence and supportive nature greatly enhanced team dynamics, making our collaborative efforts both productive and enjoyable.",
      connection: "Worked together at SRMIST"
    },
    {
      name: "Mohit Kumar Kushwaha",
      position: "DevOps Engineer and Cloud Architect at Bajaj Finance Ltd. | Microsoft Azure - AZ-400, AZ-204, AZ-104, AZ-900, AI-900, AI-102, DP-900 certified | AWS Academy Graduate - Cloud Practitioner, Solutions Architectle",
      image: "https://media.licdn.com/dms/image/v2/D5603AQHANxRfxo7YfQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1715203035587?e=1741824000&v=beta&t=NRhk8CywmMYj_XOeTXchz9w776C_UI8qXX2_Ebotudk",
      text: "Around 2 months back, Shaurya joined the RMC. He was assigned to me as a Logical Explorer Volunteer for Technical Domain. He was very proficient in the work/tasks assigned to him. I would describe him as a Friendly, active Team member, Hardworking, Trustworthy, Optimistic, and a curious person. He was consistent throughout the event planning and execution. I feel delighted to have work with him. I worked with him on many tasks and there was nothing to complain regarding quality of his work.",
      connection: "Worked together at Ramanujan Mathematics Club, SRM"
    },
    {
      name: "Daksh",
      position: "SDE @ Ionio | Flutter | B.Tech CSE | 950K+ content views on Quora",
      image: "https://media.licdn.com/dms/image/v2/D5603AQEDt2UMInNWig/profile-displayphoto-shrink_400_400/B56ZPdfvCnH0Ag-/0/1734587905207?e=1741824000&v=beta&t=UzgfpT1cGoFogAQcr8oQ85tsgCEjWKzK3d5U7e5geW8",
      text: "Through our interactions on IoT and ML in dBug Labs, I've been impressed by Shaurya's outstanding intellect, strong work ethic, and genuine passion for Computer Science. His ability to creatively and analytically approach problem-solving sets him apart. Whether excelling in exams or actively contributing to technical clubs, Shaurya brings a positive and collaborative spirit to our academic community. I wholeheartedly recommend Shaurya Srinet to any prospective employer or graduate program in the field of IT. His integrity, character, and dedication make him a standout senior destined for success in his forthcoming endeavours!",
      connection: "Worked together at DBug Labs, SRM"
    },
    {
      name: "Mihir Pandit",
      position: "Human Resource Enthusiast | Senior Talent Aquisition@HR-Able Technologies| HRTech Operations | Sourcing | Screening | Hiring | Training | Business Administration",
      image: "https://media.licdn.com/dms/image/v2/D4D03AQGqKgtgaYbzLw/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1710485833430?e=1741824000&v=beta&t=C5O2cdMPgLZ39c1TO_JanYFJgOVAqOHMylKO9cGOL9g",
      text: "Shaurya is the best Subordinate I've ever had. He is one of the most dedicated professionals I've worked with, and he is always willing to lend a helping hand when you need it. His expertise aided the team in developing more efficient solutions for various projects. Continue to Grow!!",
      connection: "Worked together at Myequation.in"
    },
    {
      name: "Harsh Raj",
      position: "Associate Engineer at SHELL || Remote Monitoring and Remote Operations",
      image: "https://media.licdn.com/dms/image/v2/D5603AQFt8iX8Zl0Hcw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1731135052757?e=1741824000&v=beta&t=7ejLZxlLkoaYXkNVxQGsEHDlFlM0uBqP0B5bRS-TFA0",
      text: "Shaurya has been a great team leader and consistently contribute to the team with new ideas and stacks. He had always been honest with the team and had carried out several projects and papers with the coordination of the team. Shaurya would be an asset to any team.",
      connection: "Worked together at Think-Digital, SRM"
    },
    {
      name: "Arsh Bhatia",
      position: "Technical Associate @Razorpay || Former Intern @DRDO || Founder @NSCC SRM || 850+ DSA @Leetcode || Oracle Certified || Fintech",
      image: "https://media.licdn.com/dms/image/v2/D4D03AQFe0oCxfGXUFA/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1702618943703?e=1741824000&v=beta&t=w4n4yE-_ICowH9ImPfISJ0n6j8u5eOu0wCPc7cKqFX8",
      text: "Over the course of his four months, as a sales representative at TechAnalogy, Shaurya amassed the best sales record of anyone on the team. He’s a hard worker and an excellent salesperson. As a member of the sales team, Shaurya was responsible for exceeding sales targets, cold-calling, and building relationships. To be successful in sales, one must have a natural ability to communicate with others and know just what to say at the right time. Shaurya had these skills in spades. Customers liked him because he was able to establish real connections with them. Because of his abilities and the success he’s had, he comes highly recommended.",
      connection: "Worked together at Myequation.in"
    },
  ];

  const scrollContainer = React.useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainer.current) {
      const scrollAmount = 300;
      scrollContainer.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="reviews" className="py-20 bg-[var(--bg-secondary)]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-[var(--text-primary)] mb-16">LinkedIn Reviews</h2>
        
        <div className="relative">
          {/* Scroll Buttons */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-[var(--bg-primary)] p-2 rounded-full shadow-lg text-[var(--text-primary)] hover:bg-[var(--accent)] transition-colors"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-[var(--bg-primary)] p-2 rounded-full shadow-lg text-[var(--text-primary)] hover:bg-[var(--accent)] transition-colors"
          >
            <ChevronRight size={24} />
          </button>

          {/* Reviews Container */}
          <div
            ref={scrollContainer}
            className="flex overflow-x-auto gap-8 pb-4 snap-x snap-mandatory hide-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex-none w-[350px] snap-center"
              >
                <div className="bg-[var(--bg-primary)] p-6 rounded-xl shadow-xl h-full">
                  <Quote className="text-[var(--accent)] mb-4" size={32} />
                  <p className="text-[var(--text-secondary)] mb-6 italic">{review.text}</p>
                  <div className="flex items-center">
                    <img
                      src={review.image}
                      alt={review.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h4 className="text-[var(--text-primary)] font-semibold">{review.name}</h4>
                      <p className="text-[var(--text-secondary)] text-sm">{review.position}</p>
                      <p className="text-[var(--accent)] text-sm">{review.connection}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};