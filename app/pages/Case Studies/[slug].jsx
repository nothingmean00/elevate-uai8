import Head from "next/head"
import { useRouter } from "next/router"

/**
 * This data replicates the 'caseStudiesData' from the accordion component.
 * In a real-world scenario, you may choose to keep it in a shared file (e.g., `lib/caseStudiesData.js`)
 * or fetch from an API or CMS.
 */
const caseStudiesData = [
  {
    slug: "full-ride-scholarship",
    title: "Full-Ride Scholarship: From Average Scores to 100% Financial Aid",
    quote: `"ElevateU’s AI completely changed my approach to applications—I couldn’t be happier!" — Emily`,
    articleBody: `Emily struggled with a 1050 SAT and was unsure about her major. Through ElevateU’s AI-driven Roadmap, she discovered niche scholarships and streamlined her application process. Within three months, her essay portfolio stood out, and she ultimately secured a full-ride scholarship to her dream university.\n\nKey metrics:\n• Increased SAT from 1050 to 1250\n• Earned $90,000 in total scholarship funds\n• Accepted into 5 out of 7 applied colleges`,
  },
  {
    slug: "accepted-into-nyu-stern",
    title: "Accepted into NYU Stern: Crafting a Standout Business Application",
    quote: `"The 24/7 AI Chat Counselor helped me refine my personal brand for top business schools." — Jordan`,
    articleBody: `Jordan’s passion for finance was evident, but he struggled to articulate his leadership experiences. Using ElevateU’s Application Assistant, Jordan crafted a compelling personal narrative highlighting his student-run investment club. Ultimately, he landed a spot at NYU Stern—one of the country’s premier business programs.\n\nKey metrics:\n• Acceptance rate: 1 out of 10 top-tier business schools\n• Scholarship: $25,000 partial scholarship\n• Undergraduate business ranking: #5 in the nation`,
  },
  {
    slug: "accepted-into-harvard",
    title: "Accepted into Harvard: Overcoming a Low GPA with Stellar Essays",
    quote: `"My GPA wasn't perfect, but my essays—thanks to ElevateU’s feedback—told my real story." — Lisa`,
    articleBody: `Lisa had a 3.3 GPA but strong community service experiences. She worked closely with a Harvard alum mentor (through ElevateU) to align her unique extracurricular history with Harvard’s values. Her essays emphasized dedication, leadership, and empathy. Despite fierce competition, she earned that sought-after Harvard acceptance.\n\nKey metrics:\n• GPA: 3.3, below Harvard’s average of ~3.9\n• Volunteer hours: 300+ in local community center\n• First-generation college student success`,
  },
  {
    slug: "accepted-into-upenn",
    title: "Accepted into UPenn: Turning Transfer Dreams into Reality",
    quote: `"I never thought I could jump from community college to an Ivy, but ElevateU showed me the way." — Marcus`,
    articleBody: `Marcus spent two years at a local community college before realizing he wanted an Ivy League experience. ElevateU matched him with UPenn alumni mentors who helped refine his transfer essays and highlight academic achievements from community college. The strategic approach led him straight into UPenn’s incoming transfer class.\n\nKey metrics:\n• Improved Transfer Admission Chance from ~5% to acceptance\n• Leadership roles in community college: 2 clubs\n• Graduation on track in 2 more years`,
  },
  {
    slug: "improve-sat-score-by-200-points",
    title: "Improve SAT Score by 200 Points: A Data-Driven Study Plan",
    quote: `"The personalized study schedule zeroed in on my weaknesses—my SAT jumped from 1100 to 1300!" — Chloe`,
    articleBody: `Chloe struggled with standardized tests and felt overwhelmed by available resources. ElevateU’s AI analyzed her testing history, identifying specific question types she missed. A custom study plan minimized guesswork and maximized progress. In just eight weeks, Chloe’s SAT skyrocketed by 200 points, broadening her college options and potential scholarships.\n\nKey metrics:\n• SAT improvement: +200 points\n• Preferred learning style: Interactive quizzes\n• Scholarship eligibility: 3 new offers opened up`,
  },
  {
    slug: "full-ride-scholarship-to-ivy-league",
    title: "Full-Ride Scholarship to Ivy League: Breaking Financial Barriers",
    quote: `"I thought Ivy League schools were off-limits financially. Now I’m attending tuition-free!" — Sam`,
    articleBody: `Sam dreamed of the Ivy League but hesitated due to financial constraints. Leveraging ElevateU’s Scholarship Finder, Sam applied to multiple programs. He also discovered lesser-known grants offered to low-income, high-achieving students. The result: multiple full-ride scholarship offers, including one from an Ivy League institution.\n\nKey metrics:\n• Received 2 full-ride offers, 1 partial scholarship\n• Demonstrated need-based and merit-based awards\n• Ivy League ranking: top 3 choice acceptance`,
  },
  {
    slug: "from-athlete-to-academic-scholar",
    title: "From Athlete to Academic Scholar: Balancing Sports & Studies",
    quote: `"ElevateU helped me create a realistic schedule that boosted my GPA and my athletic performance." — Taylor`,
    articleBody: `Taylor was a standout soccer player but needed a robust academic record. ElevateU’s AI balanced training schedules with a structured study plan, ensuring Taylor’s GPA soared while maintaining peak athletic shape. Result: a dual scholarship for sports and academics at a Division I university.\n\nKey metrics:\n• GPA increase: 2.9 to 3.5\n• Maintained 20 hrs/week practice schedule\n• Scholarship package: 50% athletic, 25% academic`,
  },
  {
    slug: "non-traditional-student-career-pivot",
    title: "Non-Traditional Student Lands $50k Scholarship: Career Pivot Success",
    quote: `"I never thought I'd go back to school after 5 years in retail, but ElevateU changed that." — Maria`,
    articleBody: `Maria wanted to transition from retail to nursing but was unsure where to start. ElevateU’s AI mapped out required prerequisites, connected her with healthcare mentors, and identified a $50,000 scholarship. She’s now pursuing a top nursing program—proof that a non-traditional path doesn’t limit academic dreams.\n\nKey metrics:\n• Work gap: 5 years in retail\n• Scholarship total: $50,000\n• Program acceptance: 3 highly-ranked nursing schools`,
  },
]

