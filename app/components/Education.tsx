import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const Education = () => {
  return (
    <section id="education" className="py-16">
      <h2 className="text-3xl font-bold mb-8">Education</h2>
      <Card>
        <CardHeader>
          <CardTitle>B.Tech - Computer Science Engineering with specialization in IoT</CardTitle>
          <CardDescription>SRM Institute of Science and Technology, KTR</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-2">Sept 2021 – present</p>
          <p>CGPA: 9.43</p>
        </CardContent>
      </Card>
    </section>
  )
}

export default Education

