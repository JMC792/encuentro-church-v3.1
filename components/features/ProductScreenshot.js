import { CloudArrowUpIcon, LockClosedIcon, ServerIcon, CheckCircleIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'

const features = [
  {
    name: 'Faithful and Compassionate Service',
    description:
      'With a heart for service, Encuentro Church is committed to responding to the needs of our congregation and community with care and compassion. We strive to create an environment where everyone feels seen, heard, and uplifted.',
    icon: CheckCircleIcon,
  },
  {
    name: 'Biblical Teaching and Spiritual Growth',
    description: 'Grounded in biblical truth, our teachings provide wisdom, encouragement, and direction for daily life. We are passionate about helping individuals grow in their faith and deepen their relationship with God through worship, study, and prayer.',
    icon: CheckCircleIcon,
  },
  {
    name: 'Committed to Community and Fellowship',
    description: 'At Encuentro Church, we believe in the power of fellowship and unity. Whether through worship services, outreach programs, or small groups, we are dedicated to creating meaningful connections and building a strong, faith-filled community.',
    icon: CheckCircleIcon,
  },
]

export default function ProductScreenshot(props) {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          
          {/* Text */}
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-primary">
                About Us
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Our Story and Mission
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
              Encuentro Church was founded with a mission to create a welcoming community rooted in faith, love, and service. We are dedicated to guiding individuals and families in their spiritual journey while fostering a deep connection with God and one another.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-primary" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          {/* Image */}
          <img
            alt=""
            src="https://images.unsplash.com/photo-1507692049790-de58290a4334?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
          />
        </div>
      </div>
    </div>
  )
}
