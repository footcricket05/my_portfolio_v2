import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const experiences = [
  {
    title: "Internship Trainee",
    company: "Centre for Artificial Intelligence & Robotics, DRDO",
    location: "Bangalore",
    duration: "Oct 2024 - Present",
    responsibilities: [
      "Analyzed vessel density (signals/km²) across ports within India's EEZ using AIS data.",
      "Integrated data flows across Neo4j, PostgreSQL and HBase with Apache NiFi, improving efficiency by 35%.",
      "Implemented HPA for K8s clusters using GPU metrics with Prometheus, optimizing resource usage by 40%."
    ]
  },
  {
    title: "Data Analytics Intern",
    company: "ONEMi.in (Kissht.com) Technology Solutions Pvt. Ltd.",
    location: "Mumbai",
    duration: "Feb 2023 – May 2023",
    responsibilities: [
      "Analyzed user data for loan types and delinquency rates, boosting marketing effectiveness by 15% and cutting default rates by 10%.",
      "Conducted comparative analysis of ticket size and loan frequency, improving competitive positioning by 20%.",
      "Led conversion of an R project to Python, reducing project time by 25% and enhancing code maintainability."
    ]
  }
]

const Experience = () => {
  return (
    <section id="experience" className="py-16">
      <h2 className="text-3xl font-bold mb-8">Experience</h2>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{exp.title}</CardTitle>
              <CardDescription>{exp.company} - {exp.location}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-2">{exp.duration}</p>
              <ul className="list-disc pl-5 space-y-1">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx}>{resp}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

export default Experience

