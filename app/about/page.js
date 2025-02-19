"use client";
import Breadcrumbs from "@/components/Breadcrumbs";
import IstiLayout from "@/layout/IstiLayout";
import Image from "next/image";
import dynamic from 'next/dynamic';

// Dynamically import Nivo to ensure client-side rendering
const NivoLine = dynamic(() => import('@nivo/line').then((mod) => mod.ResponsiveLine), {
  ssr: false,
});

const sampleData = [
  {
    id: 'growth',
    data: [
      { x: 'Q1', y: 10 },
      { x: 'Q2', y: 20 },
      { x: 'Q3', y: 30 },
      { x: 'Q4', y: 40 },
    ],
  },
];

const impactData = [
  {
    id: 'AI-Driven Insights',
    data: [
      { x: 'Initial', y: 0 },
      { x: 'Improved', y: 40 },
    ],
  },
  {
    id: 'Intuitive UI/UX',
    data: [
      { x: 'Initial', y: 0 },
      { x: 'Improved', y: 25 },
    ],
  },
  {
    id: 'Scalable Solutions',
    data: [
      { x: 'Initial', y: 0 },
      { x: 'Adaptable', y: 100 },
    ],
  },
];

export default function About() {
  return (
    <IstiLayout>
      <Breadcrumbs pageTitle={"ABOUT US"} />
      <section className="tf__about_clasic pt_115 pb_150">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 mb-4">
              <div className="tf__about_clasic_img" data-animation="img-blur">
            
              </div>
            </div>
          </div>

          <div className="row mt-5 align-items-start">
            <div className="col-12 mb-4">
              <div className="tf__about_clasic_text">
                <h2 className="about_title">
                  Driving Business Growth Through Intelligent Technology
                </h2>
                <p>
                  In today&apos;s competitive landscape, businesses need more than just software 
                  – they need intelligent solutions that drive tangible results. Our cutting-edge 
                  AI and UI technologies are meticulously designed to transform your operational 
                  efficiency, boost productivity, and unlock unprecedented business growth.
                </p>
                <p>
                  We don&apos;t just create technology; we craft strategic advantages that 
                  give businesses a critical edge in their markets. By seamlessly integrating 
                  advanced AI capabilities with intuitive user interfaces, we turn complex 
                  challenges into streamlined opportunities.
                </p>
              </div>
            </div>
          </div>

          <div className="row mt-5 align-items-start">
            <div className="col-12 mb-4">
              <div className="section-title text-center mb-4">
                <h3>Our Commitment to Your Success</h3>
              </div>
            </div>
            {[
              {
                title: "AI-Driven Insights",
                description: "Leverage predictive analytics to make data-driven decisions that directly impact your bottom line.",
                impact: "Up to 40% improved decision-making accuracy"
              },
              {
                title: "Intuitive UI/UX",
                description: "Reduce learning curves and increase user adoption with seamlessly designed interfaces.",
                impact: "25% faster user onboarding and engagement"
              },
              {
                title: "Scalable Solutions",
                description: "Custom technologies that grow with your business, ensuring long-term technological relevance.",
                impact: "Adaptable to businesses of all sizes and industries"
              }
            ].map((value, index) => (
              <div key={index} className="col-md-4 mb-4">
                <div className="tf__single_blog_clasic text-center">
                  <div className="tf__blog_clasic_text">
                    <h4 className="blog_title">{value.title}</h4>
                    <p>{value.description}</p>
                    <div className="impact-highlight" style={{ height: '100px', width: '100%' }}>
                      <strong>{value.impact}</strong>
                      <div style={{ height: '50px', width: '100%' }}>
                        <NivoLine
                          data={[impactData[index]]}
                          margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
                          xScale={{ type: 'point' }}
                          yScale={{ type: 'linear', min: 0, max: 'auto', stacked: false, reverse: false }}
                          axisTop={null}
                          axisRight={null}
                          axisBottom={null}
                          axisLeft={null}
                          colors={{ scheme: 'category10' }}
                          pointSize={8}
                          pointColor="inherit"
                          pointBorderWidth={2}
                          pointBorderColor={{ from: 'serieColor' }}
                          enableGridX={false}
                          enableGridY={false}
                          useMesh={true}
                          enableArea={true}
                          areaBaselineValue={0}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="row mt-5">
            <div className="col-12">
              <div className="tf__chart">
                <NivoLine
                  data={sampleData}
                  margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
                  xScale={{ type: 'point' }}
                  yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
                  axisTop={null}
                  axisRight={null}
                  axisBottom={{
                    orient: 'bottom',
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'Quarter',
                    legendOffset: 36,
                    legendPosition: 'middle',
                  }}
                  axisLeft={{
                    orient: 'left',
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'Growth',
                    legendOffset: -40,
                    legendPosition: 'middle',
                  }}
                  colors={{ scheme: 'nivo' }}
                  pointSize={10}
                  pointColor={{ theme: 'background' }}
                  pointBorderWidth={2}
                  pointBorderColor={{ from: 'serieColor' }}
                  pointLabelYOffset={-12}
                  useMesh={true}
                />
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-12 text-center">
              <div className="tf__blog_link">
                <a href="/contact" className="common_btn">
                  Schedule a Consultation
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </IstiLayout>
  );
}
