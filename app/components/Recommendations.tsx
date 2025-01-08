'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

// This is a placeholder for LinkedIn recommendations. You'll need to replace this with actual data.
const recommendations = [
  {
    name: "John Doe",
    position: "Senior Data Scientist at Tech Corp",
    recommendation: "Shaurya is an exceptional talent in the field of AI and IoT. His work on the FuzzAIoT project was innovative and showed great promise for improving IoT security."
  },
  {
    name: "Jane Smith",
    position: "Project Manager at Data Analytics Co.",
    recommendation: "I had the pleasure of working with Shaurya during his internship at ONEMi.in. His analytical skills and ability to translate complex data into actionable insights were impressive. Shaurya's contribution significantly improved our marketing strategies and risk assessment models."
  },
  {
    name: "Dr. Rajesh Kumar",
    position: "Professor at SRM Institute of Science and Technology",
    recommendation: "Shaurya is one of the brightest students I've had the privilege to teach. His understanding of IoT and AI concepts is exceptional, and he consistently applies this knowledge in practical, innovative ways. His academic performance and research contributions are truly commendable."
  }
]

const Recommendations = () => {
  const [visibleRecs, setVisibleRecs] = useState(2)

  return (
    <section id="recommendations" className="py-16">
      <h2 className="text-3xl font-bold mb-8">LinkedIn Recommendations</h2>
      <div className="space-y-6">
        {recommendations.slice(0, visibleRecs).map((rec, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{rec.name}</CardTitle>
              <CardDescription>{rec.position}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{rec.recommendation}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      {visibleRecs < recommendations.length && (
        <div className="mt-6 text-center">
          <Button onClick={() => setVisibleRecs(recommendations.length)}>
            Show More Recommendations
          </Button>
        </div>
      )}
    </section>
  )
}

export default Recommendations