export async function getStaticPaths() {
  // Generate paths for all case studies
  const paths = caseStudiesData.map(({ slug }) => ({
    params: { slug },
  }))

  return {
    paths,
    fallback: false, // or 'blocking' if you prefer
  }
}

export async function getStaticProps({ params }) {
  const { slug } = params
  const caseStudy = caseStudiesData.find((item) => item.slug === slug)

  // If not found (unlikely here), you could handle 404 or fallback
  if (!caseStudy) {
    return { notFound: true }
  }

  return {
    props: {
      caseStudy,
    },
  }
}

export default function CaseStudyPage({ caseStudy }) {
  const router = useRouter()
  if (router.isFallback) {
    return <div>Loading...</div>
  }

  // Construct "Article" schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: caseStudy.title,
    articleBody: caseStudy.articleBody,
    author: {
      "@type": "Organization",
      name: "ElevateU",
    },
    // You can add more properties as needed (datePublished, image, etc.)
  }

  return (
    <>
      <Head>
        <title>{caseStudy.title} | ElevateU Success Stories</title>
        <meta
          name="description"
          content={`Read how one student achieved success: ${caseStudy.title}`}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
      </Head>

      <main className="container py-16 md:py-24">
        <article className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-4">{caseStudy.title}</h1>
          <blockquote className="border-l-4 border-primary pl-4 text-muted-foreground italic mb-6">
            {caseStudy.quote}
          </blockquote>
          <p className="text-muted-foreground whitespace-pre-line">{caseStudy.articleBody}</p>
        </article>
      </main>
    </>
  )
}
